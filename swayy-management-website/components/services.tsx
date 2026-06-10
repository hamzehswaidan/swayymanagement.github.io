import { Users, Megaphone, LineChart, Handshake, Sparkles, Camera } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Talent Management",
    desc: "Full-service career management, from day-to-day operations to long-term brand building.",
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    desc: "We negotiate and secure premium collaborations aligned with each creator's identity.",
  },
  {
    icon: Megaphone,
    title: "Influencer Campaigns",
    desc: "End-to-end campaign strategy and execution for brands seeking authentic reach.",
  },
  {
    icon: LineChart,
    title: "Growth Strategy",
    desc: "Data-driven content and audience strategy that compounds influence over time.",
  },
  {
    icon: Camera,
    title: "Content Production",
    desc: "Editorial-grade creative direction, photography, and video for standout campaigns.",
  },
  {
    icon: Sparkles,
    title: "Brand Development",
    desc: "Turning creators into businesses through product, licensing, and brand ventures.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-sm tracking-[0.35em] text-primary">WHAT WE DO</p>
          <h2 className="font-heading text-4xl font-light leading-tight text-foreground text-balance sm:text-5xl">
            Services crafted around your ambition.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card p-8 transition-colors hover:bg-secondary/60"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-normal text-foreground">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
