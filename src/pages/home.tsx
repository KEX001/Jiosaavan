import { Hono } from 'hono'

export const Home = new Hono()

export const Meteors = ({ number }: { number: number }) => {
  return (
    <>
      {Array.from({ length: number || 20 }, (_, idx) => (
        <span
          key={idx}
          class="meteor absolute h-[1px] w-[1px] rounded-full bg-gradient-to-r from-blue-400/80 to-purple-500/80 shadow-[0_0_6px_2px_#6366f140] rotate-[215deg]"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animation: `meteor ${Math.random() * 3 + 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </>
  )
}

Home.get('/', (c) => {
  const title = 'JioSaavn API'
  const description = 'Premium TypeScript wrapper for JioSaavn - Access millions of songs, albums, and playlists with elegant precision'

  return c.html(
    <html class="scroll-smooth">
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
        <meta property="og:image" content="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/preview.jpg" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/preview.jpg" />
        <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/sumitkolhe/jiosaavn-api/main/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    manrope: ['Manrope', 'sans-serif'],
                  },
                  colors: {
                    premium: {
                      dark: '#0a0a12',
                      slate: '#1a1a24',
                      light: '#f8f9fa',
                      purple: '#8b5cf6',
                      indigo: '#6366f1',
                    },
                  },
                  animation: {
                    'fade-in': 'fadeIn 1s ease-in-out',
                    'float': 'float 6s ease-in-out infinite',
                  },
                  keyframes: {
                    fadeIn: {
                      '0%': { opacity: 0 },
                      '100%': { opacity: 1 },
                    },
                    float: {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                    meteor: {
                      '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
                      '70%': { opacity: 1 },
                      '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: 0 },
                    }
                  }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              font-family: 'Inter', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .font-manrope {
              font-family: 'Manrope', sans-serif;
            }
            .gradient-text {
              background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .glass-card {
              background: rgba(10, 10, 18, 0.7);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
            }
            .hover-glow:hover {
              box-shadow: 0 0 25px -5px rgba(139, 92, 246, 0.3);
            }
          `
        }} />
      </head>
      <body class="bg-premium-dark text-premium-light min-h-screen">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={12} />
          <div class="absolute inset-0 bg-gradient-to-b from-premium-dark/0 via-premium-dark/70 to-premium-dark"></div>
        </div>

        <main class="relative max-w-6xl mx-auto px-6 py-20 z-10">
          <div class="text-center mb-20 animate-fade-in">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-gradient-to-br from-premium-purple to-premium-indigo rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-float">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464" opacity=".5" />
                  <path fill="currentColor" fill-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd" />
                </svg>
              </div>
              <h1 class="text-5xl md:text-6xl font-bold gradient-text font-manrope mb-4">
                JioSaavn API
              </h1>
              <p class="text-xl text-premium-light/80 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
              <div class="flex gap-3 justify-center mt-8">
                <span class="px-4 py-2 bg-premium-purple/10 text-premium-purple text-sm font-medium rounded-full border border-premium-purple/20">
                  TypeScript Ready
                </span>
                <span class="px-4 py-2 bg-premium-indigo/10 text-premium-indigo text-sm font-medium rounded-full border border-premium-indigo/20">
                  Unofficial API
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card rounded-xl p-8 transition-all duration-300 hover-glow hover:border-premium-purple/30">
              <div class="w-12 h-12 bg-premium-purple/10 rounded-lg flex items-center justify-center text-premium-purple mb-6">
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
              <h3 class="text-xl font-bold text-white mb-3 font-manrope">Premium Features</h3>
              <ul class="space-y-3 text-premium-light/80">
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 mt-1 text-premium-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete music metadata</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 mt-1 text-premium-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>TypeScript first design</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 mt-1 text-premium-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lightning fast responses</span>
                </li>
              </ul>
            </div>

            <a href="https://github.com/sumitkolhe/jiosaavn-api" target="_blank" class="glass-card rounded-xl p-8 transition-all duration-300 hover-glow hover:border-premium-indigo/30 group">
              <div class="w-12 h-12 bg-premium-indigo/10 rounded-lg flex items-center justify-center text-premium-indigo mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-manrope">Open Source</h3>
              <p class="text-premium-light/80 mb-6">Fully open-source project available on GitHub for collaboration and contributions.</p>
              <div class="text-premium-indigo font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore the code
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>

            <div class="glass-card rounded-xl p-8">
              <div class="w-12 h-12 bg-gradient-to-br from-premium-purple to-premium-indigo rounded-lg flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-manrope">Connect</h3>
              <p class="text-premium-light/80 mb-6">Have questions or want to contribute? Reach out through these channels:</p>
              <div class="flex gap-4">
                <a href="https://github.com/sumitkolhe" target="_blank" class="text-premium-light/60 hover:text-premium-purple transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/thesumitkolhe" target="_blank" class="text-premium-light/60 hover:text-premium-indigo transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer class="relative mt-32 pb-8 text-center text-premium-light/50 text-sm">
          <div class="max-w-6xl mx-auto px-6">
            <p>© {new Date().getFullYear()} JioSaavn API. Not affiliated with JioSaavn.</p>
          </div>
        </footer>
      </body>
    </html>
  )
})
