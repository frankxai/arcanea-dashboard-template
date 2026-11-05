import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between p-6 sm:p-10 bg-[#09090b] text-white selection:bg-[#00bcd4]/30 selection:text-white">
      {/* Background ambient radial glow using CSS */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#09090b]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 800px 600px at 50% 30%, rgba(0, 188, 212, 0.12), transparent 70%), radial-gradient(ellipse 600px 500px at 80% 80%, rgba(167, 139, 250, 0.08), transparent 60%)",
          }}
        />
      </div>

      {/* Header landmark */}
      <header className="max-w-[1400px] w-full mx-auto flex items-center justify-between py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded-sm"
        >
          Arcanea · Dashboard Template
        </Link>
        <a
          href="https://github.com/frankxai/arcanea-dashboard-template"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-wider text-white/50 hover:text-[#00bcd4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded-sm"
        >
          github →
        </a>
      </header>

      {/* Main content landmark */}
      <main className="max-w-[1400px] w-full mx-auto my-auto py-16 flex flex-col items-center text-center">
        <div className="relative isolate p-8 sm:p-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl max-w-xl w-full shadow-2xl">
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.08] to-transparent -z-10"
            aria-hidden="true"
          />
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#00bcd4] mb-3">
            404 · Page Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-white mb-4">
            Cosmic void encountered.
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
            The page you are looking for doesn't exist, may have been moved, or is temporarily unavailable.
          </p>

          {/* Navigation links landmark */}
          <nav aria-label="Navigation options" className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#00bcd4] text-[#09090b] font-medium text-sm transition-all hover:bg-[#00bcd4]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              Back to Dashboard
            </Link>
            <a
              href="https://arcanea.ai/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white font-medium text-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              Browse Templates
            </a>
            <a
              href="https://github.com/frankxai/arcanea-dashboard-template"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white/80 font-medium text-sm transition-colors hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              GitHub Repository
            </a>
          </nav>
        </div>
      </main>

      {/* Footer landmark */}
      <footer className="max-w-[1400px] w-full mx-auto pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-white/30">
        <span>MIT · Fork freely · Built by Arcanea</span>
        <span>Mock data — wire your own API</span>
      </footer>
    </div>
  );
}
