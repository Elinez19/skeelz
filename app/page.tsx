import Banner from "@/components/Banner";
import Home from "@/components/Home";
import WhoWeAreCards from "@/components/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Home />
      <WhoWeAreCards />
      <Banner
        title={`Skeelz Africa`}
        description={`Grace for Impact builds on more than 16 years of organizational experience and has a passionate and talented senior leadership team and board of directors comprised of industry leaders who are committed to long-term program excellence, in addition to transparency, accountability and efficiency.`}
      />
    </>
  );
}
