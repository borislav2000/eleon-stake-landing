import React from "react";
import SectionHeading from "../UI/SectionHeading";
import StepsList from "./StepsList";
import Section from "../UI/Section";

const StepsSection = () => {
  return (
    <Section
      className="px-6 mt-16 md:mt-[100px] xl:mt-36 xl:items-stretch"
      id="steps"
    >
      <div className="flex flex-col gap-[26px] md:gap-16">
        <SectionHeading>
          Stake crypto in <span className="text-gold">3 steps</span>
        </SectionHeading>
        <StepsList />
      </div>
    </Section>
  );
};

export default StepsSection;
