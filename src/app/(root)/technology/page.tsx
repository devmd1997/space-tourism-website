"use client";
import PaginationSelector from "@/components/common/pagination";
import ResponsiveImage from "@/components/common/responsiveImage";
import { TextContainer } from "@/components/common/textContainer";
import ContainerLayout from "@/components/layout/container";
import { useScreenSizeQuery } from "@/lib/features/useScreenSizeQuery";
import { technologies, TechnologyMetadata } from "@/lib/models/technologyModel";
import React, { useEffect, useState } from "react";

export default function Technology() {
  const technologyDetails = Object.values(technologies);
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologyDetails[0]
  );
  const pages = technologyDetails.map((_, index) => index);

  const handleSelectedPage = (index: number) => {
    setSelectedTechnology(technologyDetails[index]);
  };

  const paginationSelector = (
    <PaginationSelector
      pages={pages}
      onSelected={handleSelectedPage}
      variant="large"
    />
  );

  return (
    <ContainerLayout title="Space Launch 101" index={3}>
      <TechnologyDetailsContent
        technologyDetail={selectedTechnology}
        paginationSelector={paginationSelector}
      />
    </ContainerLayout>
  );
}

interface TechnologyDetailsContentProps {
  technologyDetail: TechnologyMetadata;
  paginationSelector: React.ReactNode;
}

const TechnologyDetailsContent = (props: TechnologyDetailsContentProps) => {
  const currentScreen = useScreenSizeQuery();
  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    if (currentScreen === "desktop") {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }, [currentScreen]);
  return (
    <div className="technology-content-layout">
      <div className="image-wrapper w-full h-[322px] md:h-[421px] lg:h-[734px]">
        <div className="technology-image-container">
          <ResponsiveImage
            image={`${props.technologyDetail.image}-${
              isPortrait ? "portrait" : "landscape"
            }.jpg`}
            alt="launch vehicle"
            responsiveSize="h-[258px] md:h-[356px] lg:h-[600px]"
            objectfit="cover"
          />
        </div>
      </div>
      <div className="technology-details-container">
        {props.paginationSelector}
        <TextContainer
          header="The Terminology..."
          title={props.technologyDetail.name}
          body={props.technologyDetail.description}
          variant="explination"
          maxWidth={512}
        />
      </div>
    </div>
  );
};
