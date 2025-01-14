import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Rules() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>Discord Server Rules | SJX.dev</title>
        <meta name="description" content="Rules and guidelines for SJX's Discord community" />
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
          <h1 className="text-2xl font-bold mt-1 mb-2">Discord Server Rules</h1>
          <div className="flex gap-2">
            <span className="tag">RULES</span>
            <span className="tag">COMMUNITY</span>
          </div>
        </header>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No Threats or Doxxing</h2>
            <p>Threats, harassment, or sharing personal information of others (doxxing) will result in an immediate ban from the server.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No Disrespectful Behavior</h2>
            <p>Entitled, disrespectful, or immature behavior will not be tolerated. Act maturely.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No NSFW Content</h2>
            <p>Sharing NSFW content will result in an instant ban.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No Reversing or Cracking Software</h2>
            <p>Sharing information related to software cracking, reversing, or other illegal activities is prohibited and will lead to a ban.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">Admin Discretion</h2>
            <p>Admins have the authority to mute, ban, kick, or apply timeouts at their discretion. If you believe an admin is abusing their power, DM me privately, and I will investigate.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No Alt Accounts</h2>
            <p>Creating and using alt accounts is prohibited. Any discovery of alt accounts will lead to a ban for all related accounts.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No Slandering or Misinformation</h2>
            <p>Slandering providers, spreading false information, or creating unnecessary drama in the chat will result in punishment, including bans if the behavior persists.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">Provider Feedback</h2>
            <p>Feedback about providers should remain constructive. Blatant hate or false accusations without proof will not be tolerated.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">No Unapproved Ads or Self-Promotion</h2>
            <p>Advertising without permission is forbidden. Self-promotion must be pre-approved by the server owner or admins.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">Follow Discord's ToS</h2>
            <p>Violating Discord's Terms of Service is not allowed and may result in the server being reported.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">Be Responsible</h2>
            <p>You are responsible for your actions and words. Claiming ignorance of the rules will not exempt you from punishment.</p>
          </section>
        </div>
      </article>
    </div>
  )
}
