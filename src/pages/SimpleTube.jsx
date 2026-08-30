import { useState } from 'react'
import { simpletube } from '../data/product.json'

const features = [
  { icon: '📺', title: 'Channel, playlist and Shorts', text: 'One or many feeds. Playlists and channels work over public RSS; Shorts use the optional YouTube Data API.' },
  { icon: '🗂', title: 'Four layouts', text: 'Grid, list, carousel, and featured. Each feed gets its own layout, limit, and custom CSS.' },
  { icon: '⚡', title: 'Fast and cached', text: 'Transient caching means no slow YouTube round-trips on every page load.' },
  { icon: '🔒', title: 'Hardened and private', text: 'Escaped output, sanitized input, capability and nonce checks, and XXE-hardened parsing. No tracking, ever.' },
  { icon: '📝', title: 'Shortcode and block', text: 'Drop in a Gutenberg block or a shortcode. Works anywhere.' },
  { icon: '✅', title: 'GPL-2.0 licensed', text: 'Free and open source at its core. Own your content; pay only for the convenience features.' },
]

const compare = [
  ['Channel feeds (public RSS)', true, true],
  ['Multiple saved feeds', false, true],
  ['Playlist feeds', false, true],
  ['Shorts feeds (YouTube Data API)', false, true],
  ['Grid and list layouts', true, true],
  ['Carousel and featured layouts', false, true],
  ['Per-card metadata controls', false, true],
  ['Custom CSS per feed', false, true],
  ['Import / export config', false, true],
  ['Gutenberg block', true, true],
]

const faqs = [
  { q: 'Is Pro a subscription?', a: 'No. It is a one-time low-price purchase that bundles the Lite plugin too. That price includes updates for this version track.' },
  { q: 'Does Lite gather analytics or send data anywhere?', a: 'No. Neither plugin adds analytics, cookies, or calls to any SimpleTube server. They fetch YouTube public RSS (and call the YouTube Data API only if you supply your own key) directly from your server.' },
  { q: 'Do I need a YouTube Data API key?', a: 'Not for the basics. Channel and playlist feeds use public RSS with no key. A key is only required for API-powered features in Pro, such as Shorts feeds.' },
  { q: 'Will it slow my site down?', a: 'No. Feeds are cached with WordPress transients, so the heavy YouTube network call happens once per cache window, not on every page view.' },
  { q: 'Can I style the output to match my theme?', a: 'Yes. In Pro, each feed can carry its own custom CSS, and all markup uses clear, classed hooks that are easy to target.' },
  { q: 'How do I get the Pro files?', a: 'Once checkout is live you receive the Pro ZIP and license key by email. In the meantime, email me and I will take care of it directly.' },
]

const price = {
  checkoutUrl: simpletube.checkoutUrl,
  email: `mailto:${simpletube.contactEmail}?subject=SimpleTube%20Feed%20Pro%20order`,
  liteZip: simpletube.liteZipUrl,
  source: simpletube.sourceUrl,
}

function BuyLink({ children, className }) {
  const href = price.checkoutUrl ? price.checkoutUrl : price.email
  return (
    <a href={href} className={className} target={price.checkoutUrl ? '_blank' : undefined} rel={price.checkoutUrl ? 'noopener' : undefined}>
      {children}
    </a>
  )
}

export default function SimpleTube() {
  const [open, setOpen] = useState(0)

  return (
    <div>
      {/* Hero */}
      <section className="px-5 pb-16 pt-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
            WordPress Plugin
          </span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-6xl">
            Put your YouTube feed on WordPress. Fast, secure, no tracking.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            SimpleTube Feed fetches your YouTube channel, playlist, or Shorts from the official feed, caches it, and
            renders clean cards in grid, list, carousel, or featured layouts. No analytics, no external calls to our
            servers, no bloat. Free Lite, and a one-time low-price Pro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BuyLink className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong">
              Get Pro
            </BuyLink>
            <a href={price.liteZip} className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent">
              Download free Lite &darr;
            </a>
            <a href="#/simpletube-feed/docs" className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent">
              View Docs
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-muted">PHP 7.4+ &middot; WordPress 5.8+ &middot; light &lt; 40 KB &middot; no data leaves your server</p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl">Everything you need</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-card p-6">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-3 font-serif text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl">Lite vs Pro</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="bg-card p-4 font-mono text-xs uppercase tracking-wider text-muted">Feature</th>
                  <th className="bg-card p-4 font-mono text-xs uppercase tracking-wider text-muted">Lite (free)</th>
                  <th className="bg-card p-4 font-mono text-xs uppercase tracking-wider text-muted">Pro ($7 one-time)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {compare.map(([label, lite, pro]) => (
                  <tr key={label}>
                    <td className="p-4">{label}</td>
                    <td className="p-4 text-accent">{lite ? '✓' : '-'}</td>
                    <td className="p-4 text-accent">{pro ? '✓' : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl">Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-line bg-card p-7">
              <h3 className="font-serif text-xl">Lite</h3>
              <div className="mt-2 font-serif text-4xl">Free</div>
              <p className="mt-1 font-mono text-xs text-muted">GPL-2.0 &middot; self-hosted &middot; no license key</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">✓</span>1 channel feed, grid or list</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Public RSS, no API key</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Shortcode + Gutenberg block</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Settings page + cache control</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Free updates, forever</li>
              </ul>
              <a href={price.liteZip} className="mt-6 inline-flex w-max items-center rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent">
                Download ZIP &darr;
              </a>
              <p className="mt-3 text-xs text-muted">Free and open source. <a href={price.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">View source on GitHub</a></p>
            </div>

            <div className="relative flex flex-col rounded-2xl border border-accent bg-card p-7">
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-ink">Best value</span>
              <h3 className="font-serif text-xl">Pro</h3>
              <div className="mt-2 font-serif text-4xl">$7</div>
              <p className="mt-1 font-mono text-xs text-muted">One-time &middot; bundles Lite &middot; includes future updates</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">✓</span>Everything in Lite</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Unlimited saved feeds</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Playlist + Shorts feeds</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Carousel and featured layouts</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Metadata controls, custom CSS, import/export</li>
              </ul>
              <BuyLink className="mt-6 inline-flex w-max items-center rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong">
                Get Pro, $7
              </BuyLink>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            The Pro ZIP includes both the Lite and Pro plugins so it installs and works in one go. Free Lite is a genuinely
            useful plugin on its own, with no upsell wall.
          </p>
        </div>
      </section>

      {/* Checkout note */}
      <section className="border-t border-line px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl">How to order</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            {price.checkoutUrl
              ? 'Checkout is live. The button takes you to a secure checkout where you receive the Pro ZIP and license key.'
              : 'I am verifying a payment provider that supports accounts in Bangladesh. Until it is live, order by email and I will send your Pro ZIP and license key directly.'}
          </p>
          <BuyLink className="mt-5 inline-flex items-center rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong">
            {price.checkoutUrl ? 'Go to checkout' : 'Contact me to order'}
          </BuyLink>
        </div>
      </section>

      {/* Quick start */}
      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl">Quick start</h2>
          <p className="mt-3 text-muted">Install the plugin, add a channel ID or saved feed, and drop the block or shortcode into a post.</p>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-serif text-lg">1. Install</h3>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-[#17130f] p-5 font-mono text-sm text-[#f2e8dc]"><span className="text-[#7a6f62]"># Upload this folder to wp-content/plugins, then activate.</span>{'\n'}wp-content/plugins/simpletube-feed/</pre>
            </div>
            <div>
              <h3 className="font-serif text-lg">2. Get your channel ID</h3>
              <p className="mt-2 text-muted">Your channel ID is a 24-character string like <code className="rounded border border-line bg-card px-1.5 py-0.5 font-mono text-xs">UCX_your_channel_ID</code> (find it under "About" on your channel).</p>
            </div>
            <div>
              <h3 className="font-serif text-lg">3. Add the shortcode</h3>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-[#17130f] p-5 font-mono text-sm text-[#f2e8dc]"><span className="text-[#7a6f62]"># Lite, one channel feed</span>{'\n'}[simpletube_feed channel="UCX_your_channel_ID" limit="6"]{'\n\n'}<span className="text-[#7a6f62]"># Pro, a saved feed</span>{'\n'}[simpletube_feed_pro feed="my-videos"]</pre>
              <p className="mt-3 text-muted">Or use the SimpleTube block in the Gutenberg editor, no code needed. Full instructions in the <a href="#/simpletube-feed/docs" className="underline underline-offset-4 hover:text-accent">docs</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl">FAQ</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-line bg-card">
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between p-5 text-left font-semibold">
                  {f.q}
                  <span className="text-accent">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && <p className="px-5 pb-5 text-sm text-muted">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
