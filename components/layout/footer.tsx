import { Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-ink-600/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                <div className="w-3 h-3 border border-white-100 rounded-sm"></div>
              </div>
              <span className="text-xl font-space-grotesk font-bold">VCOS</span>
            </div>
            <p className="text-ink-300">AI that moves capital at the speed of insight.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-ink-300">
              <div>
                <Link href="#" className="hover:text-accent-a transition-colors">
                  Flow
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-accent-a transition-colors">
                  API
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-accent-a transition-colors">
                  Integrations
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-ink-300">
              <div>
                <Link href="#" className="hover:text-accent-a transition-colors">
                  About
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-accent-a transition-colors">
                  Careers
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-accent-a transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-ink-300 hover:text-accent-a cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-ink-300 hover:text-accent-a cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-ink-300 hover:text-accent-a cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-ink-600/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ink-300">© 2024 VCOS. All rights reserved.</p>
          <div className="flex space-x-6 text-ink-300 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent-a transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-accent-a transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-accent-a transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
