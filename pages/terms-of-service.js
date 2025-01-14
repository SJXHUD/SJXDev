import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function TermsOfService() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>SJX Services Terms of Service | SJX.dev</title>
        <meta name="description" content="Terms of Service for SJX Services community" />
      </Head>

      <header className="flex flex-col items-center mb-8">
        <Link href="/" className="inline-block">
          <Image 
            src="/sjxdev.svg"
            alt="SJX.dev"
            width={95}
            height={32}
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
          <time className="text-[11px] text-gray-500 font-medium">December 9, 2024</time>
          <h1 className="text-2xl font-bold mt-1 mb-2">SJX Services Terms of Service</h1>
          <div className="flex gap-2">
            <span className="tag">LEGAL</span>
            <span className="tag">COMMUNITY</span>
          </div>
        </header>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">1. Acceptance of Terms</h2>
            <p>By joining and participating in the this Discord server, you agree to abide by the following Terms of Service (ToS). If you do not agree with any part of these terms, you must not access or use this server.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">2. User Conduct</h2>
            <p>You agree to the rules in #📋┃rules</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">3. Ranking and Reviews</h2>
            <p>This server provides information and rankings related to certain softwares. All rankings and reviews are subjective and for informational purposes only. We do not endorse or guarantee the legality or safety of any third-party software. Use at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">4. Account Sales</h2>
            <p>The sale of accounts is at your own risk. SJX does guarantee the validity of the account sold but not the lifespan. We do not provide refunds or exchanges unless the account is invalid.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">5. Limitation of Liability</h2>
            <p>SJX and its administrators are not responsible for any consequences resulting from the use of software, accounts, or any other services discussed or sold on the server. You agree to use any third-party products at your own discretion and risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">6. Changes to the Terms</h2>
            <p>We reserve the right to update or modify these Terms of Service at any time. However, we will always notify the community of any significant changes to the Terms of Service by posting an announcement in the server. It is your responsibility to review these changes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">7. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to the server at any time, with or without cause, if you violate these Terms of Service or Discord's policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">8. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms of Service, please contact @sjxhud.</p>
          </section>
        </div>
      </article>
    </div>
  )
}
