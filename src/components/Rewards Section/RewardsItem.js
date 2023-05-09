import React from "react";

const RewardsItem = (props) => {
  return (
    <div className="text-center">
      <p className="font-inter text-base font-semibold">Up to</p>
      <p className="font-inter text-[28px] text-gold font-semibold">
        {props.reward}
      </p>
      <p className="font-inter text-base text-[#828282] font-semibold">
        {props.description}
      </p>
    </div>
  );
};

export default RewardsItem;
