import PageHeader from "../components/PageHeader";
import News from "../components/News";
import CTA from "../components/CTA";

export default function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="News & updates" title="What's new on Neary" text="Partnerships, milestones and new features, as they happen." />
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <News />
        </div>
      </section>
      <CTA />
    </>
  );
}
