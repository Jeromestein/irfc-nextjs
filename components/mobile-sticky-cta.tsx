"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "./icons";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/schedule-appointment"
      className={`mobile-sticky-cta ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Calendar width={18} height={18} /> Schedule Appointment
    </Link>
  );
}
