import Image from "next/image";
import Link from "next/link";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Heart,
  MapPin,
  MessageCircle,
  Microscope,
  Snowflake,
  Users,
} from "@/components/icons";

const journeys = [
  {
    icon: Heart,
    title: "Trying to get pregnant",
    text: "Understand testing, IUI, IVF, and the next step that fits your story.",
    href: "/fertility",
  },
  {
    icon: Snowflake,
    title: "Preserving my fertility",
    text: "Explore egg freezing with clear guidance for your future timeline.",
    href: "/egg-freezing-donation",
  },
  {
    icon: Users,
    title: "Donor or surrogate options",
    text: "Find coordinated support for donor eggs and gestational surrogacy.",
    href: "/more-services",
  },
  {
    icon: Heart,
    title: "LGBTQ+ family building",
    text: "Inclusive pathways designed around your family and your goals.",
    href: "/more-services",
  },
  {
    icon: MessageCircle,
    title: "Getting a second opinion",
    text: "Bring your questions and records for a fresh, thoughtful review.",
    href: "/contact",
  },
];

const treatmentLinks = [
  "IVF",
  "IUI",
  "Fertility Testing",
  "Genetic Testing (PGT)",
  "Male Fertility",
  "Recurrent Pregnancy Loss",
  "Egg Donation",
  "Gestational Surrogacy",
];

const process = [
  ["01", "Start with a conversation", "Tell us what brings you here and what matters most right now."],
  ["02", "Understand your fertility", "Your care team recommends focused testing and explains every result."],
  ["03", "Build your personal plan", "Together, we choose a path based on your goals, timeline, and health."],
  ["04", "Move forward with support", "Your team stays connected through treatment, questions, and next steps."],
];

export default function Home() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-art" aria-hidden="true">
            <Image
              src="/images/baby-sleeping.png"
              alt=""
              fill
              sizes="100vw"
              className="hero-photo"
              priority
            />
          </div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Fertility care in Southern California</p>
              <h1>
                Care for your fertility.
                <em> Space for your life.</em>
              </h1>
              <p className="hero-lede">
                Advanced reproductive medicine and a deeply personal care team—here to help you understand your options and move forward with confidence.
              </p>
              <div className="hero-actions">
                <Link href="/schedule-appointment" className="button button-primary button-large">
                  <Calendar width={19} height={19} /> Schedule a consultation
                </Link>
                <Link href="/fertility" className="text-link">
                  Explore fertility care <ArrowRight width={19} height={19} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section journey-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Start where you are</p>
                <h2>What brings you here?</h2>
              </div>
              <p>
                You do not need to know the name of a treatment before you reach out. Choose the path that feels closest to your situation.
              </p>
            </div>
            <div className="journey-grid">
              {journeys.map((journey, index) => {
                const Icon = journey.icon;
                return (
                  <Link href={journey.href} className="journey-card" key={journey.title}>
                    <div className="journey-card-top">
                      <span className="journey-icon"><Icon /></span>
                      <span className="card-number">0{index + 1}</span>
                    </div>
                    <h3>{journey.title}</h3>
                    <p>{journey.text}</p>
                    <ArrowUpRight className="card-arrow" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="service-stories">
          <article className="service-story fertility-story">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=85"
              alt="A physician speaking with a patient in a bright care setting"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="image-overlay" />
            <div className="service-story-content">
              <span>Fertility care</span>
              <h2>A plan shaped around you—not a protocol you have to fit.</h2>
              <Link href="/fertility" className="button button-light">
                Start your fertility journey <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </article>
          <article className="service-story freezing-story">
            <div className="freezing-visual" aria-hidden="true">
              <span className="cell cell-a" />
              <span className="cell cell-b" />
              <span className="cell cell-c" />
              <Snowflake width={46} height={46} />
            </div>
            <div className="service-story-content dark-copy">
              <span>Egg freezing</span>
              <h2>More time to decide, with expert guidance today.</h2>
              <Link href="/egg-freezing-donation" className="button button-primary">
                Preserve your fertility <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </article>
        </section>

        <section className="section science-section">
          <div className="container science-grid">
            <div className="science-media">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=88"
                alt="A scientist working with a microscope in a modern laboratory"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className="science-seal">
                <Microscope />
                <span>Precision<br />meets care</span>
              </div>
            </div>
            <div className="science-copy">
              <p className="eyebrow">Why IRFC</p>
              <h2>Proven science. Deeply personal care.</h2>
              <p className="large-copy">
                Our physicians, embryology team, and patient care coordinators work as one connected team—so your plan is clear, your questions are welcome, and every decision has a reason behind it.
              </p>
              <div className="treatment-cloud">
                {treatmentLinks.map((treatment) => (
                  <Link href="/fertility" key={treatment}>{treatment} <ArrowUpRight width={14} height={14} /></Link>
                ))}
              </div>
              <Link href="/about" className="text-link purple-link">
                Discover why patients choose IRFC <ArrowRight width={19} height={19} />
              </Link>
            </div>
          </div>
        </section>

        <section className="support-section">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Expertise you can trust</p>
              <h2>Support you can feel.</h2>
              <p>Clinical excellence matters. So does knowing who to call and what happens next.</p>
            </div>
            <div className="support-grid">
              <article>
                <span className="support-icon"><Users /></span>
                <h3>Experienced doctors</h3>
                <p>Specialists who explain the evidence, listen to your priorities, and stay involved in your care.</p>
                <Link href="/about#care-team">Meet your care team <ArrowRight width={17} height={17} /></Link>
              </article>
              <article className="support-featured">
                <span className="support-icon"><Heart /></span>
                <h3>Personalized treatment</h3>
                <p>Your testing, timeline, and treatment decisions are designed around your body and your life.</p>
                <Link href="/fertility">Explore treatment options <ArrowRight width={17} height={17} /></Link>
              </article>
              <article>
                <span className="support-icon"><MessageCircle /></span>
                <h3>Financial guidance</h3>
                <p>Clear conversations about insurance, financing, and the costs that may be part of your plan.</p>
                <Link href="/resources">Understand affording care <ArrowRight width={17} height={17} /></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <div className="process-heading">
              <div>
                <p className="eyebrow light-eyebrow">Your care journey</p>
                <h2>One clear next step at a time.</h2>
              </div>
              <Link href="/schedule-appointment" className="button button-gold">Get started <ArrowRight width={18} height={18} /></Link>
            </div>
            <div className="process-grid">
              {process.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section locations-section" id="locations">
          <div className="container locations-grid">
            <div className="locations-copy">
              <p className="eyebrow">Close to care</p>
              <h2>Fertility care across Southern California.</h2>
              <p className="large-copy">
                Connect with an IRFC care team near you. Our location pages help you find services, physicians, directions, and appointment support in one place.
              </p>
              <Link href="/about#locations" className="button button-primary">Explore locations <MapPin width={18} height={18} /></Link>
            </div>
            <div className="region-map" aria-label="Stylized map of Southern California service areas">
              <div className="map-ring ring-a" />
              <div className="map-ring ring-b" />
              <div className="map-ring ring-c" />
              <span className="map-pin pin-a"><i /> Greater Los Angeles</span>
              <span className="map-pin pin-b"><i /> South Bay</span>
              <span className="map-pin pin-c"><i /> Orange County</span>
              <span className="map-pin pin-d"><i /> Inland Empire</span>
            </div>
          </div>
        </section>

        <section className="resources-section">
          <div className="container">
            <div className="section-heading split-heading resources-heading">
              <div>
                <p className="eyebrow">Helpful, not overwhelming</p>
                <h2>Answers for the questions you are asking now.</h2>
              </div>
              <Link href="/resources" className="text-link purple-link">Visit patient resources <ArrowRight width={19} height={19} /></Link>
            </div>
            <div className="resource-grid">
              <Link href="/resources" className="resource-card resource-card-large">
                <div>
                  <span>Getting started</span>
                  <h3>What to expect at your first fertility consultation</h3>
                  <p>A calm, practical guide to preparing, asking questions, and understanding your next steps.</p>
                </div>
                <ArrowUpRight />
              </Link>
              <Link href="/resources" className="resource-card resource-card-gold">
                <div>
                  <span>Costs & insurance</span>
                  <h3>How to plan for fertility care</h3>
                </div>
                <ArrowUpRight />
              </Link>
              <Link href="/resources" className="resource-card resource-card-photo">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85"
                  alt="Fertility physician in a bright medical office"
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
                <div className="image-overlay" />
                <div>
                  <span>Ask a physician</span>
                  <h3>When is it time to seek help?</h3>
                </div>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-orbit orbit-left" aria-hidden="true" />
          <div className="final-cta-orbit orbit-right" aria-hidden="true" />
          <div className="container final-cta-inner">
            <p className="eyebrow light-eyebrow">Here when you are ready</p>
            <h2>Your next step can start with a conversation.</h2>
            <p>Connect with our team to share what brings you here and find the right place to begin.</p>
            <div>
              <Link href="/schedule-appointment" className="button button-gold button-large">Schedule a consultation <ArrowRight width={19} height={19} /></Link>
              <Link href="/contact" className="button button-outline-light button-large">Contact IRFC</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
