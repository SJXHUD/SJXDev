import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function DiscordDebloat() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>How to Debloat and Strip Discord | SJX.dev</title>
        <meta name="description" content="A guide on how to debloat Discord by removing unnecessary modules and locales" />
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
          <time className="text-[11px] text-gray-500 font-medium">January 13, 2025</time>
          <h1 className="text-2xl font-bold mt-1 mb-2">How to Debloat and Strip Discord</h1>
          <div className="flex gap-2">
            <span className="tag">GUIDE</span>
            <span className="tag">PC-TWEAKING</span>
            <span className="tag">DISCORD</span>
          </div>
        </header>

        <div className="space-y-3 text-sm">
          <ol className="space-y-3">
            <li>
              Press <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">Windows + R</code>, type <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">%LOCALAPPDATA%</code>, 
              and hit Enter to open your AppData folder. Then, navigate to the Discord installation directory and open the <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">modules</code> folder.
            </li>
            
            <li>
              Keep only these modules:
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">discord_desktop_core-1</code></li>
                <li><code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">modules-1</code></li>
                <li><code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">utils-1</code></li>
                <li><code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">voice-1</code></li>
              </ul>
              <p className="text-gray-400 mt-2 text-sm">
                If there are other modules you need, feel free to leave them (examples: 
                <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">discord_krisp-1</code> for noise reduction, 
                <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">discord_rpc-1</code> for Rich Presence, etc).
              </p>
            </li>
            
            <li>
              Now, go into the <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">locales</code> folder.
            </li>
            
            <li>
              Keep only the language pack you use. So for example if you use English, only keep 
              <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-[13px]">en-US.pak</code>.
            </li>
          </ol>

          <div className="bg-red-900/10 px-3 py-2 rounded-md mt-4 border border-red-900/20 text-sm flex gap-2 items-center text-gray-300">
            <svg className="w-4 h-4 text-red-400/80 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V14M12 17.5V18M6.6 21H17.4C18.8359 21 19.5544 21 20.0927 20.7478C20.5645 20.5245 20.9441 20.1449 21.1674 19.673C21.4196 19.1348 21.4196 18.4163 21.4196 16.9804V7.01961C21.4196 5.58368 21.4196 4.86571 21.1674 4.32752C20.9441 3.85562 20.5645 3.47595 20.0927 3.25264C19.5544 3 18.8359 3 17.4 3H6.6C5.16407 3 4.44609 3 3.90791 3.25264C3.43601 3.47595 3.05634 3.85562 2.83303 4.32752C2.58039 4.86571 2.58039 5.58368 2.58039 7.01961V16.9804C2.58039 18.4163 2.58039 19.1348 2.83303 19.673C3.05634 20.1449 3.43601 20.5245 3.90791 20.7478C4.44609 21 5.16407 21 6.6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-red-400/90 font-medium">Important:</span>
            Each time Discord updates, the modules and locales will reappear.
          </div>
        </div>
      </article>
    </div>
  )
}
