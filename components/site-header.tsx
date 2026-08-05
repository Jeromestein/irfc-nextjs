"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Phone } from "./icons";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Fertility", href: "/fertility" },
  { label: "Egg Freezing & Donation", href: "/egg-freezing-donation" },
  { label: "More Services", href: "/more-services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <a href="tel:+18888884732" className="utility-phone">
            <Phone width={14} height={14} />
            <span>(888) 888-IRFC</span>
          </a>
          <div className="utility-links">
            <Link href="/patient-portal">Patient Portal</Link>
            <Link href="/resources">Patient Resources</Link>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="IRFC home">
            <Image src="/images/irfc-logo-header.svg" alt="IRFC" width={250} height={60} priority />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/schedule-appointment" className="button button-primary nav-cta">
            <Calendar width={18} height={18} />
            Schedule Appointment
          </Link>

          <button
            className={`menu-button ${open ? "is-open" : ""}`}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-actions">
          <Link href="/schedule-appointment" className="button button-gold" onClick={() => setOpen(false)}>
            Schedule Appointment
          </Link>
          <a href="tel:+18888884732" className="mobile-call">
            <Phone width={18} height={18} /> Call IRFC
          </a>
        </div>
      </div>
    </header>
  );
}
