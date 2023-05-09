import React from "react";
import StepsItem from "./StepsItem";

import firstStepImg from "../../assets/images/step-1.png";
import secondStepImg from "../../assets/images/step-2.png";
import thirdStepImg from "../../assets/images/step-3.png";

const StepsList = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 xl:flex-row items-center justify-between">
      <StepsItem
        stepImg={firstStepImg}
        stepAlt="Assets"
        description="Get staking assets"
      />
      <StepsItem
        stepImg={secondStepImg}
        stepAlt="Select an asset"
        description="Select an asset to stake"
      />
      <StepsItem
        stepImg={thirdStepImg}
        stepAlt="Earn a reward"
        description="Earn rewards"
      />
    </div>
  );
};

export default StepsList;
