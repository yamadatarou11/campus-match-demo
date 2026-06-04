from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
import json
import os
import sqlite3
import sys
import time


ROOT = Path(__file__).resolve().parent
DB_DIR = ROOT / "data"
DB_PATH = DB_DIR / "campus_match.db"


def connect_db():
    DB_DIR.mkdir(exist_ok=True)
    return sqlite3.connect(DB_PATH)


def init_db():
    with connect_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS app_snapshots (
              key TEXT PRIMARY KEY,
              value TEXT NOT NULL,
              updated_at INTEGER NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS accounts (
              email TEXT PRIMARY KEY,
              password TEXT NOT NULL,
              name TEXT NOT NULL,
              gender TEXT,
              grade TEXT,
              age TEXT,
              school TEXT,
              faculty TEXT,
              interests TEXT,
              looking_for TEXT,
              type TEXT,
              bio TEXT,
              photos TEXT,
              updated_at INTEGER NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS matches (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              owner_email TEXT NOT NULL,
              target_name TEXT NOT NULL,
              payload TEXT NOT NULL,
              updated_at INTEGER NOT NULL,
              UNIQUE(owner_email, target_name)
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS likes (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              owner_email TEXT NOT NULL,
              target_name TEXT NOT NULL,
              payload TEXT NOT NULL,
              updated_at INTEGER NOT NULL,
              UNIQUE(owner_email, target_name)
            )
            """
        )
        seed_demo_accounts(conn)


def seed_demo_accounts(conn):
    now = int(time.time())
    conn.execute(
        """
        INSERT OR IGNORE INTO accounts
        (email, password, name, gender, grade, age, school, faculty, interests, looking_for, type, bio, photos, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            "demo@campus.ac.jp",
            "demo1234",
            "Demo Haruka",
            "male",
            "2",
            "20",
            "明青大学 経営学部",
            "経営学部",
            "映画, カフェ巡り, 音楽",
            "友達づくり",
            "気軽に話せる人",
            "仮アカウントです。プロフィール画面から編集できます。",
            "[]",
            now,
        ),
    )
    schools = ["明青大学", "東都大学", "湾岸大学大学院", "南原大学", "桜丘大学"]
    faculties = ["経営学部", "文学部", "情報学部", "国際学部", "理工学部", "経済学研究科"]
    grades = ["1", "2", "3", "4", "m1", "m2"]
    interests = [
        "映画, カフェ巡り, 音楽",
        "読書, 美術館, 語学",
        "スポーツ, 起業, ランニング",
        "写真, 旅行, ライブ",
        "ゲーム, アニメ, ボードゲーム",
        "研究, 勉強会, コーヒー",
    ]
    for index in range(30):
        number = index + 1
        gender = "female" if number % 2 == 0 else "male"
        faculty = faculties[index % len(faculties)]
        conn.execute(
            """
            INSERT OR IGNORE INTO accounts
            (email, password, name, gender, grade, age, school, faculty, interests, looking_for, type, bio, photos, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                f"demo{number}@campus.ac.jp",
                f"demo{number}",
                f"Demo {number:02d}",
                gender,
                grades[index % len(grades)],
                str(18 + (index % 8)),
                f"{schools[index % len(schools)]} {faculty}",
                faculty,
                interests[index % len(interests)],
                "恋人探し" if index % 3 == 0 else "友達づくり" if index % 3 == 1 else "勉強仲間",
                "気軽に話せる人",
                f"デモ用アカウント{number}です。学生向けマッチングの動作確認に使えます。",
                "[]",
                now,
            ),
        )


def json_response(handler, status, payload):
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.end_headers()
    handler.wfile.write(body)


def read_json(handler):
    length = int(handler.headers.get("Content-Length", "0"))
    if length <= 0:
        return {}
    return json.loads(handler.rfile.read(length).decode("utf-8"))


class CampusHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/health":
            init_db()
            json_response(self, 200, {"ok": True, "database": str(DB_PATH.name)})
            return
        if path == "/api/demo-accounts":
            init_db()
            with connect_db() as conn:
                rows = conn.execute(
                    "SELECT email, password, name, gender, grade, age, school FROM accounts ORDER BY email"
                ).fetchall()
            json_response(
                self,
                200,
                {
                    "accounts": [
                        {
                            "email": row[0],
                            "password": row[1],
                            "name": row[2],
                            "gender": row[3],
                            "grade": row[4],
                            "age": row[5],
                            "school": row[6],
                        }
                        for row in rows
                    ]
                },
            )
            return
        super().do_GET()

    def do_POST(self):
        path = urlparse(self.path).path
        if path == "/api/snapshot":
            init_db()
            payload = read_json(self)
            now = int(time.time())
            allowed = {
                "campusAccounts",
                "campusMatches",
                "campusLikes",
                "campusReports",
                "campusBlockedUsers",
            }
            with connect_db() as conn:
                for key, value in payload.items():
                    if key in allowed:
                        conn.execute(
                            """
                            INSERT INTO app_snapshots (key, value, updated_at)
                            VALUES (?, ?, ?)
                            ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
                            """,
                            (key, json.dumps(value, ensure_ascii=False), now),
                        )
            json_response(self, 200, {"ok": True})
            return
        if path == "/api/login":
            init_db()
            payload = read_json(self)
            with connect_db() as conn:
                row = conn.execute(
                    "SELECT email, name, gender, grade, age, school FROM accounts WHERE email = ? AND password = ?",
                    (payload.get("email", ""), payload.get("password", "")),
                ).fetchone()
            if not row:
                json_response(self, 401, {"ok": False, "message": "login failed"})
                return
            json_response(
                self,
                200,
                {
                    "ok": True,
                    "account": {
                        "email": row[0],
                        "name": row[1],
                        "gender": row[2],
                        "grade": row[3],
                        "age": row[4],
                        "school": row[5],
                    },
                },
            )
            return
        json_response(self, 404, {"ok": False, "message": "not found"})


def run(host="0.0.0.0", port=4174):
    init_db()
    server = ThreadingHTTPServer((host, port), CampusHandler)
    print(f"Campus Match server: http://{host}:{port}/index.html")
    print(f"SQLite database: {DB_PATH}")
    server.serve_forever()


if __name__ == "__main__":
    selected_port = int(os.environ.get("PORT") or (sys.argv[1] if len(sys.argv) > 1 else 4174))
    run(port=selected_port)
