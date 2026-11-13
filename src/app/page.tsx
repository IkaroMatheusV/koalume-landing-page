import { getLandingContent } from "./_data-access/get-landing-content";
import { SiteHeader } from "./_components/site-header";
import { Hero } from "./_components/hero";
import { TrustBar } from "./_components/trust-bar";
import { CoursesSection } from "./_components/courses-section";
import { HowItWorks } from "./_components/how-it-works";
import { Benefits } from "./_components/benefits";
import { Testimonials } from "./_components/testimonials";
import { Pricing } from "./_components/pricing";
import { Faq } from "./_components/faq";
import { FinalCta } from "./_components/final-cta";
import { SiteFooter } from "./_components/site-footer";

export default async function Home() {
  const { categories, courses, testimonials, faqs, plans } = await getLandingContent();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CoursesSection courses={courses} categories={categories} />
        <HowItWorks />
        <Benefits />
        <Testimonials testimonials={testimonials} />
        <Pricing plans={plans} />
        <Faq faqs={faqs} />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
