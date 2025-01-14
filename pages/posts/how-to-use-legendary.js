import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function LegendaryGuide() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>How to Use Legendary Instead of Epic Games Launcher | SJX.dev</title>
        <meta name="description" content="A guide on how to use Legendary as a lightweight alternative to the Epic Games Launcher" />
      </Head>

      <header className="flex flex-col items-center mb-8">
        <Link href="/" className="inline-block">
          <Image 
            src="/sjxdev.svg"
            alt="SJX.dev"
            width={90}
            height={30}
            className="logo-gradient"
          />
        </Link>
      </header>

      <nav className="mb-6">
        <Link href="/" className="back-button text-accent hover:text-green-400 inline-flex items-center text-sm">
          ← Back to home
        </Link>
      </nav>

      <article className="prose prose-invert prose-sm max-w-none article-content">
        <header className="mb-6">
          <time className="text-[11px] text-gray-500 font-medium">January 14, 2025</time>
          <h1 className="text-2xl font-bold mt-1 mb-2">How to Use Legendary Instead of Epic Games Launcher</h1>
          <div className="flex gap-2">
            <span className="tag">GUIDE</span>
            <span className="tag">GAMING</span>
            <span className="tag">EPIC-GAMES</span>
          </div>
        </header>

        <div className="space-y-3 text-sm">
          <p className="font-medium text-lg">Installation and Setup:</p>
          
          <ol className="space-y-3">
            <li>
              <strong>Install Legendary</strong>
              <ul className="mt-2 space-y-2">
                <li>Download Legendary from its GitHub page: <a href="https://github.com/derrod/legendary" className="text-accent hover:text-green-400">https://github.com/derrod/legendary</a></li>
                <li>Extract the files to a folder or install it with a package manager using: <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">pip install legendary-gl</code></li>
              </ul>
            </li>
            
            <li>
              <strong>Log in to Your Epic Games Account</strong>
              <ul className="mt-2 space-y-2">
                <li>Open a terminal or command prompt</li>
                <li>Run the command: <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">legendary auth</code></li>
                <li>Follow the instructions to log in and generate a token for your library</li>
              </ul>
            </li>

            <li>
              <strong>View Your Game Library</strong>
              <ul className="mt-2 space-y-2">
                <li>Run <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">legendary list-games</code> to see all games in your Epic Games account</li>
                <li>This will show game names and their identifiers needed for installation</li>
              </ul>
            </li>

            <li>
              <strong>Install a Game</strong>
              <ul className="mt-2 space-y-2">
                <li>Use the command: <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">legendary install &lt;game_name&gt;</code></li>
                <li>Replace <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">&lt;game_name&gt;</code> with the game's identifier from your library list</li>
              </ul>
            </li>

            <li>
              <strong>Launch a Game</strong>
              <ul className="mt-2 space-y-2">
                <li>After installation, launch games with: <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">legendary launch &lt;game_name&gt;</code></li>
              </ul>
            </li>

            <li>
              <strong>Update Games</strong>
              <ul className="mt-2 space-y-2">
                <li>Keep your games up to date by running: <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">legendary update &lt;game_name&gt;</code></li>
              </ul>
            </li>
          </ol>

          <p className="mt-6">
            <strong>Benefits of Using Legendary:</strong>
          </p>
          <ul className="space-y-2">
            <li>• Lightweight alternative to the Epic Games Launcher</li>
            <li>• No unnecessary background processes</li>
            <li>• Faster game downloads and updates</li>
            <li>• Command-line interface for power users</li>
            <li>• Open-source and community-driven</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
