import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const allTags = ['GUIDE', 'PC-TWEAKING', 'DEBLOATING', 'GAMING', 'DOWNLOAD', 'GPU-NVIDIA', 'DOWNLOAD', 'CPU']

  const posts = [
    {
      date: '2025-01-14',
      title: 'How to Use Legendary Instead of Epic Games Launcher',
      tags: ['GUIDE', 'GAMING', 'DOWNLOAD'],
      description: 'A guide on how to use Legendary as a lightweight alternative to the Epic Games Launcher.',
      slug: 'how-to-use-legendary'
    },
    {
      date: '2025-01-11',
      title: 'Device Manager Optimization Guide',
      tags: ['GUIDE', 'PC-TWEAKING', 'GAMING', 'DOWNLOAD'],
      description: 'A comprehensive guide to optimizing Windows Device Manager for better system performance.',
      slug: 'device-manager-guide'
    },
    {
      date: '2025-01-10',
      title: 'How to Debloat and Strip Discord',
      tags: ['GUIDE', 'DEBLOATING', 'DISCORD'],
      description: 'A step-by-step guide on removing unnecessary modules and locales from Discord to improve performance.',
      slug: 'how-to-debloat-discord'
    },
    {
      date: '2025-01-17',
      title: 'Best Nvidia Inspector Settings',
      tags: ['GUIDE', 'PC-TWEAKING', 'GPU-NVIDIA', 'DOWNLOAD'],
      description: 'A step-by-step guide on using my Nvidia Profile Inspector settings to improve performance.',
      slug: 'nvidia-inspector-settings'
    }
  ]

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => post.tags.includes(tag))
    
    return matchesSearch && matchesTags
  })

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Head>
        <title>SJX.dev</title>
        <meta name="description" content="PC Tweaking & Optimization Guides" />
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

      <div className="grid grid-cols-2 gap-3 mb-8">
        <a href="https://discord.gg/U8bNj2fdpM" 
           className="flex items-center justify-center gap-2.5 py-3.5 px-5 bg-accent/5 hover:bg-accent/10 border border-accent/10 rounded-md transition-all duration-300 group"
           target="_blank" 
           rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-accent transition-transform duration-300 group-hover:-rotate-12">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <span className="text-accent text-[15px] font-medium">Join my Discord</span>
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

      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-1.5 bg-accent/[0.03] border border-accent/[0.07] rounded text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all text-[13px]"
            />
          </div>
          <div className="flex-1 flex flex-wrap gap-1.5">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-[11px] px-2 py-0.5 rounded transition-colors ${
                  selectedTags.includes(tag)
                    ? 'tag'
                    : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main>
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <Link 
              href={`/posts/${post.slug}`} 
              key={post.slug} 
              className="post-link no-underline block"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <article className="group">
                <time className="post-date">
                  {format(new Date(post.date), 'MMM d, yyyy')}
                </time>
                <h2 className="post-title group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="post-description">{post.description}</p>
                <span className="read-more">Read more →</span>
              </article>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-500 py-8">No posts found matching your criteria</p>
          )}
        </div>
      </main>
    </div>
  )
}
