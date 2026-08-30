const tools = [
  {
    name: 'SimpleTube Feed',
    category: 'WordPress Tools',
    status: 'free & pro',
    problem: 'Displaying a YouTube feed on WordPress should not require a heavy plugin, an expensive subscription, or a fragile scraper.',
    features: ['Official public RSS, no API key needed', 'Grid, list, carousel and featured layouts', 'Shortcode + Gutenberg block', 'Smart caching, no tracking, no ads', 'Multiple feeds, playlists and Shorts in Pro'],
    cta: { label: 'View product', href: '#/simpletube-feed' },
  },
]

const categories = ['WordPress Tools', 'Developer Tools', 'Security Tools']

export default function Tools() {
  return (
    <div>
      <section className="px-5 pb-16 pt-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">Tools and Products</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Small tools. Real problems. No bloat.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Developer, security, and WordPress tooling I build and maintain. Every product exists because the existing
            options were heavy, expensive, subscription-locked, or over-engineered.
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const items = tools.filter((t) => t.category === cat)
        return (
          <section key={cat} className="border-t border-line px-5 py-12 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-2xl">{cat}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.length === 0 && (
                  <div className="col-span-full rounded-2xl border border-dashed border-line p-10 text-center text-muted">
                    In progress. New tools land here as they are built.
                  </div>
                )}
                {items.map((t) => (
                  <article key={t.name} className="flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/60">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                        {t.category}
                      </span>
                      <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                        {t.status}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl">{t.name}</h3>
                    <p className="mt-2 text-sm text-muted">{t.problem}</p>
                    <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="text-accent">&check;</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={t.cta.href} className="mt-6 inline-flex w-max items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong">
                      {t.cta.label} &rarr;
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
