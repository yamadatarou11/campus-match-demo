import SwiftUI
import WebKit

struct ContentView: View {
    var body: some View {
        CampusMatchWebView()
            .ignoresSafeArea()
    }
}

struct CampusMatchWebView: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true
        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.allowsBackForwardNavigationGestures = false
        loadLocalApp(in: webView)
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
    }

    private func loadLocalApp(in webView: WKWebView) {
        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "WebApp") else {
            webView.loadHTMLString("<h1>Campus Match files are missing.</h1>", baseURL: nil)
            return
        }
        webView.loadFileURL(indexURL, allowingReadAccessTo: indexURL.deletingLastPathComponent())
    }
}
