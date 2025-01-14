import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Legal() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Head>
        <title>Terms & Rules - SJX.dev</title>
        <meta name="description" content="Terms of Service and Server Rules for SJX's community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-center mb-12">
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

      <div className="grid grid-cols-2 gap-3 mb-12 px-4">
        <a href="https://discord.gg/U8bNj2fdpM" 
           className="flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#5865F2]/5 hover:bg-[#5865F2]/10 border border-[#5865F2]/10 rounded-md transition-all duration-300 group"
           target="_blank" 
           rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2] transition-transform duration-300 group-hover:-rotate-12">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <span className="text-[#5865F2] text-[15px] font-medium">Join my Discord</span>
        </a>

        <a href="https://github.com/SJXHUD" 
           className="flex items-center justify-center gap-2.5 py-3.5 px-5 bg-gray-800/20 hover:bg-gray-800/30 border border-gray-700/20 rounded-md transition-all duration-300 group"
           target="_blank" 
           rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gray-100 transition-transform duration-300 group-hover:-rotate-12">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"/>
          </svg>
          <span className="text-gray-100 text-[15px] font-medium">Follow me on GitHub</span>
        </a>
      </div>

      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="mb-16">
          <h1 className="text-2xl font-bold text-center mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm text-center mb-8">Effective Date: December 9, 2024</p>

          <div className="space-y-6">
            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">1. Acceptance of Terms</h3>
              <p className="text-gray-300 text-sm leading-relaxed">By joining and participating in the this Discord server, you agree to abide by the following Terms of Service (ToS). If you do not agree with any part of these terms, you must not access or use this server.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">2. User Conduct</h3>
              <p className="text-gray-300 text-sm leading-relaxed">You agree to the rules in #📋┃rules</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">3. Ranking and Reviews</h3>
              <p className="text-gray-300 text-sm leading-relaxed">This server provides information and rankings related to certain softwares. All rankings and reviews are subjective and for informational purposes only. We do not endorse or guarantee the legality or safety of any third-party software. Use at your own risk.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">4. Account Sales</h3>
              <p className="text-gray-300 text-sm leading-relaxed">The sale of accounts is at your own risk. SJX does guarantee the validity of the account sold but not the lifespan. We do not provide refunds or exchanges unless the account is invalid.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">5. Limitation of Liability</h3>
              <p className="text-gray-300 text-sm leading-relaxed">SJX and its administrators are not responsible for any consequences resulting from the use of software, accounts, or any other services discussed or sold on the server. You agree to use any third-party products at your own discretion and risk.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">6. Changes to the Terms</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We reserve the right to update or modify these Terms of Service at any time. However, we will always notify the community of any significant changes to the Terms of Service by posting an announcement in the server. It is your responsibility to review these changes.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">7. Termination</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We reserve the right to terminate or suspend your access to the server at any time, with or without cause, if you violate these Terms of Service or Discord's policies.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">8. Contact Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed">If you have any questions or concerns about these Terms of Service, please contact @sjxhud.</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center mb-8">Discord Server Rules</h1>

          <div className="space-y-6">
            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No Threats or Doxxing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Threats, harassment, or sharing personal information of others (doxxing) will result in an immediate ban from the server.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No Disrespectful Behavior</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Entitled, disrespectful, or immature behavior will not be tolerated. Act maturely.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No NSFW Content</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Sharing NSFW content will result in an instant ban.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No Reversing or Cracking Software</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Sharing information related to software cracking, reversing, or other illegal activities is prohibited and will lead to a ban.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">Admin Discretion</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Admins have the authority to mute, ban, kick, or apply timeouts at their discretion. If you believe an admin is abusing their power, DM me privately, and I will investigate.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No Alt Accounts</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Creating and using alt accounts is prohibited. Any discovery of alt accounts will lead to a ban for all related accounts.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No Slandering or Misinformation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Slandering providers, spreading false information, or creating unnecessary drama in the chat will result in punishment, including bans if the behavior persists.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">Provider Feedback</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Feedback about providers should remain constructive. Blatant hate or false accusations without proof will not be tolerated.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">No Unapproved Ads or Self-Promotion</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Advertising without permission is forbidden. Self-promotion must be pre-approved by the server owner or admins.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">Follow Discord's ToS</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Violating Discord's Terms of Service is not allowed and may result in the server being reported.</p>
            </div>

            <div className="bg-gray-800/20 p-4 rounded-lg border border-gray-700/20">
              <h3 className="text-accent font-medium mb-2">Be Responsible</h3>
              <p className="text-gray-300 text-sm leading-relaxed">You are responsible for your actions and words. Claiming ignorance of the rules will not exempt you from punishment.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
