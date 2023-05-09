import React from "react";

const StepsItem = (props) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gold rounded-lg  p-8 gap-5 h-full">
      <div className="text-center">
        <img src={props.stepImg} alt={props.stepAlt} />
      </div>
      <div className="text-center">
        <p className="font-inter font-medium text-base w-60 md:w-64">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default StepsItem;
