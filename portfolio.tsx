import Image from "next/image"

const talent = [
  { name: "Ava Laurent", niche: "Fashion & Lifestyle", reach: "2.4M", img: "/portfolio-1.png" },
  { name: "Marcus Vey", niche: "Travel & Tech", reach: "1.8M", img: "/portfolio-2.png" },
  { name: "Noor Adani", niche: "Beauty & Wellness", reach: "3.1M", img: "/portfolio-3.png" },
  { name: "Eli Brooks", niche: "Music & Culture", reach: "1.2M", img: "/portfolio-4.png" },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm tracking-[0.35em] text-primary">OUR ROSTER</p>
            <h2 className="font-heading text-4xl font-light leading-tight text-foreground text-balance sm:text-5xl">
              A curated portfolio of exceptional creators.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm tracking-wide text-primary underline-offset-4 hover:underline"
          >
            Join the roster &rarr;
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {talent.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={t.img || "/placeholder.svg"}
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs tracking-wide text-primary">{t.reach} followers</p>
                <h3 className="mt-1 font-heading text-2xl font-normal text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.niche}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
