import React from "react";
import BenefitsItem from "./BenefitsItem";

import cashbagIcon from "../../assets/icons/cashbag.png";
import handShakeIcon from "../../assets/icons/handshake.png";
import miningIcon from "../../assets/icons/mining.png";

const BenefitsList = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 xl:flex-row items-center justify-between">
      <BenefitsItem
        benefitImg={cashbagIcon}
        benefitAlt="Cashbag Icon"
        description="Earning interest on your cryptocurrency"
      />
      <BenefitsItem
        benefitImg={handShakeIcon}
        benefitAlt="Handshake Icon"
        description="Low barrier of entry (no hardware, expensive tools or technical experience needed)"
      />
      <BenefitsItem
        benefitImg={miningIcon}
        benefitAlt="Mining Icon"
        description="Requires very low energy (much lower than mining crypto)"
      />
    </div>
  );
};

export default BenefitsList;
