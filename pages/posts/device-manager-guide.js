import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function DeviceManagerGuide() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>Device Manager Optimization Guide | SJX.dev</title>
        <meta name="description" content="A comprehensive guide to optimizing Windows Device Manager for better system performance" />
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
          <h1 className="text-2xl font-bold mt-1 mb-2">Device Manager Optimization Guide</h1>
          <div className="flex gap-2">
            <span className="tag">GUIDE</span>
            <span className="tag">PC-TWEAKING</span>
            <span className="tag">WINDOWS</span>
          </div>
        </header>

        <div className="space-y-3 text-sm">
          <div>
            <p>
              <span className="text-accent font-medium">1.</span> Download and run Device Cleanup as administrator:
              <a 
                href="https://cdn.discordapp.com/attachments/1315850559542267954/1328634663962546227/Device_Cleanup.rar?ex=67876af4&is=67861974&hm=f7bb7d264045d4252322f367f22675b70828b2e55caea72b91088309aceb7cba&"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 bg-accent/5 px-2 py-0.5 rounded text-[13px] border border-accent/10 transition-colors ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L12 2M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.83859 20.3477 3.00667 20.7472C3.17475 21.1466 3.39897 21.5009 3.68508 21.8024C3.97119 22.1038 4.31648 22.3487 4.70907 22.5297C5.10167 22.7106 5.53266 22.8306 6.007 22.9451L7.5 23.2C8.00622 23.3244 8.52339 23.4 9.044 23.4H14.956C15.4766 23.4 15.9938 23.3244 16.5 23.2L17.993 22.9451C18.4673 22.8306 18.8983 22.7106 19.2909 22.5297C19.6835 22.3487 20.0288 22.1038 20.3149 21.8024C20.601 21.5009 20.8252 21.1466 20.9933 20.7472C21.1614 20.3477 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Device Cleanup
              </a>
            </p>
          </div>

          <div>
            <p className="mb-2">
              <span className="text-accent font-medium">2.</span> Open Device Manager and disable these devices:
            </p>

            <div className="space-y-3 text-[13px]">
              <div className="bg-gray-800/30 px-3 py-2 rounded border border-gray-800/60">
                <div className="text-gray-300 font-medium mb-1">Bluetooth</div>
                <div className="space-y-0.5">
                  <div>• <span className="text-accent">Intel(R) Wireless Bluetooth(R)</span> <span className="text-gray-500 text-xs">— if not using Bluetooth</span></div>
                </div>
              </div>

              <div className="bg-gray-800/30 px-3 py-2 rounded border border-gray-800/60">
                <div className="text-gray-300 font-medium mb-1">Network Adapters</div>
                <div className="space-y-0.5">
                  <div>• <span className="text-accent">All WAN miniports</span></div>
                  <div>• <span className="text-accent">Microsoft ISATAP Adapter</span></div>
                </div>
              </div>

              <div className="bg-gray-800/30 px-3 py-2 rounded border border-gray-800/60">
                <div className="text-gray-300 font-medium mb-1">Software Devices</div>
                <div className="space-y-0.5">
                  <div>• <span className="text-accent">Microsoft GS Wavetable Synth</span></div>
                </div>
              </div>

              <div className="bg-gray-800/30 px-3 py-2 rounded border border-gray-800/60">
                <div className="text-gray-300 font-medium mb-1">Storage Controllers</div>
                <div className="space-y-0.5">
                  <div>• <span className="text-accent">Microsoft iSCSI Initiator</span></div>
                </div>
              </div>

              <div className="bg-gray-800/30 px-3 py-2 rounded border border-gray-800/60">
                <div className="text-gray-300 font-medium mb-1">System Devices</div>
                <div className="space-y-0.5">
                  <div>• <span className="text-accent">Compossite Bus Enumerator</span></div>
                  <div>• <span className="text-accent">High Definition Audio Controller</span></div>
                  <div>• <span className="text-accent">High Precision Event Timer</span> <span className="text-gray-500 text-xs">— test both enabled/disabled</span></div>
                  <div>• <span className="text-accent">Inter(R) Management Engine Interface #1</span></div>
                  <div>• <span className="text-accent">Microsoft Virtual Drive Enumerator</span></div>
                  <div>• <span className="text-accent">NDIS Virtual Network Adapter Enumerator</span></div>
                  <div>• <span className="text-accent">Remote Desktop Device Redirector Bus</span></div>
                  <div>• <span className="text-accent">System Timer</span></div>
                  <div>• <span className="text-accent">UMBus Root Bus Enumerator</span></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-1">
              <span className="text-accent font-medium">3.</span> Disable power saving for important devices:
            </p>
            <div className="text-[13px] flex items-center gap-4">
              <div className="space-y-0.5">
                <div>• USB Root Hubs</div>
                <div>• Network Controllers</div>
                <div>• Similar Critical Devices</div>
              </div>
              <div className="text-gray-400 text-sm">Find in Device Properties {'>'}  Power Management</div>
            </div>
          </div>

          <div className="bg-red-900/10 px-3 py-2 rounded-md mt-4 border border-red-900/20 text-sm flex gap-2 items-center text-gray-300">
            <svg className="w-4 h-4 text-red-400/80 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V14M12 17.5V18M6.6 21H17.4C18.8359 21 19.5544 21 20.0927 20.7478C20.5645 20.5245 20.9441 20.1449 21.1674 19.673C21.4196 19.1348 21.4196 18.4163 21.4196 16.9804V7.01961C21.4196 5.58368 21.4196 4.86571 21.1674 4.32752C20.9441 3.85562 20.5645 3.47595 20.0927 3.25264C19.5544 3 18.8359 3 17.4 3H6.6C5.16407 3 4.44609 3 3.90791 3.25264C3.43601 3.47595 3.05634 3.85562 2.83303 4.32752C2.58039 4.86571 2.58039 5.58368 2.58039 7.01961V16.9804C2.58039 18.4163 2.58039 19.1348 2.83303 19.673C3.05634 20.1449 3.43601 20.5245 3.90791 20.7478C4.44609 21 5.16407 21 6.6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <span className="text-red-400/90 font-medium">Important:</span> Ensure you understand each device's function before disabling it.
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
