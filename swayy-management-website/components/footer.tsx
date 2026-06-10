import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-8">
        <div className="flex items-center gap-3">
          <Image src="/swayy-logo.png" alt="Swayy Media & Management" width={40} height={40} className="rounded-md" />
          <div>
            <p className="font-heading text-lg tracking-[0.25em] text-foreground">SWAYY</p>
            <p className="text-xs tracking-[0.2em] text-primary">MEDIA &amp; MANAGEMENT</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Swayy Media &amp; Management. All rights reserved.
        </p>
        <p className="text-xs tracking-[0.3em] text-muted-foreground">CONNECT &middot; COLLABORATE &middot; CREATE</p>
      </div>
    </footer>
  )
}
