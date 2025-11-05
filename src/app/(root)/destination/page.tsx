"use client";
import ResponsiveImage from "@/components/common/responsiveImage";
import TabsMenu from "@/components/common/tabsMenu";
import { TextContainer } from "@/components/common/textContainer";
import ContainerLayout from "@/components/layout/container";
import { PlanetMetadata, Planets } from "@/lib/models/planetModel";
import { useState } from "react";

export default function DestinationPage() {
  const planetDetails = Planets;
  const planetNames = Object.keys(planetDetails);
  const [selectedPlanet, setSelectedPlanet] = useState(planetDetails["Moon"]);

  const handleSelectedTabItem = (tabItem: string) => {
    setSelectedPlanet(planetDetails[tabItem]);
  };

  const tabMenu = (
    <TabsMenu
      tabItems={planetNames}
      onSelectedTabItem={handleSelectedTabItem}
    />
  );

  return (
    <ContainerLayout title="Pick your destination" index={1}>
      <div className="destination-content-layout">
        <div className="display-image-container h-[202px] md:h-[384px] lg:h-full">
          <ResponsiveImage
            image={selectedPlanet.image}
            alt={selectedPlanet.name}
            responsiveSize="h-[150px] md:h-[300px] lg:h-[480px]"
          />
        </div>
        <DestinationDetails planet={selectedPlanet} tabsMenu={tabMenu} />
      </div>
    </ContainerLayout>
  );
}

interface DestinationDetailsProps {
  planet: PlanetMetadata;
  tabsMenu: React.ReactNode;
}
const DestinationDetails = (props: DestinationDetailsProps) => {
  return (
    <div className="destination-details-layout">
      {props.tabsMenu}
      <TextContainer
        title={props.planet.name}
        body={props.planet.description}
        variant="condensed"
      />
      <div className="line" />
      <div className="destination-statistics-layout">
        <div key="distance" id="distance" className="destination-statistic">
          <h2>Avg. Distance</h2>
          <h1>{props.planet.distance}</h1>
        </div>
        <div
          key="travel-time"
          id="travel-time"
          className="destination-statistic"
        >
          <h2>Est. Travel Time</h2>
          <h1>{props.planet.travelTime}</h1>
        </div>
      </div>
    </div>
  );
};
