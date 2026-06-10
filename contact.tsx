"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Globe, Phone } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-sm tracking-[0.35em] text-primary">GET IN TOUCH</p>
            <h2 className="font-heading text-4xl font-light leading-tight text-foreground text-balance sm:text-5xl">
              Let&apos;s create something worth following.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty">
              Whether you&apos;re a creator seeking representation or a brand looking for the perfect partnership,
              we&apos;d love to hear from you.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Mail className="size-4" />
                </span>
                <span className="text-muted-foreground">info@swayymanagement.com</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Globe className="size-4" />
                </span>
                <span className="text-muted-foreground">swayymanagement.com</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Phone className="size-4" />
                </span>
                <span className="text-muted-foreground">832-228-8254</span>
              </li>
            </ul>

            <div className="mt-10 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex size-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex size-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href="mailto:info@swayymanagement.com"
                aria-label="Email"
                className="inline-flex size-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <h3 className="font-heading text-3xl font-light text-primary">Thank you.</h3>
                <p className="mt-3 text-muted-foreground">
                  Your message has been received. Our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" id="name" placeholder="Your name" />
                  <Field label="Email" id="email" type="email" placeholder="you@email.com" />
                </div>
                <Field label="Subject" id="subject" placeholder="How can we help?" />
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm tracking-wide text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about yourself or your brand..."
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm tracking-wide text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </div>
  )
}
