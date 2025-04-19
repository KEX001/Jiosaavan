import { Hono } from 'hono'

export const Home = new Hono()

export const Meteors = ({ number }: { number: number }) => {
  return (
    <>
      {Array.from({ length: number || 20 }, (_, idx) => (
        <span
          key={idx}
          class="meteor animate-[meteorAnimation_3s_linear_infinite] absolute h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`
          }}
        />
      ))}
    </>
  )
}

Home.get('/', (c) => {
  const title = 'JioSaavn API'
  const description =
    'The ultimate TypeScript wrapper for JioSaavn, providing lightning-fast access to millions of songs, albums, and playlists.'

  return c.html(
    <html>
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saavn.dev/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://saavn.dev/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/preview.jpg"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/preview.jpg"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    space: ['Space Grotesk', 'sans-serif'],
                  },
                  colors: {
                    neon: {
                      pink: '#ff2bff',
                      blue: '#00f0ff',
                      purple: '#8a2be2',
                    },
                    dark: {
                      900: '#0a0a0a',
                      800: '#1a1a1a',
                      700: '#2a2a2a',
                      600: '#3a3a3a',
                    }
                  },
                  animation: {
                    'neon-pulse': 'neonPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  },
                  keyframes: {
                    neonPulse: {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.6 },
                    }
                  }
                }
              }
            }
          `
        }} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { 
              font-family: 'Inter', sans-serif; 
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            } 
            .font-space {
              font-family: 'Space Grotesk', sans-serif;
            }
            @keyframes meteorAnimation {
              0% { transform: rotate(215deg) translateX(0); opacity: 1; }
              70% { opacity: 1; }
              100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .meteor::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 50px;
              height: 1px;
              background: linear-gradient(90deg, rgba(0, 240, 255, 0.8), transparent);
            }
            .gradient-text {
              background: linear-gradient(90deg, #ff2bff 0%, #00f0ff 50%, #8a2be2 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .neon-border {
              position: relative;
            }
            .neon-border::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 0.75rem;
              padding: 2px;
              background: linear-gradient(45deg, #ff2bff, #00f0ff, #8a2be2);
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
            }
            .glow-text {
              text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
            }
            `
          }}
        />
      </head>
      <body class="bg-dark-900 min-h-screen text-gray-200">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={15} />
          <div class="absolute inset-0 bg-gradient-to-b from-dark-900/0 via-dark-900/80 to-dark-900"></div>
        </div>

        <main class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 z-10">
          <div class="text-center mb-16">
            <div class="flex items-center justify-center space-x-4 mb-6">
              <div class="animate-float">
                <svg class="w-12 h-12 sm:w-16 sm:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#00f0ff"
                    d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464"
                    opacity=".5"
                  />
                  <path
                    fill="#00f0ff"
                    fill-rule="evenodd"
                    d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text font-space">
                JioSaavn API
              </h1>
            </div>
            
            <div class="inline-flex items-center space-x-2 mb-8">
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30 glow-text">
                UNOFFICIAL API
              </span>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30 glow-text">
                TYPESCRIPT
              </span>
            </div>

            <p class="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="neon-border bg-dark-800 rounded-xl p-6 relative">
              <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neon-pink/10 text-neon-pink mb-4 glow-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M12 2v4"></path>
                  <path d="m16 4-2 2"></path>
                  <path d="M18 8h4"></path>
                  <path d="m16 12 2 2"></path>
                  <path d="M12 14v4"></path>
                  <path d="m8 12-2 2"></path>
                  <path d="M6 8H2"></path>
                  <path d="m8 4 2 2"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-space">Key Features</h3>
              <ul class="text-gray-400 text-sm space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 mt-0.5 mr-2 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lightning-fast music metadata</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 mt-0.5 mr-2 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full TypeScript support</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 mt-0.5 mr-2 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Song, album & playlist data</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 mt-0.5 mr-2 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Search across entire catalog</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://github.com/sumitkolhe/jiosaavn-api" 
              target="_blank"
              class="neon-border bg-dark-800 rounded-xl p-6 relative group transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue mb-4 glow-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-space">Open Source</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Fully open-source project. Contribute, fork, or star on GitHub.
              </p>
              <div class="mt-4 flex items-center text-neon-blue text-sm font-medium group-hover:text-neon-pink transition-colors">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>

            <a 
              href="https://github.com/sumitkolhe/jiosaavn-api/issues" 
              target="_blank"
              class="neon-border bg-dark-800 rounded-xl p-6 relative group transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neon-purple/10 text-neon-purple mb-4 glow-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-space">Contribute</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Report issues, suggest features, or submit pull requests to improve the API.
              </p>
              <div class="mt-4 flex items-center text-neon-purple text-sm font-medium group-hover:text-neon-blue transition-colors">
                Get involved
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>

            <div class="neon-border bg-dark-800 rounded-xl p-6 relative">
              <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-blue mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2 font-space">Contact</h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                Have questions? Reach out to the maintainer through these channels:
              </p>
              <div class="flex space-x-3">
                <a 
                  href="https://github.com/sumitkolhe" 
                  target="_blank"
                  class="text-gray-400 hover:text-neon-blue transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/thesumitkolhe" 
                  target="_blank"
                  class="text-gray-400 hover:text-neon-pink transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://t.me/sumitkolhe" 
                  target="_blank"
                  class="text-gray-400 hover:text-neon-purple transition-colors"
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.16L3.316 8.432c-.907.345-1.125 1.3-.463 1.945l3.47 3.093 7.82-5.176c.37-.244.714-.112.463.246l-5.178 7.82-.122.124-.008.008c-.146.17-.207.31-.207.43 0 .096.034.205.207.43l.93.93c.225.173.334.207.43.207.12 0 .26-.06.43-.207l.124-.122 7.82-5.178c.358-.25.49.093.246.463l-5.176 7.82 3.093 3.47c.645.662 1.6.444 1.945-.463l5.84-16.86a2.243 2.243 0 0 0-.16-1.022z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer class="relative mt-24 pb-8 text-center text-gray-500 text-sm">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} JioSaavn API. An unofficial project not affiliated with JioSaavn.</p>
          </div>
        </footer>
      </body>
    </html>
  )
})
