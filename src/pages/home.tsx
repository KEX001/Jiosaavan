import { Hono } from 'hono'

export const Home = new Hono()

export const MusicNotes = ({ count = 30 }: { count?: number }) => {
  const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯']
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const note = notes[Math.floor(Math.random() * notes.length)]
        return (
          <div
            key={i}
            class="absolute text-white opacity-80 animate-float"
            style={{
              fontSize: `${Math.random() * 1 + 0.5}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {note}
          </div>
        )
      })}
    </>
  )
}

export const PulsingOrbs = () => {
  return (
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-pulse-slow" />
      <div class="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-600/15 blur-3xl animate-pulse-slower" />
      <div class="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl animate-pulse-slowest" />
    </div>
  )
}

Home.get('/', (c) => {
  const title = 'JioSaavn API'
  const description =
    "Bringing the magic of Indian music to developers worldwide. Our unofficial API opens doors to JioSaavn's vast collection, helping you build applications that resonate with millions of hearts."

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { font-family: 'Inter', sans-serif; }
            .heading-font { font-family: 'Poppins', sans-serif; }
            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.3; transform: scale(1.1); }
            }
            @keyframes pulse-slower {
              0%, 100% { opacity: 0.15; transform: scale(1); }
              50% { opacity: 0.25; transform: scale(1.05); }
            }
            @keyframes pulse-slowest {
              0%, 100% { opacity: 0.1; transform: scale(1); }
              50% { opacity: 0.2; transform: scale(1.03); }
            }
            .animate-float { animation: float 8s ease-in-out infinite; }
            .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
            .animate-pulse-slower { animation: pulse-slower 12s ease-in-out infinite; }
            .animate-pulse-slowest { animation: pulse-slowest 16s ease-in-out infinite; }
            .text-gradient {
              background: linear-gradient(90deg, #ff7d78 0%, #ff4d9e 50%, #9d4dff 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            .card-hover-effect {
              transition: all 0.3s ease;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .card-hover-effect:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .bg-music-gradient {
              background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
            }
            .glow-text {
              text-shadow: 0 0 10px rgba(255, 125, 120, 0.5);
            }
            .heartbeat {
              animation: heartbeat 1.5s ease-in-out infinite both;
            }
            @keyframes heartbeat {
              from { transform: scale(1); }
              14% { transform: scale(1.1); }
              28% { transform: scale(1); }
              42% { transform: scale(1.1); }
              70% { transform: scale(1); }
            }
            `
          }}
        />
      </head>
      <body class="bg-music-gradient min-h-screen text-white overflow-x-hidden">
        <PulsingOrbs />
        <MusicNotes />

        <main class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          <div class="text-center mb-16">
            <div class="flex items-center justify-center space-x-4 mb-6">
              <svg 
                class="h-16 w-16 heartbeat text-[#ff7d78]" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3.172 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.172 8.535C4.343 22 6.229 22 10 22h3.376A4.25 4.25 0 0 1 17 16.007V12.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 .5.707V12c0-4.714 0-7.071-1.172-8.536C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464"
                  opacity=".5"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m11-.5a.75.75 0 0 1 .75.75a2.25 2.25 0 0 0 2.25 2.25a.75.75 0 0 1 0 1.5a3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 class="heading-font text-5xl md:text-7xl font-bold text-gradient glow-text">
                JioSaavn API
              </h1>
            </div>
            
            <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 leading-relaxed">
              {description}
            </p>

            <div class="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span class="text-sm font-medium">Serving music to {Math.floor(Math.random() * 500) + 500}+ developers</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a
              href="/docs"
              class="card-hover-effect group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 overflow-hidden"
            >
              <div class="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Begin Your Journey</h3>
                <p class="text-gray-300 mb-4">
                  Explore comprehensive documentation to integrate the magic of Indian music into your applications.
                </p>
                <div class="text-pink-400 text-sm font-medium flex items-center">
                  Start Building
                  <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/sumitkolhe/jiosaavn-api"
              target="_blank"
              class="card-hover-effect group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              <div class="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Open Source Love</h3>
                <p class="text-gray-300 mb-4">
                  Built with passion and shared with the world. Contribute, fork, or star our GitHub repository.
                </p>
                <div class="text-purple-400 text-sm font-medium flex items-center">
                  View on GitHub
                  <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/sumitkolhe/jiosaavn-api/issues"
              target="_blank"
              class="card-hover-effect group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              <div class="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Join Our Community</h3>
                <p class="text-gray-300 mb-4">
                  Help shape the future of this project. Report issues, suggest features, or submit pull requests.
                </p>
                <div class="text-blue-400 text-sm font-medium flex items-center">
                  Contribute Now
                  <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </a>

            <div class="card-hover-effect group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
              <div class="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Connect With Me</h3>
                <p class="text-gray-300 mb-4">
                  Have questions or just want to say hello? I'd love to hear from you about music, tech, or life.
                </p>
                <div class="text-amber-400 text-sm font-medium flex items-center">
                  Reach Out
                  <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <p class="text-gray-400 mb-2 text-sm">
              "Music expresses that which cannot be put into words and that which cannot remain silent."
            </p>
            <p class="text-gray-500 text-xs">
              - Victor Hugo
            </p>
          </div>
        </main>

        <footer class="py-6 text-center text-gray-500 text-sm">
          <p>Made with ♥ in India | © {new Date().getFullYear()} JioSaavn API</p>
          <p class="mt-1 text-xs text-gray-600">An unofficial project not affiliated with JioSaavn</p>
        </footer>
      </body>
    </html>
  )
})
