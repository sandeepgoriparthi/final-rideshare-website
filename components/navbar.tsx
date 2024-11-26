"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu, Truck } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6" />
            <span className="font-bold">FreightConnect</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shippers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-3">
                      <Link
                        href="/shippers/services"
                        className="group grid h-auto w-full items-center justify-start space-y-1 rounded-md p-4 hover:bg-accent no-underline"
                      >
                        <div className="font-medium">Our Services</div>
                        <div className="text-sm text-muted-foreground">
                          Innovative shipping solutions
                        </div>
                      </Link>
                      <Link
                        href="/shippers/quote"
                        className="group grid h-auto w-full items-center justify-start space-y-1 rounded-md p-4 hover:bg-accent no-underline"
                      >
                        <div className="font-medium">Get a Quote</div>
                        <div className="text-sm text-muted-foreground">
                          Instant shipping quotes
                        </div>
                      </Link>
                      <Link
                        href="/shippers/case-studies"
                        className="group grid h-auto w-full items-center justify-start space-y-1 rounded-md p-4 hover:bg-accent no-underline"
                      >
                        <div className="font-medium">Case Studies</div>
                        <div className="text-sm text-muted-foreground">
                          Success stories from our clients
                        </div>
                      </Link>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Carriers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <nav className="grid gap-3">
                      <Link
                        href="/carriers/join"
                        className="group grid h-auto w-full items-center justify-start space-y-1 rounded-md p-4 hover:bg-accent no-underline"
                      >
                        <div className="font-medium">Join Our Network</div>
                        <div className="text-sm text-muted-foreground">
                          Partner with FreightConnect
                        </div>
                      </Link>
                      <Link
                        href="/carriers/resources"
                        className="group grid h-auto w-full items-center justify-start space-y-1 rounded-md p-4 hover:bg-accent no-underline"
                      >
                        <div className="font-medium">Carrier Resources</div>
                        <div className="text-sm text-muted-foreground">
                          Tools and guides
                        </div>
                      </Link>
                      <Link
                        href="/carriers/success-stories"
                        className="group grid h-auto w-full items-center justify-start space-y-1 rounded-md p-4 hover:bg-accent no-underline"
                      >
                        <div className="font-medium">Success Stories</div>
                        <div className="text-sm text-muted-foreground">
                          Hear from our carriers
                        </div>
                      </Link>
                    </nav>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/get-started" className="hidden md:block">
            <Button>Get Started</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link href="/shippers/services" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Shippers</Button>
                </Link>
                <Link href="/carriers/join" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Carriers</Button>
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Login</Button>
                </Link>
                <Link href="/get-started" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar