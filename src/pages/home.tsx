"use client"
import Link from "next/link"

// Meteor animation component
const Meteors = ({ number = 20 }) => {
  return (
    <>
      {Array.from({ length: number }, (_, idx) => (
        <span
          key={idx}
          className="meteor absolute h-1 w-1 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
          }}
        />
      ))}
    </>
  )
}

// Feature card component
const FeatureCard = ({ title, description, badge, badgeColor, href }) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-black/60 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#ff7d78] to-purple-600 opacity-20 blur-2xl filter group-hover:opacity-30" />

      <div
        className="mb-3 inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
        style={{ backgroundColor: `${badgeColor}20`, color: badgeColor }}
      >
        {badge}
      </div>

      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#ff7d78]">{title}</h3>
      <p className="text-sm text-zinc-400 group-hover:text-zinc-300">{description}</p>

      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#ff7d78] to-purple-600 opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
    </Link>
  )
}

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,#ff7d7830,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#9333ea20,transparent_50%)] pointer-events-none" />

      {/* Meteor effect */}
      <div className="relative overflow-hidden">
        <Meteors number={15} />
      </div>

      <main className="relative z-10 mx-auto max-w-screen-lg px-4 py-12 md:py-20">
        {/* Logo and title section */}
        <div className="mb-16 flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7d78] to-purple-600 p-3 shadow-lg shadow-[#ff7d78]/20">
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464"
                  opacity=".5"
                />
                <path
                  fillRule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0zm11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75zm-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-[#ff7d78] to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                JioSaavn API
              </h1>
              <div className="relative mt-1 inline-flex items-center">
                <span className="animate-pulse absolute inset-0 rounded-full bg-purple-500/20 blur-sm"></span>
                <span className="relative rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-purple-300">
                  Unofficial
                </span>
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-lg text-zinc-400">
            An unofficial TypeScript wrapper for jiosaavn.com providing programmatic access to a vast library of songs,
            albums, artists, playlists, and more.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#ff7d78] to-purple-600 p-[1px] font-medium text-white transition-all duration-300 hover:shadow-md hover:shadow-purple-500/25"
            >
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-black px-6 py-2.5 transition-all duration-300 group-hover:bg-transparent">
                <span className="mr-1">Explore the Docs</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="https://github.com/sumitkolhe/jiosaavn-api"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-black/40 px-6 py-2.5 text-white backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 hover:bg-black/60"
            >
              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FeatureCard
            title="Explore the Docs"
            description="Check out the comprehensive documentation to learn how to use the JioSaavn API effectively."
            badge="Get Started"
            badgeColor="#f43f5e"
            href="/docs"
          />

          <FeatureCard
            title="Open Source"
            description="JioSaavn API is completely open-source. Check out the source code on GitHub and contribute to its development."
            badge="Open Source"
            badgeColor="#10b981"
            href="https://github.com/sumitkolhe/jiosaavn-api"
          />

          <FeatureCard
            title="Get Involved"
            description="Encounter a bug or have a feature suggestion? Report it on GitHub or contribute by submitting a pull request."
            badge="Contribute"
            badgeColor="#8b5cf6"
            href="https://github.com/sumitkolhe/jiosaavn-api/issues"
          />

          <FeatureCard
            title="Contact the Developer"
            description="Have a question or need help? Reach out on GitHub, Twitter, or Telegram."
            badge="Contact"
            badgeColor="#3b82f6"
            href="https://github.com/sumitkolhe"
          />
        </div>
      </main>

      {/* CSS for meteor animation */}
      <style jsx global>{`
        @keyframes meteorAnimation {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
        }
        .meteor {
          animation: meteorAnimation 3s linear infinite;
        }
        .meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, #64748b, transparent);
        }
      `}</style>
    </div>
  )
}
