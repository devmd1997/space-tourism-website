"use client";
import PaginationSelector from "@/components/common/pagination";
import ResponsiveImage from "@/components/common/responsiveImage";
import { TextContainer } from "@/components/common/textContainer";
import ContainerLayout from "@/components/layout/container";
import { Crew, CrewMetadata } from "@/lib/models/crewModel";
import { useState } from "react";

export default function CrewPage() {
  const crewDetails = Object.values(Crew);
  const [selectedCrewMember, setSelectedCrewMember] = useState(crewDetails[0]);
  const pages = crewDetails.map((_, index) => index);

  const handleSelectedPage = (index: number) => {
    setSelectedCrewMember(crewDetails[index]);
  };

  const paginationSelector = (
    <PaginationSelector
      pages={pages}
      onSelected={handleSelectedPage}
      variant="small"
    />
  );

  return (
    <ContainerLayout title="Meet your crew" index={2}>
      <div className="crew-content-container">
        <CrewDetails
          crewDetail={selectedCrewMember}
          paginationSelector={paginationSelector}
        />
        <div className="display-image-container h-[350px] md:h-[463px] lg:h-full">
          <ResponsiveImage
            image={selectedCrewMember.image}
            alt={selectedCrewMember.name}
            responsiveSize="h-[340px] md:h-[540px] lg:h-[676px]"
            mask="mask-alph mask-b-from-white mask-b-from-33% mask-b-to-transparent"
          />
        </div>
      </div>
    </ContainerLayout>
  );
}

interface CrewDetailProps {
  crewDetail: CrewMetadata;
  paginationSelector: React.ReactNode;
}

const CrewDetails = (props: CrewDetailProps) => {
  const { crewDetail, paginationSelector } = props;
  return (
    <div className="crew-explination-container lg:py-0 lg:h-[676px]">
      <TextContainer
        title={crewDetail.name}
        header={crewDetail.role}
        body={crewDetail.bio}
        variant="explination"
        className="lg:h-full lg:justify-center"
      />
      {paginationSelector}
    </div>
  );
};
