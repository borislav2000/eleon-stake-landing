import React from "react";

const BenefitsItem = (props) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-3xl p-8 gap-5 h-full rounded-[20px]">
      <div className="text-center">
        <img src={props.benefitImg} alt={props.benefitAlt} />
      </div>
      <div className="text-center">
        <p className="font-inter font-medium text-base w-60 md:w-64">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default BenefitsItem;
