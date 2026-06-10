import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm tracking-[0.4em] text-primary">CONNECT &nbsp;&middot;&nbsp; COLLABORATE &nbsp;&middot;&nbsp; CREATE</p>
          <h1 className="font-heading text-5xl font-light leading-[1.05] text-foreground text-balance sm:text-6xl lg:text-7xl">
            Where talent meets <span className="italic text-primary">timeless</span> influence.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Swayy Media &amp; Management is a boutique talent and influencer agency, curating partnerships
            and building careers for the world&apos;s most compelling creators.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3 text-center text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Partner With Swayy
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-border px-8 py-3 text-center text-sm tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View Our Roster
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
