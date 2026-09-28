import PageHeader from "../components/PageHeader";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Frequently asked" title="Questions people ask us" />
      <FAQ showHeading={false} />
      <CTA />
    </>
  );
}
