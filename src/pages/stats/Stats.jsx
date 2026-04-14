import React from "react";
import InteractionPieChart from "../../components/utils/pieCart/IntaractionPieChart";

const Stats = () => {
  return <section className="py-20">

    <div className="max-w-277.5 mx-auto w-full">
      <h2 className="text-5xl text-brand font-bold">Friendship Analytics</h2>
      <div className="cardConatainer p-8 bg-white rounded-lg shadow-md mt-8">
        <p>By Interaction Type</p>
        <InteractionPieChart></InteractionPieChart>
      </div>
    </div>
  </section>
  
  ;
};
export default Stats;
