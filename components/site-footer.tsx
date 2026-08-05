import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "./icons";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["About IRFC", "/about"],
      ["Meet Our Doctors", "/about#care-team"],
      ["Locations", "/about#locations"],
      ["Patient Stories", "/resources"],
    ],
  },
  {
    title: "Care",
    links: [
      ["Fertility Treatments", "/fertility"],
      ["Egg Freezing", "/egg-freezing-donation"],
      ["Donor & Surrogacy", "/more-services"],
      ["LGBTQ+ Family Building", "/more-services"],
    ],
  },
  {
    title: "Patients",
    links: [
      ["Schedule Appointment", "/schedule-appointment"],
      ["Patient Portal", "/patient-portal"],
      ["Costs & Insurance", "/resources"],
      ["Contact", "/contact"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image src="/images/irfc-logo-horizontal.svg" alt="IRFC" width={320} height={66} />
          <p>
            Modern fertility care, grounded in science and centered on your life.
          </p>
          <a className="footer-phone" href="tel:+18888884732">
            <Phone width={18} height={18} /> (888) 888-IRFC
          </a>
        </div>
        <div className="footer-links-grid">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 IRFC. All rights reserved.</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
        <a href="#top" className="back-to-top">
          Back to top <ArrowUpRight width={16} height={16} />
        </a>
      </div>
      <div className="container medical-note">
        <p>
          Website content is for general educational purposes and is not a substitute for medical advice,
          diagnosis, or treatment from a licensed healthcare professional.
        </p>
      </div>
    </footer>
  );
}
