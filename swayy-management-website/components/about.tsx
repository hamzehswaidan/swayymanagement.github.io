const stats = [
  { value: "150+", label: "Creators Represented" },
  { value: "500M+", label: "Combined Reach" },
  { value: "300+", label: "Brand Partnerships" },
  { value: "12", label: "Markets Worldwide" },
]

export function About() {
  return (
    <section id="about" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-sm tracking-[0.35em] text-primary">ABOUT SWAYY</p>
            <h2 className="font-heading text-4xl font-light leading-tight text-foreground text-balance sm:text-5xl">
              A management partner built for the modern creator.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              We believe influence is an art form. At Swayy, we pair refined strategy with genuine relationships
              to elevate creators into enduring brands. From negotiation to narrative, we manage every detail so
              our talent can focus on what they do best.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
              Our boutique approach means selective representation, white-glove service, and partnerships that
              are crafted to last &mdash; never transactional.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-10 text-center">
              <p className="font-heading text-4xl font-light text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-3 text-sm tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
