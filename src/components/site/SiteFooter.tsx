import { Link } from "@tanstack/react-router";
import logo from "@/assets/gateway-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-background">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Gateway to Literacy logo" loading="lazy" width={48} height={48} className="h-11 w-11 object-contain" />
            <span className="font-display text-lg font-bold">Gateway to Literacy</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-background/70">
            A student-led nonprofit bridging educational equity for elementary students across Wake County through
            early literacy, health, and financial education.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="h-1.5 w-16 rounded-full bg-bbb" />
            <span className="h-1.5 w-16 rounded-full bg-health" />
            <span className="h-1.5 w-16 rounded-full bg-finance" />
          </div>
        </div>
        <div>
          <h4 className="eyebrow text-background/60">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><Link to="/programs/bright-beginnings-bundles" className="hover:text-background">Bright Beginnings Bundles</Link></li>
            <li><Link to="/programs/health-literacy" className="hover:text-background">Health Literacy</Link></li>
            <li><Link to="/programs/financial-literacy" className="hover:text-background">Financial Literacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow text-background/60">Organization</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><Link to="/about" className="hover:text-background">About Us</Link></li>
            <li><Link to="/partner-schools" className="hover:text-background">Partner Schools</Link></li>
            <li><Link to="/impact" className="hover:text-background">Impact</Link></li>
            <li><Link to="/donate" className="hover:text-background">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-background">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gateway to Literacy. All rights reserved.</p>
          <p>Donations processed fee-free through Zeffy.</p>
        </div>
      </div>
    </footer>
  );
}
