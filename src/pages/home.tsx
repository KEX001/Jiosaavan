import { Hono } from "hono"

export const Home = new Hono()

export const FloatingOrbs = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count || 20 }, (_, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 12 + 4}px`,
            height: `${Math.random() * 12 + 4}px`,
            animation: `orbit ${Math.random() * 15 + 8}s linear infinite`,
            animationDelay: `${Math.random() * 6}s`,
            filter: "blur(2px)",
          }}
        />
      ))}
    </>
  )
}

export const ShootingStars = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const size = Math.random() * 2 + 1
        const duration = Math.random() * 10 + 8
        const delay = Math.random() * 10
        const top = Math.random() * 80

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: "-5px",
              top: `${top}%`,
              opacity: 0,
              animation: `shoot ${duration}s linear ${delay}s infinite`,
              filter: "blur(0.8px)",
            }}
          />
        )
      })}
    </>
  )
}

Home.get("/", (c) => {
  const title = "JioSaavn API"
  const description = "Modern TypeScript wrapper for JioSaavn - Seamless music metadata access"

  return c.html(
    <html className="scroll-smooth">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  fontFamily: {
                    poppins: ['Poppins', 'sans-serif'],
                    space: ['Space Grotesk', 'sans-serif'],
                  },
                  colors: {
                    accent: {
                      50: '#f5f3ff',
                      100: '#ede9fe',
                      200: '#ddd6fe',
                      300: '#c4b5fd',
                      400: '#a78bfa',
                      500: '#8b5cf6',
                      600: '#7c3aed',
                      700: '#6d28d9',
                      800: '#5b21b6',
                      900: '#4c1d95',
                    },
                    neutral: {
                      900: '#111827',
                      800: '#1f2937',
                      700: '#374151',
                      600: '#4b5563',
                      500: '#6b7280',
                    },
                  },
                  animation: {
                    'fade-up': 'fadeUp 0.6s ease-out forwards',
                    'orbit': 'orbit 10s linear infinite',
                    'shoot': 'shoot 12s linear infinite',
                    'pulse-glow': 'pulseGlow 4s infinite',
                    'blink': 'blink 2s infinite',
                  },
                  keyframes: {
                    fadeUp: {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                    orbit: {
                      '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
                      '100%': { transform: 'translateY(-15px) translateX(15px) rotate(360deg)' },
                    },
                    shoot: {
                      '0%': { transform: 'translateY(0) translateX(0)', opacity: 0 },
                      '10%': { opacity: 1 },
                      '70%': { opacity: 1 },
                      '100%': { transform: 'translateY(80vh) translateX(90vw)', opacity: 0 },
                    },
                    pulseGlow: {
                      '0%, 100%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
                      '50%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' },
                    },
                    blink: {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.4 },
                    },
                  },
                },
              },
            }
          `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * {
              font-family: 'Poppins', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .font-space {
              font-family: 'Space Grotesk', sans-serif;
            }
            body {
              background: linear-gradient(180deg, #111827 0%, #1e3a8a 100%);
              color: #f9fafb;
            }
            .gradient-accent {
              background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .card-glow {
              background: rgba(17, 24, 39, 0.7);
              border: 1px solid rgba(139, 92, 246, 0.2);
              transition: all 0.4s ease;
            }
            .card-glow:hover {
              transform: translateY(-8px);
              border-color: rgba(139, 92, 246, 0.4);
              box-shadow: 0 8px 20px rgba(139, 92, 246, 0.15);
            }
            .terminal-glow {
              background: rgba(17, 24, 39, 0.9);
              border: 1px solid rgba(139, 92, 246, 0.3);
            }
          `,
          }}
        />
      </head>
      <body className="min-h-screen relative overflow-x-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingOrbs count={30} />
          <ShootingStars count={15} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80"></div>
        </div>

        <main className="relative max-w-7xl mx-auto px-4 py-16 z-10">
          <div className="text-center mb-24 animate-fade-up">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 animate-pulse-glow">
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M3 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3zm9 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                    opacity=".5"
                  />
                  <path
                    fill="currentColor"
                    d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-accent font-space mb-4">{title}</h1>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">{description}</p>
              <div className="flex gap-4 justify-center mt-6">
                <span className="px-3 py-1 bg-accent-500/10 text-accent-400 text-sm font-medium rounded-full border border-accent-500/20">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-sm font-medium rounded-full border border-pink-500/20">
                  Unofficial
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glow rounded-2xl p-6">
              <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v6"></path>
                  <path d="M16 4l-2 2"></path>
                  <path d="M18 6h4"></path>
                  <path d="M16 10l2 2"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-space">Core Features</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-accent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Rich music metadata
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-accent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  TypeScript-first approach
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-accent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  High-performance API
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-accent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Detailed documentation
                </li>
              </ul>
            </div>

            <a
              href="https://github.com/KEX001/Jiosaavan"
              target="_blank"
              className="card-glow rounded-2xl p-6 group"
              rel="noreferrer"
            >
              <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-space">Open Source</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Explore and contribute to our open-source project on GitHub.
              </p>
              <div className="text-accent-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>

            <div className="card-glow rounded-2xl p-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.8 8.8 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-space">Connect</h3>
              <p className="text-neutral-300 text-sm mb-4">Get in touch via these platforms:</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kex001"
                  target="_blank"
                  className="text-neutral-400 hover:text-accent-400 transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3_h3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/kxunall"
                  target="_blank"
                  className="text-neutral-400 hover:text-pink-400 transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://t.me/ll_KEX_ll"
                  target="_blank"
                  className="text-neutral-400 hover:text-accent-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 terminal-glow rounded-2xl p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 font-space gradient-accent">API Documentation</h2>
            <div className="bg-neutral-800 rounded-lg overflow-hidden border border-accent-500/20">
              <div className="flex items-center px-4 py-2 bg-neutral-900 border-b border-accent-500/20">
                <div className="flex space-x-1.5 mr-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-neutral-400 font-mono">https://jiosaavan-mu.vercel.app/</div>
                <div className="ml-auto flex items-center">
                  <span className="text-xs text-neutral-500 mr-1.5">●</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-blink"></div>
                </div>
              </div>
              <div className="p-4 font-mono text-xs text-neutral-200">
                <div className="flex items-start mb-3">
                  <span className="text-accent-400 mr-1.5">➜</span>
                  <span className="text-pink-400">URL</span>
                  <span className="text-blue-300 ml-1.5">https://jiosaavan-mu.vercel.app/</span>
                </div>
                <div className="mb-4">
                  <div className="text-accent-400 mb-1.5">// Search Operations</div>
                  <div className="ml-3">
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/search</span></div>
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/search/songs</span></div>
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/search/albums</span></div>
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/search/artists</span></div>
                    <div className="flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/search/playlists</span></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-accent-400 mb-1.5">// Song Operations</div>
                  <div className="ml-3">
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/songs</span></div>
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/songs/:id</span></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-accent-400 mb-1.5">// Artist Operations</div>
                  <div className="ml-3">
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/artists</span></div>
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/artists/:id</span></div>
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/artists/:id/songs</span></div>
                    <div className="flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/artists/:id/albums</span></div>
                  </div>
                </div>
                <div>
                  <div className="text-accent-400 mb-1.5">// Collection Operations</div>
                  <div className="ml-3">
                    <div className="mb-1 flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/albums</span></div>
                    <div className="flex items-center"><span className="text-yellow-300">GET</span><span className="text-blue-300 ml-1.5">/api/playlists</span></div>
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-accent-400 mr-1.5">➜</span>
                  <span className="text-neutral-300">_</span>
                  <span className="ml-0.5 h-4 w-1.5 bg-accent-400 animate-blink"></span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="relative mt-24 pb-6 text-center text-neutral-500 text-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="border-t border-neutral-700/50 pt-6">
              <p>© {new Date().getFullYear()} JioSaavn. Not affiliated with JioSaavn.</p>
              <p className="mt-1 text-xs">Built by Kunal ✨</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
})
