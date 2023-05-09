import React from "react";

import SectionImage from "../UI/SectionImage";
import Section from "../UI/Section";

import heroSm from "../../assets/images/hero-sm.png";
import heroMd from "../../assets/images/hero-md.png";
import heroLg from "../../assets/images/hero-lg.png";

import {
  StyledCTAContainer,
  StyledHeadingContainer,
  StyledSectionTextContainer,
  StyledButton,
} from "./elements";

import { StyledSectionHeading } from "./../Typography/Тypography";

import SectionDescription from "../UI/SectionDescription";

const MainSection = () => {
  return (
    <Section
      className="p-6 xl:flex-row xl:justify-between"
      grayBg={true}
      id="main"
    >
      <StyledSectionTextContainer>
        <StyledHeadingContainer>
          <StyledSectionHeading className="font-inter font-semibold text-3xl text-center sm:text-4xl md:text-5xl xl:text-start">
            <span className="text-gold">Stake with Eleon</span> and earn money
            with a high interest
          </StyledSectionHeading>
        </StyledHeadingContainer>

        <SectionDescription
          className="font-inter font-normal text-base lg:text-xl"
          descriptionText="Staking gives you the power to earn rewards on your cash and crypto holdings"
        />

        <StyledCTAContainer>
          <StyledButton
            className="font-inter font-medium bg-test rounded-md px-5 py-3 w-32 sm:w-1/3 inline-block text-center"
            buttonText="Try Staking"
            href="https://eleon.io/stake"
          ></StyledButton>
        </StyledCTAContainer>
      </StyledSectionTextContainer>

      <SectionImage
        sources={`${heroSm} 244w, ${heroMd} 413w, ${heroLg} 583w`}
        sizes={`(max-width: 768px) 244px, (max-width: 1280px) 413px, 583px`}
        defaultImg={heroMd}
        imgAlt="Hero Image"
      />
    </Section>
  );
};

export default MainSection;
