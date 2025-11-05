import ExploreButton from "@/components/common/exploreButton";
import { TextContainer } from "@/components/common/textContainer";

export default function Home() {
  return (
    <section className="home-section">
      <div className="hero-container">
        <TextContainer
          title="Space"
          header="So, you want to travel to"
          body="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
          variant="display"
          className="max-w-[512px] lg:max-w-[540px]"
        />
        <div className="home-explore-button-container">
          <ExploreButton />
        </div>
      </div>
    </section>
  );
}
