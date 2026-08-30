const sections = [
  { id: 'install', title: 'Installation' },
  { id: 'config', title: 'Configuration' },
  { id: 'shortcode', title: 'Shortcode usage' },
  { id: 'gutenberg', title: 'Gutenberg block' },
  { id: 'rss', title: 'RSS mode' },
  { id: 'api', title: 'API mode (Pro)' },
  { id: 'apikey', title: 'Creating a YouTube API key' },
  { id: 'quota', title: 'API quota' },
  { id: 'caching', title: 'Caching' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
  { id: 'security', title: 'Security and privacy' },
]

const tshooting = [
  ['No channel ID configured', 'missing channel', 'set it in Settings or the shortcode'],
  ['Feed could not be fetched', 'network or transient failure', 'clear cache and retry'],
  ['API key required', 'Shorts without key', 'add key in Pro settings'],
  ['API quota exceeded', 'daily quota used', 'raise cache duration or wait for reset'],
]

export default function SimpleTubeDocs() {
  return (
    <div>
      <section className="px-5 pt-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">Documentation</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">SimpleTube Feed docs</h1>
          <p className="mt-4 text-muted">Installation, configuration, shortcode and block usage, plus RSS vs API mode, API keys, quotas, caching, and troubleshooting.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <nav className="rounded-2xl border border-line bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Contents</p>
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => document.getElementById(`docs-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="mt-2 block w-full text-left font-mono text-sm text-accent hover:underline"
            >
              {s.title}
            </button>
          ))}
        </nav>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div id="docs-install" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Installation</h2>
          <h3 className="mt-5 font-serif text-lg">Lite (free)</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            <li>Download the Lite ZIP from the <a href="#/simpletube-feed" className="text-accent hover:underline">product page</a>.</li>
            <li>In WordPress: <strong>Plugins → Add New → Upload Plugin</strong>.</li>
            <li>Choose the ZIP, click <strong>Install Now</strong>, then <strong>Activate</strong>.</li>
          </ol>
          <h3 className="mt-6 font-serif text-lg">Pro</h3>
          <p className="mt-2 text-muted">The Pro ZIP bundles both Lite and Pro, so installing it brings everything. Activate both plugins, then create saved feeds under <strong>Settings → SimpleTube Feed Pro</strong>.</p>
          <p className="mt-2 text-muted"><strong>Requirements:</strong> WordPress 5.8+, PHP 7.4+.</p>
        </div>

        <div id="docs-config" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Configuration</h2>
          <p className="mt-3 text-muted"><strong>Lite</strong>: go to <strong>Settings → SimpleTube Feed</strong> and set your channel ID, display limit, layout (grid/list), whether to show title/date, and cache duration.</p>
          <p className="mt-3 text-muted"><strong>Pro</strong>: go to <strong>Settings → SimpleTube Feed Pro</strong> and add feeds. Each feed has its own type (channel/playlist), ID, layout, limit, metadata, and optional custom CSS. You can import/export all feeds as JSON.</p>
        </div>

        <div id="docs-shortcode" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Shortcode usage</h2>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-[#17130f] p-5 font-mono text-sm text-[#f2e8dc]"><span className="text-[#7a6f62]"># Lite, one channel feed</span>{'\n'}[simpletube_feed channel="UCX_your_channel_ID" limit="6"]{'\n\n'}<span className="text-[#7a6f62]"># Pro, a saved feed</span>{'\n'}[simpletube_feed_pro feed="my-videos" layout="carousel" limit="8"]</pre>
        </div>

        <div id="docs-gutenberg" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Gutenberg block</h2>
          <p className="mt-3 text-muted">Search for "SimpleTube" in the block inserter. Set the channel (Lite) or choose a saved feed (Pro), then configure layout and metadata in the sidebar. It renders server-side with the same sanitization and escaping as the shortcode.</p>
        </div>

        <div id="docs-rss" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">RSS mode</h2>
          <p className="mt-3 text-muted">Lite (and Pro channel/playlist feeds) use YouTube's <strong>official public RSS feed</strong>, no API key required:</p>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-[#17130f] p-5 font-mono text-sm text-[#f2e8dc]">https://www.youtube.com/feeds/videos.xml?channel_id=UCxxxxxxxxxxxxxxxxxxxxxx</pre>
          <p className="mt-3 text-muted">No scraping, no cost, no quotas. This is the recommended mode for channels.</p>
        </div>

        <div id="docs-api" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">API mode (Pro)</h2>
          <p className="mt-3 text-muted">Pro can use the <strong>YouTube Data API v3</strong> for features RSS cannot support reliably, mainly <strong>Shorts</strong>. API mode is off by default. You supply your own API key; it is stored in a WordPress option and never sent to any SimpleTube server. Responses are cached to save quota.</p>
        </div>

        <div id="docs-apikey" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Creating a YouTube API key</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            <li>Open the <a href="https://console.cloud.google.com/" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">Google Cloud Console</a>.</li>
            <li>Create or select a project.</li>
            <li><strong>APIs and Services → Library</strong> and enable <strong>YouTube Data API v3</strong>.</li>
            <li><strong>APIs and Services → Credentials → Create credentials → API key</strong>.</li>
            <li>Paste the key into <strong>Settings → SimpleTube Feed Pro → API key</strong>.</li>
            <li><strong>Restrict the key</strong> to the YouTube Data API v3 and your site (referrer/IP).</li>
          </ol>
        </div>

        <div id="docs-quota" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">API quota</h2>
          <p className="mt-3 text-muted">The default quota is <strong>10,000 units/day</strong>; a list call costs about 100 units. With caching this is a handful of requests per cache window, well within quota. If quota is exhausted, the plugin keeps serving the last cached feed and shows a clear admin error; it never breaks the page.</p>
        </div>

        <div id="docs-caching" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Caching</h2>
          <p className="mt-3 text-muted">Feeds are cached with WordPress <strong>transients</strong> (default 1 hour, configurable per feed in Pro). The YouTube request happens once per cache window. Use <strong>Clear cache</strong> in Settings to force a refetch after updates.</p>
        </div>

        <div id="docs-troubleshooting" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Troubleshooting</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-card">
                  <th className="p-3 font-mono text-xs uppercase tracking-wider text-muted">Error</th>
                  <th className="p-3 font-mono text-xs uppercase tracking-wider text-muted">Cause</th>
                  <th className="p-3 font-mono text-xs uppercase tracking-wider text-muted">Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {tshooting.map(([e, c, f]) => (
                  <tr key={e}>
                    <td className="p-3 font-mono text-xs">{e}</td>
                    <td className="p-3 text-muted">{c}</td>
                    <td className="p-3 text-muted">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="docs-security" className="border-t border-line pt-10">
          <h2 className="font-serif text-2xl">Security and privacy</h2>
          <p className="mt-3 text-muted">No analytics, no tracking, no cookies, no external accounts. Data is fetched directly from YouTube by your server and never sent to any SimpleTube server. All output is escaped, admin input is sanitized, and privileged actions require capability and nonce checks. Feed XML is parsed with XXE disabled. API keys are never exposed to frontend JavaScript.</p>
        </div>
      </section>
    </div>
  )
}
