import { Hono } from "hono"

export const Home = new Hono()

export const FloatingOrbs = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count || 25 }, (_, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 15 + 5}px`,
            height: `${Math.random() * 15 + 5}px`,
            animation: `float ${Math.random() * 12 + 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            filter: "blur(3px)",
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)",
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
        const size = Math.random() * 2.5 + 1
        const duration = Math.random() * 8 + 5
        const delay = Math.random() * 8
        const top = Math.random() * 90

        return (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-white to-cyan-300"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: "-10px",
              top: `${top}%`,
              opacity: 0,
              animation: `shoot ${duration}s linear ${delay}s infinite`,
              filter: "blur(1px)",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
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
                    inter: ['Inter', 'sans-serif'],
                    space: ['Space Mono', 'monospace'],
                  },
                  colors: {
                    dark: {
                      900: '#0a0a0f',
                      800: '#14141f',
                      700: '#1e1e2d',
                      600: '#2a2a3d',
                    },
                    accent: {
                      50: '#e5f3ff',
                      100: '#b3daff',
                      200: '#80c0ff',
                      300: '#4da6ff',
                      400: '#1a8cff',
                      500: '#0077ff',
                      600: '#005fcc',
                      700: '#004799',
                      800: '#003066',
                      900: '#001933',
                    },
                    neon: {
                      cyan: '#00f6ff',
                      purple: '#d946ef',
                    },
                  },
                  animation: {
                    'fade-in': 'fadeIn 1s ease-out forwards',
                    'float': 'float 10s ease-in-out infinite',
                    'shoot': 'shoot 8s linear infinite',
                    'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                    'blink-cursor': 'blinkCursor 1s step-end infinite',
                    'scale-in': 'scaleIn 0.5s ease-out forwards',
                  },
                  keyframes: {
                    fadeIn: {
                      '0%': { opacity: 0, transform: 'translateY(30px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                    float: {
                      '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                      '50%': { transform: 'translateY(-20px) translateX(20px)' },
                    },
                    shoot: {
                      '0%': { transform: 'translateY(0) translateX(0)', opacity: 0 },
                      '10%': { opacity: 1 },
                      '60%': { opacity: 1 },
                      '100%': { transform: 'translateY(100vh) translateX(100vw)', opacity: 0 },
                    },
                    glowPulse: {
                      '0%, 100%': { boxShadow: '0 0 10px rgba(0, 246, 255, 0.3)' },
                      '50%': { boxShadow: '0 0 20px rgba(0, 246, 255, 0.5)' },
                    },
                    blinkCursor: {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0 },
                    },
                    scaleIn: {
                      '0%': { transform: 'scale(0.95)', opacity: 0 },
                      '100%': { transform: 'scale(1)', opacity: 1 },
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
              font-family: 'Inter', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .font-space {
              font-family: 'Space Mono', monospace;
            }
            body {
              background: #0a0a0f;
              color: #e5e7eb;
            }
            .gradient-neon {
              background: linear-gradient(90deg, #00f6ff, #d946ef);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .card-neon {
              background: rgba(20, 20, 31, 0.85);
              border: 1px solid rgba(0, 246, 255, 0.2);
              transition: all 0.3s ease;
            }
            .card-neon:hover {
              transform: translateY(-5px);
              border-color: rgba(0, 246, 255, 0.4);
              box-shadow: 0 6px 15px rgba(0, 246, 255, 0.2);
            }
            .terminal-neon {
              background: rgba(10, 10, 15, 0.95);
              border: 1px solid rgba(0, 246, 255, 0.3);
              box-shadow: 0 0 15px rgba(0, 246, 255, 0.1);
            }
          `,
          }}
        />
      </head>
      <body className="min-h-screen relative overflow-x-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingOrbs count={40} />
          <ShootingStars count={20} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/10 to-dark-900/80"></div>
        </div>

        <main className="relative max-w-6xl mx-auto px-6 py-20 z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center mb-6 animate-glow-pulse">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
              <h1 className="text-5xl md:text-6xl font-bold gradient-neon font-space mb-4">{title}</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">{description}</p>
              <div className="flex gap-4 justify-center mt-8">
                <span className="px-4 py-1.5 bg-neon-cyan/10 text-neon-cyan text-sm font-medium rounded-full border border-neon-cyan/30 animate-scale-in">
                  TypeScript
                </span>
                <span className="px-4 py-1.5 bg-neon-purple/10 text-neon-purple text-sm font-medium rounded-full border border-neon-purple/30 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  Unofficial
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-neon rounded-xl p-6 animate-scale-in">
              <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center text-neon-cyan mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              <h3 className="text-xl font-bold text-white mb-3 font-space">Core Features</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 text-neon-cyan"
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
                    className="w-5 h-5 mt-0.5 text-neon-cyan"
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
                    className="w-5 h-5 mt-0.5 text-neon-cyan"
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
                    className="w-5 h-5 mt-0.5 text-neon-cyan"
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
              className="card-neon rounded-xl p-6 group animate-scale-in"
              rel="noreferrer"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-12 h-12 bg-neon-purple/10 rounded-lg flex items-center justify-center text-neon-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              <h3 className="text-xl font-bold text-white mb-3 font-space">Open Source</h3>
              <p className="text-gray-300 text-sm mb-4">
                Explore and contribute to our open-source project on GitHub.
              </p>
              <div className="text-neon-cyan font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                View on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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

            <div className="card-neon rounded-xl p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              <h3 className="text-xl font-bold text-white mb-3 font-space">Connect</h3>
              <p className="text-gray-300 text-sm mb-4">Get in touch via these platforms:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kex001"
                  target="_blank"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                  rel="noreferrer"
                >
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
                </a>
                <a
                  href="https://twitter.com/kxunall"
                  target="_blank"
                  className="text-gray-400 hover:text-neon-purple transition-colors"
                  rel="noreferrer"
                >
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://t.me/ll_KEX_ll"
                  target="_blank"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 terminal-neon rounded-xl p-8 max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-center mb-6 font-space gradient-neon">API Documentation</h2>
            <div className="bg-dark-800 rounded-lg overflow-hidden border border-neon-cyan/20">
              <div className="flex items-center px-4 py-3 bg-dark-900 border-b border-neon-cyan/20">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400 font-space">https://jiosaavan-mu.vercel.app/</div>
                <div className="ml-auto flex items-center">
                  <span className="text-sm text-gray-500 mr-2">●</span>
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-blink-cursor"></div>
                </div>
              </div>
              <div className="p-6 font-space text-sm text-gray-200">
                <div className="flex items-start mb-4">
                  <span className="text-neon-cyan mr-2">➜</span>
                  <span className="text-neon-purple">URL</span>
                  <span className="text-accent-300 ml-2">https://jiosaavan-mu.vercel.app/</span>
                </div>
                <div className="mb-6">
                  <div className="text-neon-cyan mb-2">// Search Operations</div>
                  <div className="ml-4">
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/search</span></div>
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/search/songs</span></div>
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/search/albums</span></div>
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/search/artists</span></div>
                    <div className="flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/search/playlists</span></div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-neon-cyan mb-2">// Song Operations</div>
                  <div className="ml-4">
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/songs</span></div>
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/songs/:id</span></div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-neon-cyan mb-2">// Artist Operations</div>
                  <div className="ml-4">
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/artists</span></div>
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/artists/:id</span></div>
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/artists/:id/songs</span></div>
                    <div className="flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/artists/:id/albums</span></div>
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-2">// Collection Operations</div>
                  <div className="ml-4">
                    <div className="mb-2 flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/albums</span></div>
                    <div className="flex items-center"><span className="text-yellow-400">GET</span><span className="text-accent-300 ml-2">/api/playlists</span></div>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-neon-cyan mr-2">➜</span>
                  <span className="text-gray-300">_</span>
                  <span className="ml-0.5 h-4 w-1 bg-neon-cyan animate-blink-cursor"></span>
                </div>
              </div>
            </div>
          </div>

          <footer className="relative mt-20 pb-8 text-center text-gray-500 text-sm">
            <div className="max-w-6xl mx-auto px-6">
              <div className="border-t border-dark-700/50 pt-6">
                <p>© {new Date().getFullYear()} JioSaavn. Not affiliated with JioSaavn.</p>
                <p className="mt-2 text-xs">Built by Kunal with <span className="text-neon-cyan">✨</span></p>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
})
