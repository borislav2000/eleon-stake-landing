import React from "react";

import Section from "../UI/Section";

import SectionImage from "../UI/SectionImage";
import SectionDescription from "../UI/SectionDescription";

import stakeImgSm from "../../assets/images/stake-sm.png";
import stakeImgMd from "../../assets/images/stake-md.png";
import stakeImgLg from "../../assets/images/stake-lg.png";
import RewardsList from "./RewardsList";

const RewardsSection = () => {
  return (
    <Section className=" px-6 mt-16 md:mt-[100px] xl:mt-36 xl:flex-row xl:justify-between">
      <div className="flex flex-col gap-5">
        <div className="text-center xl:text-start">
          <p className="font-inter font-semibold text-2xl text-center md:text-[40px] lg:text-5xl xl:text-start">
            Stake <span className="text-gold">easily</span>
          </p>
        </div>
        <SectionDescription
          className="font-inter font-normal text-base text-[#828282] lg:text-xl"
          descriptionText="With Eleon you can stake crypto and earn rewards easily"
        />
        <RewardsList />
      </div>

      <SectionImage
        sources={`${stakeImgSm} 288w, ${stakeImgMd} 430w, ${stakeImgLg} 520w`}
        sizes={`(max-width: 768px) 288px, (max-width: 1280px) 430px, 520px`}
        defaultImg={stakeImgMd}
        imgAlt="Stake Image"
      />
    </Section>
  );
};

export default RewardsSection;
