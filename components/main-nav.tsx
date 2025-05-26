"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/plugin-mart", label: "Plugin Mart" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-all hover:text-primary relative py-2",
            pathname === item.href
              ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:transition-all"
              : "text-muted-foreground hover:scale-105",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
