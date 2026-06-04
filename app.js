const candidates = [
  {
    name: "Sora",
    age: "20",
    grade: "2",
    gender: "male",
    school: "明青大学 情報学部",
    distance: "同じ沿線",
    bio: "週末は映画館かボードゲーム会にいます。授業の合間に気軽に話せる人とつながりたいです。",
    prompt: "理想の放課後は、映画を一本観てから感想を言い合う時間。",
    interests: ["映画", "音楽", "カフェ巡り"],
    tone: "linear-gradient(140deg, #1f7a5f, #3267a8)"
  },
  {
    name: "Mina",
    age: "21",
    grade: "3",
    gender: "female",
    school: "東都大学 文学部",
    distance: "3km以内",
    bio: "本屋、展示、静かなカフェが好きです。新しい場所を一緒に開拓できる人を探しています。",
    prompt: "最近のマイブームは、古い喫茶店のプリンを記録すること。",
    interests: ["カフェ巡り", "映画", "美術館"],
    tone: "linear-gradient(140deg, #db6f5f, #c28720)"
  },
  {
    name: "Ren",
    age: "24",
    grade: "m1",
    gender: "male",
    school: "湾岸大学大学院 経済学研究科",
    distance: "近隣キャンパス",
    bio: "学生起業サークルで活動中。アイデアを話したり、ランニングできる友達がほしいです。",
    prompt: "朝ラン後のコーヒーと、まだ粗いアイデアの壁打ちが好き。",
    interests: ["起業", "スポーツ", "読書"],
    tone: "linear-gradient(140deg, #3267a8, #1f7a5f)"
  },
  {
    name: "Aoi",
    age: "19",
    grade: "1",
    gender: "female",
    school: "南原大学 国際学部",
    distance: "オンライン歓迎",
    bio: "軽音サークルでギター練習中。ライブ、語学、夜の散歩が好きです。",
    prompt: "仲良くなったら、好きな曲を一曲ずつ交換したい。",
    interests: ["音楽", "カフェ巡り", "語学"],
    tone: "linear-gradient(140deg, #c28720, #1f7a5f)"
  },
  {
    name: "Yui",
    age: "20",
    grade: "2",
    gender: "female",
    school: "明青大学 社会学部",
    distance: "同じキャンパス",
    bio: "広報サークルでイベント運営をしています。授業後にカフェで話したり、休日に展示を見に行ける人と出会いたいです。",
    prompt: "最近うれしかったことは、友達と作ったイベントのポスターを学内で見かけたこと。",
    interests: ["カフェ巡り", "デザイン", "展示"],
    tone: "linear-gradient(140deg, #ff4d6d, #8b5cf6)"
  },
  {
    name: "Rina",
    age: "22",
    grade: "4",
    gender: "female",
    school: "東都大学 法学部",
    distance: "2km以内",
    bio: "ゼミと資格勉強の合間に、気軽にごはんへ行ける人を探しています。落ち着いて話せる時間が好きです。",
    prompt: "休日は朝に散歩して、午後は本屋で一冊選ぶのが定番です。",
    interests: ["読書", "散歩", "和食"],
    tone: "linear-gradient(140deg, #3267a8, #ff7a59)"
  },
  {
    name: "Mei",
    age: "19",
    grade: "1",
    gender: "female",
    school: "南原大学 理工学部",
    distance: "近隣キャンパス",
    bio: "ロボット研究会に入りました。理系の話も、音楽や映画の話もできる友達がほしいです。",
    prompt: "仲良くなったら、学食のおすすめメニューを一緒に開拓したい。",
    interests: ["プログラミング", "映画", "学食巡り"],
    tone: "linear-gradient(140deg, #55a6ff, #4be8c0)"
  },
  {
    name: "Nana",
    age: "21",
    grade: "3",
    gender: "female",
    school: "桜丘大学 経済学部",
    distance: "同じ沿線",
    bio: "旅行と写真が好きです。新しい場所を一緒に見つけたり、将来のこともゆっくり話せる人が理想です。",
    prompt: "今行きたい場所は、海が見える小さな町と古い喫茶店。",
    interests: ["旅行", "写真", "喫茶店"],
    tone: "linear-gradient(140deg, #ff7a59, #c28720)"
  },
  {
    name: "Hina",
    age: "20",
    grade: "2",
    gender: "female",
    school: "湾岸大学 国際教養学部",
    distance: "オンライン歓迎",
    bio: "留学準備中で英会話を練習しています。お互いの好きな文化や音楽を交換できる関係が好きです。",
    prompt: "最近ハマっているのは、海外ドラマを字幕なしで少しずつ見ること。",
    interests: ["語学", "音楽", "海外ドラマ"],
    tone: "linear-gradient(140deg, #8b5cf6, #55a6ff)"
  },
  {
    name: "Mao",
    age: "23",
    grade: "m1",
    gender: "female",
    school: "明青大学大学院 心理学研究科",
    distance: "研究室近く",
    bio: "大学院で心理学を研究しています。静かなカフェで話したり、美術館を歩ける人とつながりたいです。",
    prompt: "好きな時間は、研究の区切りに飲む一杯のラテと、夕方の散歩。",
    interests: ["心理学", "美術館", "カフェ"],
    tone: "linear-gradient(140deg, #1f7a5f, #ff4d6d)"
  },
  {
    name: "Kanon",
    age: "18",
    grade: "1",
    gender: "female",
    school: "東都大学 音楽学部",
    distance: "同じ沿線",
    bio: "ピアノ専攻です。ライブ、映画、夜の散歩が好きで、感性が近い人と話してみたいです。",
    prompt: "好きな曲を一曲ずつ交換して、プレイリストを作るのが理想です。",
    interests: ["ピアノ", "ライブ", "映画"],
    tone: "linear-gradient(140deg, #db6f5f, #3267a8)"
  },
  {
    name: "Sara",
    age: "22",
    grade: "4",
    gender: "female",
    school: "南原大学 教育学部",
    distance: "3km以内",
    bio: "教育実習に向けて準備中です。明るく前向きに話せる人、休日に公園やカフェへ行ける人と出会いたいです。",
    prompt: "最近の小さな目標は、朝型生活に戻して余裕のある一日を作ること。",
    interests: ["教育", "カフェ", "散歩"],
    tone: "linear-gradient(140deg, #4be8c0, #ff7a59)"
  }
];

const moderationChecks = [
  "新規登録者の大学メール認証ログを確認",
  "通報が2件以上のユーザーを24時間以内にレビュー",
  "イベント参加者リストに不自然な大量申込がないか確認",
  "プロフィール内の外部ID・電話番号・住所を確認"
];

const receivedLikes = [
  { ...candidates[1], receivedMessage: "プロフィールの雰囲気が気になっています。" },
  { ...candidates[3], receivedMessage: "同じキャンパスなので話してみたいです。" }
];

const demoAccount = {
  name: "Demo Haruka",
  email: "demo@campus.ac.jp",
  password: "demo1234",
  school: "明青大学 経営学部",
  gender: "male",
  faculty: "経営学部",
  interests: "映画, カフェ巡り, 音楽",
  lookingFor: "友達づくり",
  type: "気軽に話せる人",
  photo: "",
  bio: "仮アカウントです。ログイン後にプロフィール画面から編集できます。"
};

const demoFaculties = ["経営学部", "文学部", "情報学部", "国際学部", "理工学部", "経済学研究科"];
const demoGrades = ["1", "2", "3", "4", "m1", "m2"];
const demoInterests = [
  "映画, カフェ巡り, 音楽",
  "読書, 美術館, 語学",
  "スポーツ, 起業, ランニング",
  "写真, 旅行, ライブ",
  "ゲーム, アニメ, ボードゲーム",
  "研究, 勉強会, コーヒー"
];
const demoTypes = ["気軽に話せる人", "一緒に遊べる人", "価値観が近い人", "落ち着いて話せる人", "新しいことを楽しめる人"];
const demoSchools = ["明青大学", "東都大学", "湾岸大学大学院", "南原大学", "桜丘大学"];

const numberedDemoAccounts = Array.from({ length: 30 }, (_, index) => {
  const number = index + 1;
  const gender = number % 2 === 0 ? "female" : "male";
  const grade = demoGrades[index % demoGrades.length];
  const faculty = demoFaculties[index % demoFaculties.length];
  const school = demoSchools[index % demoSchools.length];

  return {
    name: `Demo ${String(number).padStart(2, "0")}`,
    email: `demo${number}@campus.ac.jp`,
    password: `demo${number}`,
    school: `${school} ${faculty}`,
    gender,
    grade,
    age: String(18 + (index % 8)),
    faculty,
    interests: demoInterests[index % demoInterests.length],
    lookingFor: index % 3 === 0 ? "恋人探し" : index % 3 === 1 ? "友達づくり" : "勉強仲間",
    type: demoTypes[index % demoTypes.length],
    photo: "",
    bio: `デモ用アカウント${number}です。学生向けマッチングの動作確認に使えます。`
  };
});

let currentIndex = 0;
let matches = JSON.parse(localStorage.getItem("campusMatches") || "[]");
let likes = JSON.parse(localStorage.getItem("campusLikes") || "[]");
let reports = JSON.parse(localStorage.getItem("campusReports") || "[]");
let blockedUsers = JSON.parse(localStorage.getItem("campusBlockedUsers") || "[]");
let activeChat = null;
let profilePhotosData = [];
let activePhotoSlot = null;
let activeCandidateForReport = null;

const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const signupSteps = document.querySelectorAll(".signup-step");
const signupProgress = document.querySelector("#signupProgress");
const currentUserLabel = document.querySelector("#currentUserLabel");
const logoutButton = document.querySelector("#logoutButton");
const startSignupButton = document.querySelector("#startSignupButton");
const backToLoginButton = document.querySelector("#backToLoginButton");
const sendVerificationButton = document.querySelector("#sendVerificationButton");
const verifyCodeButton = document.querySelector("#verifyCodeButton");
const verificationHelp = document.querySelector("#verificationHelp");
const completeSignupButton = document.querySelector("#completeSignupButton");
const signupSkipProfile = document.querySelector("#signupSkipProfile");
const privacyButton = document.querySelector("#privacyButton");
const termsButton = document.querySelector("#termsButton");
const deleteAccountButton = document.querySelector("#deleteAccountButton");
const reportDialog = document.querySelector("#reportDialog");
const reportTarget = document.querySelector("#reportTarget");
const reportReason = document.querySelector("#reportReason");
const reportNote = document.querySelector("#reportNote");
const blockUserButton = document.querySelector("#blockUserButton");
const submitReportButton = document.querySelector("#submitReportButton");
const openProfilePreviewButton = document.querySelector("#openProfilePreviewButton");
const openProfilePreviewTabButton = document.querySelector("#openProfilePreviewTabButton");
const profilePreviewDialog = document.querySelector("#profilePreviewDialog");
const publicPhotoPreview = document.querySelector("#publicPhotoPreview");
const publicProfileName = document.querySelector("#publicProfileName");
const publicProfileMeta = document.querySelector("#publicProfileMeta");
const publicProfileStatus = document.querySelector("#publicProfileStatus");
const publicProfileTags = document.querySelector("#publicProfileTags");
const publicProfileBio = document.querySelector("#publicProfileBio");
const profileName = document.querySelector("#profileName");
const profileSchool = document.querySelector("#profileSchool");
const profileAge = document.querySelector("#profileAge");
const profileGender = document.querySelector("#profileGender");
const profileFaculty = document.querySelector("#profileFaculty");
const profileInterests = document.querySelector("#profileInterests");
const profileLookingFor = document.querySelector("#profileLookingFor");
const profileType = document.querySelector("#profileType");
const profileStatus = document.querySelector("#profileStatus");
const profilePhoto = document.querySelector("#profilePhoto");
const profilePhotoPreview = document.querySelector("#profilePhotoPreview");
const profilePreviewName = document.querySelector("#profilePreviewName");
const profilePreviewMeta = document.querySelector("#profilePreviewMeta");
const profilePreviewStatus = document.querySelector("#profilePreviewStatus");
const profilePreviewTags = document.querySelector("#profilePreviewTags");
const profileBio = document.querySelector("#profileForm textarea[name='bio']");
const candidateCard = document.querySelector("#candidateCard");
const matchGrid = document.querySelector("#matchGrid");
const receivedLikeGrid = document.querySelector("#receivedLikeGrid");
const matchCount = document.querySelector("#matchCount");
const chatCount = document.querySelector("#chatCount");
const messagesView = document.querySelector("#messages");
const conversationList = document.querySelector("#conversationList");
const pendingChatList = document.querySelector("#pendingChatList");
const chatBackButton = document.querySelector("#chatBackButton");
const chatHeader = document.querySelector("#chatHeader");
const chatLog = document.querySelector("#chatLog");
const messageForm = document.querySelector("#messageForm");
const messageInput = document.querySelector("#messageInput");
const toast = document.querySelector("#toast");
const profileBackButton = document.querySelector(".profile-back-button");
let signupStepIndex = 0;
let signupVerificationCode = "";
let signupVerifiedEmail = "";

function loadAccounts() {
  const accounts = JSON.parse(localStorage.getItem("campusAccounts") || "[]");
  const seedAccounts = [demoAccount, ...numberedDemoAccounts];

  seedAccounts.forEach((seedAccount) => {
    const demoIndex = accounts.findIndex((account) => account.email === seedAccount.email);
    if (demoIndex === -1) {
      accounts.push(seedAccount);
      return;
    }

    accounts[demoIndex] = {
      ...seedAccount,
      ...accounts[demoIndex],
      email: seedAccount.email,
      password: seedAccount.password,
      gender: seedAccount.email === demoAccount.email ? demoAccount.gender : (accounts[demoIndex].gender || seedAccount.gender)
    };
  });

  localStorage.setItem("campusAccounts", JSON.stringify(accounts));
  return accounts;
}

function saveAccounts(accounts) {
  localStorage.setItem("campusAccounts", JSON.stringify(accounts));
  syncDatabaseSnapshot();
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("campusCurrentUser") || "null");
}

function setCurrentUser(user) {
  localStorage.setItem("campusCurrentUser", JSON.stringify(user));
}

function syncDatabaseSnapshot() {
  if (!location.protocol.startsWith("http")) return;
  const payload = {
    campusAccounts: JSON.parse(localStorage.getItem("campusAccounts") || "[]"),
    campusMatches: JSON.parse(localStorage.getItem("campusMatches") || "[]"),
    campusLikes: JSON.parse(localStorage.getItem("campusLikes") || "[]"),
    campusReports: JSON.parse(localStorage.getItem("campusReports") || "[]"),
    campusBlockedUsers: JSON.parse(localStorage.getItem("campusBlockedUsers") || "[]")
  };
  fetch("/api/snapshot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

function renderProfilePhoto(user) {
  profilePhotosData = Array.isArray(user.photos) ? user.photos.slice(0, 4) : [];
  if (!profilePhotosData.length && user.photo) {
    profilePhotosData = [user.photo];
  }

  if (profilePhotosData.length) {
    profilePhotoPreview.innerHTML = Array.from({ length: 4 }, (_, index) => {
      const photo = profilePhotosData[index];
      const label = index === 0 ? "メイン写真" : "サブ写真";
      return photo
        ? `<button class="photo-slot ${index === 0 ? "main-photo-slot" : ""}" type="button" data-photo-slot="${index}" aria-label="${label}を変更"><img src="${photo}" alt="プロフィール写真${index + 1}" /><span>${label}</span><i aria-hidden="true">＋</i></button>`
        : `<button class="photo-slot empty-photo-slot ${index === 0 ? "main-photo-slot" : ""}" type="button" data-photo-slot="${index}" aria-label="${label}を追加"><span>${label}</span><i aria-hidden="true">＋</i></button>`;
    }).join("");
  } else {
    profilePhotoPreview.innerHTML = `
      <button class="photo-slot empty-photo-slot main-photo-slot" type="button" data-photo-slot="0" aria-label="メイン写真を追加"><span>メイン写真</span><i aria-hidden="true">＋</i></button>
      <button class="photo-slot empty-photo-slot" type="button" data-photo-slot="1" aria-label="サブ写真を追加"><span>サブ写真</span><i aria-hidden="true">＋</i></button>
      <button class="photo-slot empty-photo-slot" type="button" data-photo-slot="2" aria-label="サブ写真を追加"><span>サブ写真</span><i aria-hidden="true">＋</i></button>
      <button class="photo-slot empty-photo-slot" type="button" data-photo-slot="3" aria-label="サブ写真を追加"><span>サブ写真</span><i aria-hidden="true">＋</i></button>
    `;
  }
}

function profileFormPreviewData() {
  const name = profileName.value.trim() || "ニックネーム";
  const age = profileAge.value.trim() ? `${profileAge.value.trim()}歳` : "年齢未設定";
  const school = profileSchool.value.trim() || "大学未設定";
  const status = profileStatus.value.trim() || "毎日充実していますが、恋愛の方も頑張りたいなと思っています。";
  const tags = profileInterests.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 8);

  return {
    name,
    meta: `${age} / ${school}`,
    status,
    tags,
    bio: profileBio.value.trim() || "自己紹介文が未設定です。",
    photos: profilePhotosData
  };
}

function renderProfilePreview() {
  const preview = profileFormPreviewData();
  profilePreviewName.textContent = preview.name;
  profilePreviewMeta.textContent = preview.meta;
  profilePreviewStatus.textContent = preview.status;
  profilePreviewTags.innerHTML = preview.tags.length
    ? preview.tags.map((tag) => `<span>${tag}</span>`).join("")
    : `<span>好みカード未設定</span>`;
}

function renderPublicProfilePreview() {
  const preview = profileFormPreviewData();
  publicProfileName.textContent = preview.name;
  publicProfileMeta.textContent = preview.meta;
  publicProfileStatus.textContent = preview.status;
  publicProfileBio.textContent = preview.bio;
  publicProfileTags.innerHTML = preview.tags.length
    ? preview.tags.map((tag) => `<span>${tag}</span>`).join("")
    : `<span>好みカード未設定</span>`;
  publicPhotoPreview.innerHTML = Array.from({ length: 4 }, (_, index) => {
    const photo = preview.photos[index];
    const label = index === 0 ? "メイン写真" : "サブ写真";
    return photo
      ? `<div class="photo-slot ${index === 0 ? "main-photo-slot" : ""}"><img src="${photo}" alt="プロフィール写真${index + 1}" /><span>${label}</span></div>`
      : `<div class="photo-slot empty-photo-slot ${index === 0 ? "main-photo-slot" : ""}"><span>${label}</span></div>`;
  }).join("");
}

function applyCurrentUser(user) {
  currentUserLabel.textContent = `${user.name} / 認証済み`;
  profileName.value = user.name;
  profileSchool.value = user.school;
  profileAge.value = user.age || "";
  profileGender.value = user.gender || "other";
  profileFaculty.value = user.faculty || "";
  profileInterests.value = user.interests || "";
  profileLookingFor.value = user.lookingFor || "";
  profileType.value = user.type || "";
  profileStatus.value = user.status || "";
  profileBio.value = user.bio || "授業後に気軽に話せる友達や、一緒にイベントに行ける人と出会いたいです。";
  renderProfilePhoto(user);
  renderProfilePreview();
}

function showApp(user) {
  applyCurrentUser(user);
  authScreen.classList.add("hidden");
  appShell.classList.remove("app-locked");
  currentIndex = 0;
  renderCandidate();
  renderLikes();
  renderConversations();
}

function showAuth() {
  authScreen.classList.remove("hidden");
  appShell.classList.add("app-locked");
  showLoginForm();
}

function isUniversityEmail(email) {
  return /^[^\s@]+@[^\s@]+\.(ac\.jp|edu)$/i.test(email);
}

function parseInterests(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function gradeLabel(grade) {
  const labels = {
    "1": "1年",
    "2": "2年",
    "3": "3年",
    "4": "4年",
    "5": "5年",
    "6": "6年",
    m1: "修士1年",
    m2: "修士2年",
    d1: "博士1年",
    d2: "博士2年",
    d3: "博士3年",
    other: "その他"
  };
  return labels[grade] || `${grade}年`;
}

function canShowCandidateForUser(candidate) {
  if (blockedUsers.includes(candidate.name)) {
    return false;
  }
  const user = getCurrentUser();
  if (user?.gender === "male") {
    return candidate.gender === "female";
  }
  return true;
}

function filteredCandidates() {
  return candidates.filter((candidate) => canShowCandidateForUser(candidate));
}

function renderCandidate() {
  const list = filteredCandidates();
  if (!list.length) {
    candidateCard.innerHTML = `<div class="candidate-body"><h2>条件に合う学生がいません</h2><p>学年条件を広げると候補が表示されます。</p></div>`;
    return;
  }

  currentIndex = currentIndex % list.length;
  const candidate = list[currentIndex];
  candidateCard.innerHTML = `
    <div class="candidate-hero" style="background: ${candidate.tone}">
      <div class="photo-dots"><span></span><span></span><span></span><span></span></div>
      <div class="candidate-photo-mark">${candidate.name.slice(0, 1)}</div>
      <div>
        <div class="candidate-identity">
          <h2>${candidate.name}, ${candidate.age}</h2>
          <div class="candidate-meta">
            <span>${candidate.school}</span>
            <span>${gradeLabel(candidate.grade)}</span>
            <span>${candidate.distance}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="candidate-body">
      <p class="bio-text">${candidate.bio}</p>
      <div class="prompt-card">
        <span>Prompt</span>
        <strong>${candidate.prompt}</strong>
      </div>
      <div class="tag-row">${candidate.interests.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="actions">
        <button type="button" data-action="skip" aria-label="見送る">見送る</button>
        <button type="button" data-action="like" aria-label="いいね">いいね</button>
      </div>
    </div>
  `;
  candidateCard.style.transform = "";
  candidateCard.classList.remove("swipe-right", "swipe-left");
  document.body.classList.remove("preview-like", "preview-bad");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 1800);
}

function playLikeEffect(candidate) {
  const effect = document.createElement("div");
  effect.className = "decision-effect like-effect";
  effect.innerHTML = `
    <span class="like-effect-heart">♥</span>
    <strong>いいね</strong>
    <span class="like-effect-ring"></span>
    <span class="like-effect-spark spark-one">♥</span>
    <span class="like-effect-spark spark-two">♥</span>
    <span class="like-effect-spark spark-three">♥</span>
  `;
  document.body.appendChild(effect);
  window.setTimeout(() => effect.remove(), 900);
}

function playBadEffect(candidate) {
  const effect = document.createElement("div");
  effect.className = "decision-effect bad-effect";
  effect.innerHTML = `
    <span class="bad-effect-mark">×</span>
    <strong>バツ</strong>
    <span class="bad-effect-ring"></span>
    <span class="bad-effect-spark spark-one">×</span>
    <span class="bad-effect-spark spark-two">×</span>
    <span class="bad-effect-spark spark-three">×</span>
  `;
  document.body.appendChild(effect);
  window.setTimeout(() => effect.remove(), 900);
}

function saveMatches() {
  localStorage.setItem("campusMatches", JSON.stringify(matches));
  syncDatabaseSnapshot();
}

function saveLikes() {
  localStorage.setItem("campusLikes", JSON.stringify(likes));
  syncDatabaseSnapshot();
}

function saveReports() {
  localStorage.setItem("campusReports", JSON.stringify(reports));
  syncDatabaseSnapshot();
}

function saveBlockedUsers() {
  localStorage.setItem("campusBlockedUsers", JSON.stringify(blockedUsers));
  syncDatabaseSnapshot();
}

function removeUserFromLocalLists(userName) {
  likes = likes.filter((like) => like.name !== userName);
  matches = matches.filter((match) => match.name !== userName);
  saveLikes();
  saveMatches();
  renderLikes();
  renderConversations();
}

function addLike(candidate) {
  if (!likes.some((like) => like.name === candidate.name)) {
    likes.push(candidate);
    saveLikes();
  }
  renderLikes();
}

function addMatch(candidate) {
  addLike(candidate);
  if (!matches.some((match) => match.name === candidate.name)) {
    matches.push({
      ...candidate,
      messages: [
        { from: "them", text: "マッチありがとうございます。よかったら今週どこかで話しませんか？" }
      ]
    });
    saveMatches();
    showToast(`${candidate.name}さんとマッチしました`);
  } else {
    showToast("すでにマッチ済みです");
  }
  renderMatches();
  renderConversations();
}

function nextCandidate() {
  const list = filteredCandidates();
  if (list.length) {
    currentIndex = (currentIndex + 1) % list.length;
  }
  renderCandidate();
}

function openReportDialog(candidate) {
  activeCandidateForReport = candidate;
  reportTarget.textContent = `${candidate.name}さんを通報またはブロックできます。`;
  reportNote.value = "";
  if (typeof reportDialog.showModal === "function") {
    reportDialog.showModal();
  } else {
    showToast("通報画面を開きました");
  }
}

function renderModeration() {
  document.querySelector("#moderationList").innerHTML = moderationChecks
    .map((item) => `<label><input type="checkbox" /> ${item}</label>`)
    .join("");
}

function renderMatches() {
  renderLikes();
}

function renderLikes() {
  matchCount.textContent = `${likes.length + receivedLikes.length}件`;
  matchGrid.innerHTML =
    likes.length === 0
      ? `<p>まだいいねした相手がいません。「探す」から気になる相手を保存しましょう。</p>`
      : likes
          .map(
            (like) => `
              <article class="match-card">
                <strong>${like.name}</strong>
                <span class="liked-badge">あなたがいいね</span>
                <p>${like.school}・${gradeLabel(like.grade)}</p>
                <div class="tag-row">${like.interests.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
              </article>
            `
          )
          .join("");
  receivedLikeGrid.innerHTML = receivedLikes
    .map(
      (like) => `
        <article class="match-card received-like-card">
          <strong>${like.name}</strong>
          <span class="liked-badge received-badge">あなたにいいね</span>
          <p>${like.school}・${gradeLabel(like.grade)}</p>
          <p class="received-message">${like.receivedMessage}</p>
          <div class="tag-row">${like.interests.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function renderConversations() {
  chatCount.textContent = `${matches.length}人`;
  const pendingMatches = matches
    .map((match, index) => ({ ...match, originalIndex: index }))
    .filter((match) => !match.messages.some((message) => message.from === "me"));

  pendingChatList.innerHTML =
    pendingMatches.length === 0
      ? `<p class="message-empty-note">マッチした人にメッセージを送ってみよう</p>`
      : pendingMatches
          .map(
            (match) => `
              <button class="pending-match-card ${activeChat === match.originalIndex ? "active" : ""}" data-chat="${match.originalIndex}">
                ${renderChatAvatar(match, "pending-match-photo")}
                <span class="pending-match-name">${match.name}</span>
              </button>
            `
          )
          .join("");

  conversationList.innerHTML =
    matches.length === 0
      ? `<p class="message-empty-note">マッチした人にメッセージを送ってみよう</p>`
      : matches
          .filter((match) => match.messages.some((message) => message.from === "me"))
          .map(
            (match) => {
              const originalIndex = matches.indexOf(match);
              return `
              <button class="conversation-item ${activeChat === originalIndex ? "active" : ""}" data-chat="${originalIndex}">
                ${renderChatAvatar(match, "conversation-avatar")}
                <span>
                  <strong>${match.name}</strong>
                  <small>${match.school}・${gradeLabel(match.grade)}</small>
                  <span>${match.messages.at(-1)?.text || "メッセージを始めましょう"}</span>
                </span>
              </button>
            `;
            }
          )
          .join("") || `<p class="message-empty-note">マッチした人にメッセージを送ってみよう</p>`;
}

function firstProfilePhoto(person) {
  if (Array.isArray(person.photos) && person.photos[0]) return person.photos[0];
  return person.photo || "";
}

function renderChatAvatar(person, className) {
  const photo = firstProfilePhoto(person);
  return photo
    ? `<span class="${className}"><img src="${photo}" alt="${person.name}のプロフィール写真" /></span>`
    : `<span class="${className}">${person.name.slice(0, 1)}</span>`;
}

function renderChat(index) {
  activeChat = index;
  const match = matches[index];
  chatHeader.textContent = match.name;
  chatLog.innerHTML = match.messages
    .map((message) => {
      const isMine = message.from === "me";
      return `
        <div class="message-row ${isMine ? "mine" : "theirs"}">
          ${isMine ? "" : renderChatAvatar(match, "message-avatar")}
          <div class="bubble ${isMine ? "mine" : ""}">${message.text}</div>
        </div>
      `;
    })
    .join("");
  chatLog.scrollTop = chatLog.scrollHeight;
  renderConversations();
}

function openChat(index) {
  renderChat(index);
  messagesView.classList.add("chat-detail-open");
  appShell.classList.add("chat-detail-mode");
}

function closeChatDetail() {
  messagesView.classList.remove("chat-detail-open");
  appShell.classList.remove("chat-detail-mode");
}

document.querySelector(".nav-tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".nav-tab");
  if (!button) return;
  document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  button.classList.add("active");
  document.querySelector(`#${button.dataset.view}`).classList.add("active-view");
  if (button.dataset.view === "messages") closeChatDetail();
});

function showLoginForm() {
  loginForm.classList.add("active-auth-form");
  signupForm.classList.remove("active-auth-form");
  signupStepIndex = 0;
  renderSignupStep();
}

function showSignupForm() {
  loginForm.classList.remove("active-auth-form");
  signupForm.classList.add("active-auth-form");
  signupStepIndex = 0;
  renderSignupStep();
}

function renderSignupStep() {
  signupSteps.forEach((step, index) => {
    step.classList.toggle("active-signup-step", index === signupStepIndex);
  });
  signupProgress.textContent = `${signupStepIndex + 1} / ${signupSteps.length}`;
}

function goSignupNext() {
  if (!validateSignupStep(signupStepIndex)) return;
  signupStepIndex = Math.min(signupStepIndex + 1, signupSteps.length - 1);
  renderSignupStep();
}

function validateSignupStep(stepIndex) {
  if (stepIndex === 2 && !document.querySelector("#signupName").value.trim()) {
    showToast("ニックネームを入力してください");
    return false;
  }
  if (stepIndex === 3 && !document.querySelector("#signupGender").value) {
    showToast("性別を選択してください");
    return false;
  }
  if (stepIndex === 4) {
    const grade = document.querySelector("#signupGrade").value;
    const age = Number(document.querySelector("#signupAge").value);
    if (!grade || !age) {
      showToast("学年と年齢を入力してください");
      return false;
    }
    if (age < 18) {
      showToast("18歳以上のみ登録できます");
      return false;
    }
  }
  return true;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#loginEmail").value.trim().toLowerCase();
  const password = document.querySelector("#loginPassword").value;
  const account = loadAccounts().find((item) => item.email === email && item.password === password);
  if (!account) {
    showToast("メールアドレスまたはパスワードが違います");
    return;
  }
  setCurrentUser(account);
  showApp(account);
  showToast(`${account.name}さん、ログインしました`);
});

function buildSignupAccount(skipOptional = false) {
  const account = {
    name: document.querySelector("#signupName").value.trim(),
    email: signupVerifiedEmail,
    school: document.querySelector("#signupSchool").value.trim() || "大学名未設定",
    password: document.querySelector("#signupPassword").value,
    gender: document.querySelector("#signupGender").value,
    grade: document.querySelector("#signupGrade").value,
    age: document.querySelector("#signupAge").value,
    faculty: skipOptional ? "" : document.querySelector("#signupFaculty").value.trim(),
    interests: skipOptional ? "" : document.querySelector("#signupInterests").value.trim(),
    lookingFor: skipOptional ? "" : document.querySelector("#signupLookingFor").value,
    type: skipOptional ? "" : document.querySelector("#signupType").value.trim(),
    photo: "",
    bio: "新しく作成したアカウントです。プロフィールを編集して自己紹介を追加しましょう。"
  };
  return account;
}

function createAccount(account) {
  if (!isUniversityEmail(account.email)) {
    showToast("先に大学メール認証を完了してください");
    return;
  }
  if (!account.name || !account.gender || !account.grade || !account.age || account.password.length < 6) {
    showToast("必須項目を入力してください");
    return;
  }
  const accounts = loadAccounts();
  if (accounts.some((item) => item.email === account.email)) {
    showToast("このメールアドレスは登録済みです");
    return;
  }
  accounts.push(account);
  saveAccounts(accounts);
  setCurrentUser(account);
  showApp(account);
  showToast("アカウントを作成しました");
  signupForm.reset();
  signupVerificationCode = "";
  signupVerifiedEmail = "";
  showLoginForm();
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

startSignupButton.addEventListener("click", showSignupForm);
backToLoginButton.addEventListener("click", showLoginForm);

sendVerificationButton.addEventListener("click", () => {
  const email = document.querySelector("#signupEmail").value.trim().toLowerCase();
  const password = document.querySelector("#signupPassword").value;
  if (!isUniversityEmail(email)) {
    showToast("大学メール（.ac.jp または .edu）を入力してください");
    return;
  }
  if (password.length < 6) {
    showToast("パスワードは6文字以上にしてください");
    return;
  }
  signupVerificationCode = String(Math.floor(100000 + Math.random() * 900000));
  signupVerifiedEmail = "";
  verificationHelp.textContent = `デモ認証コード: ${signupVerificationCode}`;
  showToast("デモ用認証コードを発行しました");
  signupStepIndex = 1;
  renderSignupStep();
});

verifyCodeButton.addEventListener("click", () => {
  const code = document.querySelector("#signupCode").value.trim();
  const email = document.querySelector("#signupEmail").value.trim().toLowerCase();
  if (code !== signupVerificationCode) {
    showToast("認証コードが違います");
    return;
  }
  signupVerifiedEmail = email;
  showToast("メール認証が完了しました");
  signupStepIndex = 2;
  renderSignupStep();
});

document.querySelectorAll(".signup-next").forEach((button) => {
  button.addEventListener("click", goSignupNext);
});

document.querySelectorAll(".signup-skip-step").forEach((button) => {
  button.addEventListener("click", () => {
    signupStepIndex = Math.min(signupStepIndex + 1, signupSteps.length - 1);
    renderSignupStep();
  });
});

completeSignupButton.addEventListener("click", () => {
  createAccount(buildSignupAccount(false));
});

signupSkipProfile.addEventListener("click", () => {
  createAccount(buildSignupAccount(true));
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("campusCurrentUser");
  showAuth();
  showToast("ログアウトしました");
});

candidateCard.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (!action) return;
  const list = filteredCandidates();
  const candidate = list[currentIndex];
  if (action === "like") {
    playLikeEffect(candidate);
    addMatch(candidate);
  }
  if (action === "report") {
    openReportDialog(candidate);
    return;
  }
  nextCandidate();
});

privacyButton.addEventListener("click", () => {
  window.open("PRIVACY_POLICY.txt", "_blank");
});

termsButton.addEventListener("click", () => {
  window.open("TERMS_OF_SERVICE.txt", "_blank");
});

deleteAccountButton.addEventListener("click", () => {
  const currentUser = getCurrentUser();
  if (!currentUser) return;
  const accounts = loadAccounts().filter((account) => account.email !== currentUser.email);
  saveAccounts(accounts);
  localStorage.removeItem("campusCurrentUser");
  showAuth();
  showToast("デモ上のアカウントを削除しました");
});

submitReportButton.addEventListener("click", () => {
  if (!activeCandidateForReport) return;
  reports.push({
    target: activeCandidateForReport.name,
    reason: reportReason.value,
    note: reportNote.value.trim(),
    createdAt: new Date().toISOString(),
    status: "open"
  });
  saveReports();
  reportDialog.close();
  showToast("通報を運営レビューに送信しました");
});

blockUserButton.addEventListener("click", () => {
  if (!activeCandidateForReport) return;
  if (!blockedUsers.includes(activeCandidateForReport.name)) {
    blockedUsers.push(activeCandidateForReport.name);
    saveBlockedUsers();
  }
  removeUserFromLocalLists(activeCandidateForReport.name);
  reportDialog.close();
  showToast(`${activeCandidateForReport.name}さんをブロックしました`);
  nextCandidate();
});

let dragState = null;

function resetSwipeCard() {
  candidateCard.classList.remove("dragging", "swipe-right", "swipe-left");
  candidateCard.style.transform = "";
  document.body.classList.remove("preview-like", "preview-bad");
}

function moveCardBySwipe(diff) {
  const rotate = diff / 18;
  const directionClass = diff > 0 ? "swipe-right" : "swipe-left";
  const oppositeClass = diff > 0 ? "swipe-left" : "swipe-right";
  const showPreview = Math.abs(diff) > 48;

  candidateCard.classList.toggle(directionClass, showPreview);
  candidateCard.classList.remove(oppositeClass);
  document.body.classList.toggle("preview-like", showPreview && diff > 0);
  document.body.classList.toggle("preview-bad", showPreview && diff < 0);
  candidateCard.style.transform = `translateX(${diff}px) rotate(${rotate}deg)`;
}

candidateCard.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button")) return;
  dragState = { startX: event.clientX, currentX: event.clientX };
  candidateCard.classList.add("dragging");
  candidateCard.setPointerCapture(event.pointerId);
});

candidateCard.addEventListener("pointermove", (event) => {
  if (!dragState) return;
  dragState.currentX = event.clientX;
  const diff = dragState.currentX - dragState.startX;
  moveCardBySwipe(diff);
});

candidateCard.addEventListener("pointerup", () => {
  if (!dragState) return;
  const diff = dragState.currentX - dragState.startX;
  candidateCard.classList.remove("dragging");
  dragState = null;
  if (Math.abs(diff) < 110) {
    resetSwipeCard();
    return;
  }
  const list = filteredCandidates();
  const candidate = list[currentIndex];
  document.body.classList.remove("preview-like", "preview-bad");
  if (diff > 0) {
    playLikeEffect(candidate);
    addMatch(candidate);
    candidateCard.style.transform = "translateX(120vw) rotate(18deg)";
  } else {
    playBadEffect(candidate);
    candidateCard.style.transform = "translateX(-120vw) rotate(-18deg)";
  }
  window.setTimeout(nextCandidate, 160);
});

candidateCard.addEventListener("pointercancel", () => {
  dragState = null;
  resetSwipeCard();
});

conversationList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-chat]");
  if (button) openChat(Number(button.dataset.chat));
});

pendingChatList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-chat]");
  if (button) openChat(Number(button.dataset.chat));
});

chatBackButton.addEventListener("click", closeChatDetail);

openProfilePreviewButton.addEventListener("click", () => {
  renderPublicProfilePreview();
  if (typeof profilePreviewDialog.showModal === "function") {
    profilePreviewDialog.showModal();
  } else {
    showToast("プロフィールプレビューを更新しました");
  }
});

openProfilePreviewTabButton.addEventListener("click", () => {
  renderPublicProfilePreview();
  if (typeof profilePreviewDialog.showModal === "function") {
    profilePreviewDialog.showModal();
  } else {
    showToast("プロフィールプレビューを更新しました");
  }
});

profileBackButton.addEventListener("click", () => {
  document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.querySelector('.nav-tab[data-view="discover"]').classList.add("active");
  document.querySelector("#discover").classList.add("active-view");
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (activeChat === null || !matches[activeChat]) {
    showToast("先に会話相手を選択してください");
    return;
  }
  const text = messageInput.value.trim();
  if (!text) return;
  matches[activeChat].messages.push({ from: "me", text });
  messageInput.value = "";
  saveMatches();
  renderChat(activeChat);
  renderConversations();
});

document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const currentUser = getCurrentUser();
  if (currentUser) {
    const updatedUser = {
      ...currentUser,
      name: profileName.value.trim(),
      school: profileSchool.value.trim(),
      age: profileAge.value.trim(),
      gender: profileGender.value,
      faculty: profileFaculty.value.trim(),
      interests: profileInterests.value.trim(),
      lookingFor: profileLookingFor.value,
      type: profileType.value.trim(),
      status: profileStatus.value.trim(),
      photo: profilePhotosData[0] || "",
      photos: profilePhotosData,
      bio: profileBio.value.trim()
    };
    const accounts = loadAccounts().map((account) =>
      account.email === updatedUser.email ? updatedUser : account
    );
    saveAccounts(accounts);
    setCurrentUser(updatedUser);
    applyCurrentUser(updatedUser);
  }
  showToast("プロフィールを保存しました");
});

function readImageFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(file);
  });
}

profilePhotoPreview.addEventListener("click", (event) => {
  const slot = event.target.closest("[data-photo-slot]");
  if (!slot) return;
  activePhotoSlot = Number(slot.dataset.photoSlot);
  profilePhoto.value = "";
  profilePhoto.click();
});

profilePhoto.addEventListener("change", () => {
  const files = Array.from(profilePhoto.files || []);
  if (!files.length) return;

  Promise.all(files.slice(0, 4).map(readImageFile)).then((photos) => {
    if (activePhotoSlot !== null) {
      profilePhotosData[activePhotoSlot] = photos[0];
      profilePhotosData = profilePhotosData.slice(0, 4);
      activePhotoSlot = null;
    } else {
      profilePhotosData = photos.slice(0, 4);
    }
    renderProfilePhoto({ photos: profilePhotosData, name: profileName.value });
    showToast("写真を追加しました");
  });
});

[profileName, profileAge, profileSchool, profileInterests, profileStatus, profileBio].forEach((input) => {
  input.addEventListener("input", renderProfilePreview);
});

loadAccounts();
localStorage.removeItem("campusCurrentUser");
showAuth();
renderCandidate();
renderModeration();
renderLikes();
renderConversations();
