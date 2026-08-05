import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; text: string }>;
  cta?: string;
};

const pages: Record<string, PageContent> = {
  about: {
    eyebrow: "Why IRFC",
    title: "Two legacies. One shared promise of exceptional care.",
    intro: "IRFC brings together experienced physicians, advanced laboratory care, and a connected team dedicated to making fertility treatment clearer and more personal.",
    sections: [
      { title: "Our approach", text: "We combine evidence-led reproductive medicine with honest conversations, thoughtful coordination, and respect for every path to family." },
      { title: "Your care team", text: "Physicians, embryologists, nurses, and patient care coordinators work together around one personalized plan." },
      { title: "Locations", text: "Our Southern California network makes specialist care, monitoring, and appointment support easier to access." },
    ],
  },
  fertility: {
    eyebrow: "Fertility care",
    title: "A path forward, designed around you.",
    intro: "From initial fertility testing to IUI, IVF, genetic testing, and complex second opinions, we help you understand the possibilities and choose your next step.",
    sections: [
      { title: "Getting started", text: "Begin with your history, goals, and focused diagnostic testing so your recommendations have a clear clinical reason." },
      { title: "Treatment options", text: "Explore IVF, IUI, PGT, male fertility care, recurrent pregnancy loss support, and coordinated specialty care." },
      { title: "Your personal plan", text: "Treatment decisions consider your medical needs, timeline, family goals, and preferences—not a one-size-fits-all protocol." },
    ],
  },
  "egg-freezing-donation": {
    eyebrow: "Egg freezing & donation",
    title: "More ways to plan for the family you want.",
    intro: "Whether you are preserving your fertility or exploring donor eggs, our team helps you understand timing, testing, treatment, and what each option may involve.",
    sections: [
      { title: "Egg freezing", text: "Get a personalized assessment, a clear view of the process, and support in deciding whether now is the right time." },
      { title: "Using donor eggs", text: "Understand donor options, screening, treatment coordination, and the questions that can help guide your decision." },
      { title: "Thoughtful coordination", text: "Your physician and care team keep medical, laboratory, and logistical steps connected from start to finish." },
    ],
  },
  "more-services": {
    eyebrow: "More ways to build a family",
    title: "Inclusive care for every path to parenthood.",
    intro: "Your family-building path deserves informed, welcoming care. Explore support for surrogacy, LGBTQ+ families, single parents, male fertility, telehealth, and specialized needs.",
    sections: [
      { title: "Donor & surrogacy", text: "Coordinated clinical support for intended parents, donors, gestational carriers, and collaborating professionals." },
      { title: "LGBTQ+ family building", text: "Inclusive treatment pathways shaped around your family, health needs, genetics, and preferences." },
      { title: "Specialized care", text: "Access male fertility, reproductive surgery collaboration, telehealth, and expert second-opinion support." },
    ],
  },
  resources: {
    eyebrow: "Patient resources",
    title: "Clear information for confident decisions.",
    intro: "Find practical guidance for your first visit, treatment questions, fertility costs, insurance, common conditions, and every stage of your care journey.",
    sections: [
      { title: "Your first visit", text: "Know what to bring, what to ask, and what you can expect from your first conversation with an IRFC specialist." },
      { title: "Costs & insurance", text: "Learn which questions to ask about coverage, financing, medications, and the cost components of a treatment plan." },
      { title: "Articles & FAQs", text: "Physician-reviewed answers explain fertility topics in straightforward language without replacing personalized medical advice." },
    ],
  },
  contact: {
    eyebrow: "Contact IRFC",
    title: "Tell us what brings you here.",
    intro: "Our team can help you find the right location, connect with appointment support, and understand the next step for your situation.",
    sections: [
      { title: "Appointment support", text: "Call (888) 888-IRFC or request a consultation online. Please do not include sensitive medical information in a general website message." },
      { title: "Existing patients", text: "Use the Patient Portal for care-team messages, records, and established-patient support." },
      { title: "Locations", text: "Choose the Southern California location most convenient for your consultation and monitoring needs." },
    ],
    cta: "Request an appointment",
  },
  "schedule-appointment": {
    eyebrow: "Schedule a consultation",
    title: "Let’s find the right place to begin.",
    intro: "Share basic contact details and appointment preferences. A care coordinator will follow up to help you choose a physician and location.",
    sections: [
      { title: "1. Choose your location", text: "Select a convenient Southern California care location or ask about remote consultation availability." },
      { title: "2. Tell us how to reach you", text: "Provide your preferred phone or email and the best time for our team to respond." },
      { title: "3. Connect with your care team", text: "We will explain records, preparation, and what to expect before your first consultation." },
    ],
    cta: "Call (888) 888-IRFC",
  },
  "patient-portal": {
    eyebrow: "Existing patients",
    title: "Your patient portal is moving with you.",
    intro: "RFC and Incinta are now IRFC. Continue using your current username and password—no new registration is required.",
    sections: [
      { title: "Continue to the portal", text: "Access established-patient messages, appointments, records, and care-team information through the secure portal." },
      { title: "Need login help?", text: "Contact the patient support team if you need help with your username, password, or existing account." },
      { title: "Protect your information", text: "Do not share passwords or personal medical information through general website forms or email." },
    ],
    cta: "Continue to Patient Portal",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy",
    intro: "This prototype page is reserved for IRFC's reviewed website privacy notice.",
    sections: [{ title: "Before launch", text: "Website forms, analytics, cookies, advertising, call tracking, and patient communication practices require legal and privacy review." }],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of use",
    intro: "This prototype page is reserved for IRFC's reviewed website terms of use.",
    sections: [{ title: "Medical information", text: "Website content is educational and does not create a physician-patient relationship or replace professional medical advice." }],
  },
  accessibility: {
    eyebrow: "Accessibility",
    title: "A more accessible care experience.",
    intro: "IRFC is committed to making its digital information and services easier to access and use.",
    sections: [{ title: "Need assistance?", text: "Contact IRFC if you need information in another format or help using this website." }],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.title, description: page.intro } : {};
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main className="content-page">
        <section className="content-hero">
          <div className="content-orbit" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow light-eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <Link href={slug === "schedule-appointment" ? "tel:+18888884732" : "/schedule-appointment"} className="button button-gold button-large">
              {page.cta ?? "Schedule a consultation"} <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </section>
        <section className="section content-sections">
          <div className="container content-section-grid">
            {page.sections.map((section, index) => (
              <article key={section.title}>
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="content-next-step">
          <div className="container">
            <p>Not sure which path fits?</p>
            <h2>Start with a conversation.</h2>
            <Link href="/contact" className="text-link">Contact IRFC <ArrowRight width={18} height={18} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
