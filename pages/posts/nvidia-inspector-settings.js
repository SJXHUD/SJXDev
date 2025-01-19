import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function OptimizedNvidiaInspector() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>Optimized Nvidia Inspector Profile | SJXDev</title>
        <meta name="description" content="A step-by-step guide on using my Nvidia Profile Inspector settings to improve performance." />
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
          <time className="text-[11px] text-gray-500 font-medium">January 17, 2025</time>
          <h1 className="text-2xl font-bold mt-1 mb-2">Optimized Nvidia Inspector Profile</h1>
          <div className="flex gap-2">
            <span className="tag">GUIDE</span>
            <span className="tag">PC-TWEAKING</span>
            <span className="tag">GPU-NVIDIA</span>
            <span className="tag">DOWNLOAD</span>
          </div>
        </header>

        <div className="space-y-3 text-sm">
          <ol className="space-y-3">
            <li>
              <span className="text-accent font-medium">1.</span> Download my Nvidia Inspector profile:
              <a 
                href="https://cdn.discordapp.com/attachments/1315850559542267954/1329999702485241887/SJX.nip?ex=678c623f&is=678b10bf&hm=c0d79c960ae0b293d2f76500bcd3d6a7d2ca9c606fae35ab468a5bca73364cf2&"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 bg-accent/5 px-2 py-0.5 rounded text-[13px] border border-accent/10 transition-colors ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L12 2M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.83859 20.3477 3.00667 20.7472C3.17475 21.1466 3.39897 21.5009 3.68508 21.8024C3.97119 22.1038 4.31648 22.3487 4.70907 22.5297C5.10167 22.7106 5.53266 22.8306 6.007 22.9451L7.5 23.2C8.00622 23.3244 8.52339 23.4 9.044 23.4H14.956C15.4766 23.4 15.9938 23.3244 16.5 23.2L17.993 22.9451C18.4673 22.8306 18.8983 22.7106 19.2909 22.5297C19.6835 22.3487 20.0288 22.1038 20.3149 21.8024C20.601 21.5009 20.8252 21.1466 20.9933 20.7472C21.1614 20.3477 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download SJX's Profile
              </a>
            </li>
            <li>
              <span className="text-accent font-medium">2.</span> Open Nvidia Profile Inspector and import the downloaded profile.
            </li>
            <li>
              <span className="text-accent font-medium">3.</span> Apply the optimized settings and save the changes.
            </li>
          </ol>
        </div>
      </article>
    </div>
  )
}
