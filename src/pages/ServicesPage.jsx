import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="What you get" title="Everything you need, in one place" text="Six simple services, free to use, built around how a small business actually runs." />
      <Services showHeading={false} />
      <HowItWorks />
      <Partners />
      <CTA />
    </>
  );
}
