import React from "react";
import RewardsItem from "./RewardsItem";

const RewardsList = () => {
  return (
    <div className="flex flex-col gap-8 justify-between text-center md:flex-row xl:text-left">
      <RewardsItem reward="13%" description="p.a on cryptos" />
      <RewardsItem reward="6%" description="p.a on stablecoins" />
      <RewardsItem reward="20+" description="cryptocurrencies" />
    </div>
  );
};

export default RewardsList;
