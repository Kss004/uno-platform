import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/retiunologo.svg"
              alt="UNO Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <div>
              <h1 className="text-lg font-semibold tracking-tight">The UNO Platform</h1>
              <div className="text-[10px] text-muted-foreground tracking-tight">
                Universal No-Code App Orchestration
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <MainNav />
            <MobileNav />
            <div className="flex items-center gap-1">
              <ModeToggle />
              <Button asChild variant="ghost" size="sm" className="hidden md:flex">
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-background to-background/95 border-b">
          <div className="container py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  The Universal No-Code<br />Application Platform
                </h2>
                <p className="text-muted-foreground max-w-[400px]">
                  Build and deploy web and mobile applications with no coding required. Designed for enterprises and citizen developers.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Out-of-Box Mobile and Web Clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Browser-based Development Environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Auto-scaled with Data Redundancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Choose to Work in Hybrid (online - offline) mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Fully Portable, Plug n Play</span>
                  </li>
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild>
                    <Link href="/try-free">
                      Try for Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -right-2 -top-2 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  FREE TRIAL
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted/20">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/iZ7sQLA-o6A"
                    title="Introduction to The Uno Platform"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">Latest Updates</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 bg-background shadow-sm transition-all hover:shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">
                    Custom Apps Integration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connect your existing applications with our powerful backend services for seamless integration.
                  </p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/documentation/integration">
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background shadow-sm transition-all hover:shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">
                    Case Study: Agricultural Operations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    See how our platform was used to create mobile solutions for farm machinery tracking.
                  </p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/case-studies/agriculture">
                      Read Case Study <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background shadow-sm transition-all hover:shadow md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">
                    Platform Updates
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our latest release includes improved workflow automation features and enhanced security controls.
                  </p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/updates">
                      View Updates <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-y bg-muted/20 py-16">
          <div className="container">
            <div className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="max-w-3xl">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Enterprise-Ready Solution
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Create and host applications for internal users and your global customer base with our platform's out-of-box screens for Create, Search, View, and Edit operations on business data.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="/enterprise">Explore Enterprise Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="UNO Logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} The UNO Platform. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
