function App() {
  return (
    <div className="min-h-screen bg-[#181225] text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 sm:py-24 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4E2A9A]/50 border border-[#7553FF]/30 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Powered by Sentry.New
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight">
            React + Vite{" "}
            <span className="bg-gradient-to-r from-[#7553FF] via-[#A737B4] to-[#7553FF] bg-clip-text text-transparent">
              Template
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9E86FF] max-w-2xl">
            A production-ready React template with Sentry monitoring, Vite, TypeScript, and Tailwind CSS v4.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://sentry.new"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#7553FF] bg-[#7553FF] text-white px-6 py-3 font-medium hover:bg-[#7553FF]/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://docs.sentry.io/platforms/javascript/guides/react/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4E2A9A] px-6 py-3 font-medium hover:bg-[#4E2A9A]/30 hover:border-[#7553FF] transition-colors"
            >
              View Docs
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto">
          <div className="bg-[#181225]/80 border-2 border-[#4E2A9A]/50 rounded-xl p-6 hover:border-[#7553FF] transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-[#7553FF] mb-2">Lightning Fast</h3>
            <p className="text-[#9E86FF]">
              Built with Vite for instant HMR and optimized production builds
            </p>
          </div>

          <div className="bg-[#181225]/80 border-2 border-[#4E2A9A]/50 rounded-xl p-6 hover:border-[#7553FF] transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold text-[#7553FF] mb-2">Production Ready</h3>
            <p className="text-[#9E86FF]">
              Includes TypeScript, Tailwind CSS v4, and Sentry monitoring ready to go
            </p>
          </div>

          <div className="bg-[#181225]/80 border-2 border-[#4E2A9A]/50 rounded-xl p-6 hover:border-[#7553FF] transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold text-[#7553FF] mb-2">Modern React</h3>
            <p className="text-[#9E86FF]">
              React 19 with hooks, TypeScript, and modern best practices
            </p>
          </div>
        </div>

        {/* Sentry Integration Code Snippet */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="border-2 border-[#7553FF]/30 rounded-lg bg-[#181225]/50 backdrop-blur p-6">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-[#7553FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#7553FF]">Sentry Integration</h2>
            </div>
            <p className="text-base text-[#9E86FF] mb-8">
              Add error tracking and performance monitoring in seconds
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-[#9E86FF] mb-3 font-medium">Install Sentry SDK:</p>
                <pre className="bg-[#36166B]/40 border border-[#7553FF]/30 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-[#7553FF]">npm install @sentry/react</code>
                </pre>
              </div>

              <div>
                <p className="text-sm text-[#9E86FF] mb-3 font-medium">Initialize in src/main.tsx:</p>
                <pre className="bg-[#36166B]/40 border border-[#7553FF]/30 p-5 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-white leading-relaxed whitespace-pre">{`import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
});`}</code>
                </pre>
              </div>

              <div className="pt-2">
                <a
                  href="https://docs.sentry.io/platforms/javascript/guides/react/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#7553FF] hover:text-[#9E86FF] font-medium inline-flex items-center gap-1 transition-colors"
                >
                  View full documentation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#4E2A9A]/50 mt-24">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-[#9E86FF]">
          <p>
            Built for{" "}
            <a
              href="https://sentry.new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7553FF] hover:underline font-medium"
            >
              Sentry.New
            </a>
            {" "}app builder
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
