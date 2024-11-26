import Link from "next/link"
import { Truck, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Truck className="h-6 w-6" />
              <span className="font-bold">FreightConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting businesses with reliable shipping solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shippers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shippers/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/shippers/quote" className="text-sm text-muted-foreground hover:text-foreground">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/shippers/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Carriers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/carriers/join" className="text-sm text-muted-foreground hover:text-foreground">
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link href="/carriers/resources" className="text-sm text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/carriers/success-stories" className="text-sm text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-muted-foreground hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FreightConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer