Campus Match iOSビルド手順
==========================

概要
----
このフォルダは、現在のWebデモをiOSアプリとして包むためのSwiftUI/WKWebViewひな形です。
App Store提出の最終形では、単なるWebViewではなく、Sign in with Apple、通知、通報、アカウント削除、バックエンド連携をネイティブ/サーバー側で実装してください。

Xcodeでの作成手順
----------------
1. Xcodeで「App」を新規作成します。
2. Product Nameを CampusMatch にします。
3. Interfaceは SwiftUI、Languageは Swift にします。
4. 作成された CampusMatchApp.swift と ContentView.swift を、このフォルダのファイルで置き換えます。
5. Info.plist の内容を必要に応じて反映します。
6. プロジェクト内に WebApp というフォルダ参照を追加します。
7. WebApp フォルダに以下をコピーします。
   - index.html
   - styles.css
   - app.js
   - manifest.webmanifest
   - app-icon.png
   - app-icon.svg
   - PRIVACY_POLICY.txt
   - TERMS_OF_SERVICE.txt
8. Bundle Identifierを自分のDeveloper Teamに合わせて変更します。
9. Signing & CapabilitiesでTeamを設定します。
10. Sign in with Apple Capabilityを追加します。
11. 実機またはシミュレーターで起動確認します。
12. ArchiveしてApp Store Connectへアップロードします。

注意
----
- Apple審査では、WebViewだけの薄いアプリは弱い可能性があります。
- 本番版では、localStorageではなくサーバーDBへ保存してください。
- パスワード平文保存は禁止し、認証基盤に置き換えてください。
- Privacy Policy URLとSupport URLはWebで公開してください。
- App Store ConnectのApp Privacy申告が必要です。
