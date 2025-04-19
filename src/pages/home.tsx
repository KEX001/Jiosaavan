import { Hono } from 'hono'

export const Home = new Hono()

export const Stars = ({ count = 100 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          class="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 2}s`,
          }}
        />
      ))}
    </>
  )
}

export const Meteors = ({ number = 20 }: { number?: number }) => {
  return (
    <>
      {Array.from({ length: number }, (_, idx) => (
        <span
          key={idx}
          class="meteor animate-[meteorAnimation_3s_linear_infinite] absolute h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
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

Home.get('/', (c) => {
  const title = 'JioSaavn API'
  const description =
    'JioSaavn API is an unofficial wrapper written in TypeScript for jiosaavn.com providing programmatic access to a vast library of songs, albums, artists, playlists, and more.'

  return c.html(
    <html>
      <head>
        <title>JioSaavn API</title>
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { font-family: 'Inter', sans-serif; }
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 1; }
            }
            @keyframes borderAnimation {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
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
              background: linear-gradient(90deg, #64748b, transparent);
            }
            .card-hover-effect {
              transition: all 0.3s ease;
            }
            .card-hover-effect:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
            }
            .glow-text {
              text-shadow: 0 0 10px rgba(255, 125, 120, 0.7);
            }
            .bg-space-gradient {
              background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            }
            `
          }}
        />
      </head>
      <body class="bg-space-gradient min-h-screen overflow-x-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <Stars count={150} />
          <Meteors number={25} />
        </div>

        <main class="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          <div class="text-center mb-12 animate-[float_6s_ease-in-out_infinite]">
            <div class="flex items-center justify-center space-x-4">
              <svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#ff7d78"
                  d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464"
                  opacity=".5"
                />
                <path
                  fill="#ff7d78"
                  fill-rule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7d78] to-purple-600 glow-text">
                JioSaavn API
              </h1>
            </div>
            <div class="mt-4">
              <span class="inline-block animate-[borderAnimation_3s_linear_infinite] rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
                <span class="block rounded-full px-4 py-1 text-sm text-white uppercase tracking-wider bg-gray-900/90 backdrop-blur-sm">
                  Unofficial API
                </span>
              </span>
            </div>
            <p class="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/docs"
              class="card-hover-effect group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
              <div class="relative z-10">
                <div class="flex items-center space-x-2 mb-4">
                  <span class="text-xs uppercase bg-opacity-15 rounded-full px-3 py-1 font-bold tracking-wide bg-red-500/20 text-red-400">
                    Get Started
                  </span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Explore the Docs</h3>
                <p class="text-gray-400">
                  Check out the documentation to learn how to use the JioSaavn API.
                </p>
                <div class="mt-4 flex items-center text-purple-400 text-sm font-medium">
                  View Documentation
                  <svg class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/sumitkolhe/jiosaavn-api"
              target="_blank"
              class="card-hover-effect group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-all duration-300"
            >
              <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div class="relative z-10">
                <div class="flex items-center space-x-2 mb-4">
                  <span class="text-xs uppercase bg-opacity-15 rounded-full px-3 py-1 font-bold tracking-wide bg-green-500/20 text-green-400">
                    Open Source
                  </span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">GitHub Repository</h3>
                <p class="text-gray-400">Saavn API is open-source. Check out the source code on GitHub.</p>
                <div class="mt-4 flex items-center text-green-400 text-sm font-medium">
                  View on GitHub
                  <svg class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/sumitkolhe/jiosaavn-api/issues"
              target="_blank"
              class="card-hover-effect group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
              <div class="relative z-10">
                <div class="flex items-center space-x-2 mb-4">
                  <span class="text-xs uppercase bg-opacity-15 rounded-full px-3 py-1 font-bold tracking-wide bg-blue-500/20 text-blue-400">
                    Contribute
                  </span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Get Involved</h3>
                <p class="text-gray-400">
                  Report bugs or suggest features on GitHub or contribute by submitting a pull request.
                </p>
                <div class="mt-4 flex items-center text-blue-400 text-sm font-medium">
                  Contribute Now
                  <svg class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </a>

            <div class="card-hover-effect group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
              <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-pink-500/10 to-transparent"></div>
              <div class="relative z-10">
                <div class="flex items-center space-x-2 mb-4">
                  <span class="text-xs uppercase bg-opacity-15 rounded-full px-3 py-1 font-bold tracking-wide bg-pink-500/20 text-pink-400">
                    Contact
                  </span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Sumit Kolhe</h3>
                <p class="text-gray-400">
                  Have questions? Reach out on:
                </p>
                <div class="mt-3 space-y-2">
                  <a
                    href="https://github.com/sumitkolhe"
                    target="_blank"
                    class="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com/thesumitkolhe"
                    target="_blank"
                    class="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                    Twitter
                  </a>
                  <a
                    href="https://t.me/sumitkolhe"
                    target="_blank"
                    class="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer class="mt-16 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} JioSaavn API. An unofficial project not affiliated with JioSaavn.</p>
          </footer>
        </main>
      </body>
    </html>
  )
})
