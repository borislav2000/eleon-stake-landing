import React from "react";
import BenefitsList from "./BenefitsList";
import SectionHeading from "../UI/SectionHeading";
import Section from "../UI/Section";

const BenefitsSection = () => {
  return (
    <Section
      className="px-6  mt-16 md:mt-[100px] xl:mt-36 xl:items-stretch "
      id="benefits"
    >
      <div className="flex flex-col gap-[26px] md:gap-16" id="benefits-section">
        <SectionHeading>
          <span className="text-gold">Benefits</span> of staking
        </SectionHeading>
        <BenefitsList />
      </div>
    </Section>
  );
};

export default BenefitsSection;
