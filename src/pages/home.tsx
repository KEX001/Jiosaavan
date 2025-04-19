import { Hono } from 'hono'

export const Home = new Hono()

export const SubtleParticles = ({ number }: { number: number }) => {
  return (
    <>
      {Array.from({ length: number || 15 }, (_, idx) => (
        <span
          key={idx}
          class="particle absolute rounded-full bg-blue-400/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            animation: `float ${Math.random() * 10 + 5}s linear infinite both`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </>
  )
}

Home.get('/', (c) => {
  const title = 'JioSaavn API'
  const description = 'Professional TypeScript wrapper for JioSaavn - Elegant access to music metadata'

  return c.html(
    <html class="scroll-smooth">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    jakarta: ['Plus Jakarta Sans', 'sans-serif'],
                  },
                  colors: {
                    premium: {
                      dark: '#0f0f15',
                      slate: '#1a1a24',
                      light: '#f8f9fa',
                      blue: '#3b82f6',
                      indigo: '#6366f1',
                      purple: '#8b5cf6',
                    },
                  },
                  animation: {
                    'fade-in': 'fadeIn 1s ease-out',
                    'float': 'float 10s linear infinite',
                  },
                  keyframes: {
                    fadeIn: {
                      '0%': { opacity: 0, transform: 'translateY(10px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                    float: {
                      '0%': { transform: 'translateY(0) translateX(0)' },
                      '50%': { transform: 'translateY(-20px) translateX(10px)' },
                      '100%': { transform: 'translateY(0) translateX(0)' },
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
            .font-jakarta {
              font-family: 'Plus Jakarta Sans', sans-serif;
            }
            body {
              background-color: #0f0f15;
              color: #e0e0e0;
            }
            .gradient-text {
              background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .elegant-card {
              background: rgba(15, 15, 21, 0.7);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.08);
              transition: all 0.3s ease;
            }
            .elegant-card:hover {
              transform: translateY(-5px);
              border-color: rgba(139, 92, 246, 0.3);
            }
          `
        }} />
      </head>
      <body class="min-h-screen relative overflow-x-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <SubtleParticles number={20} />
          <div class="absolute inset-0 bg-gradient-to-b from-premium-blue/5 via-premium-dark/80 to-premium-dark"></div>
        </div>

        <main class="relative max-w-6xl mx-auto px-6 py-20 z-10">
          <div class="text-center mb-20 animate-fade-in">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-gradient-to-br from-premium-purple to-premium-indigo rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464" opacity=".5" />
                  <path fill="currentColor" fill-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd" />
                </svg>
              </div>
              <h1 class="text-5xl md:text-6xl font-bold gradient-text font-jakarta mb-4">
                JioSaavn API
              </h1>
              <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
              <div class="flex gap-3 justify-center mt-8">
                <span class="px-4 py-2 bg-premium-indigo/10 text-premium-indigo text-sm font-medium rounded-full border border-premium-indigo/20">
                  TypeScript
                </span>
                <span class="px-4 py-2 bg-premium-purple/10 text-premium-purple text-sm font-medium rounded-full border border-premium-purple/20">
                  Unofficial
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="elegant-card rounded-xl p-8">
              <div class="w-12 h-12 bg-premium-indigo/10 rounded-lg flex items-center justify-center text-premium-indigo mb-6">
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
              <h3 class="text-xl font-bold text-white mb-3 font-jakarta">Core Features</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start gap-3">
                  <svg class="w-4 h-4 mt-0.5 text-premium-indigo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete music metadata</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-4 h-4 mt-0.5 text-premium-indigo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>TypeScript first design</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-4 h-4 mt-0.5 text-premium-indigo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lightning fast responses</span>
                </li>
              </ul>
            </div>

            <a href="https://github.com/sumitkolhe/jiosaavn-api" target="_blank" class="elegant-card rounded-xl p-8 group">
              <div class="w-12 h-12 bg-premium-purple/10 rounded-lg flex items-center justify-center text-premium-purple mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-jakarta">Open Source</h3>
              <p class="text-gray-300 mb-6">Fully open-source project available on GitHub for collaboration.</p>
              <div class="text-premium-purple font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore the code
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>

            <div class="elegant-card rounded-xl p-8">
              <div class="w-12 h-12 bg-gradient-to-br from-premium-indigo to-premium-purple rounded-lg flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-jakarta">Connect</h3>
              <p class="text-gray-300 mb-6">Have questions? Reach out through these channels:</p>
              <div class="flex gap-4">
                <a href="https://github.com/sumitkolhe" target="_blank" class="text-gray-400 hover:text-premium-indigo transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/thesumitkolhe" target="_blank" class="text-gray-400 hover:text-premium-purple transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer class="relative mt-32 pb-8 text-center text-gray-500 text-sm">
          <div class="max-w-6xl mx-auto px-6">
            <p>© {new Date().getFullYear()} JioSaavn API. Not affiliated with JioSaavn.</p>
          </div>
        </footer>
      </body>
    </html>
  )
})
