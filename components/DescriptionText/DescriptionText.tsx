import React from "react";
import { Button } from "../ui/button";

const DescriptionText = () => {
  return (
    <div className="px-8 py-4 md:px-16 md:py-6 xl:px-64 xl:py-8 justify-">
      <p className="text-lg">
        <span className="font-bold">Nepal</span>, nestled in the heart of the
        Himalayas, is a land of unparalleled beauty and rich cultural heritage.
        Renowned for its towering peaks, including the world&apos;s highest,
        <span className="font-bold">Mount Everest,</span> Nepal offers an array
        of adventures and experiences for every traveler. From the bustling
        streets of Kathmandu with its ancient temples and palaces to the
        tranquil trails of{" "}
        <span className="font-bold">Annapurna and Langtang regions</span>, there
        is something for everyone. Whether you&apos;re drawn to the thrill of
        <span className="text-blue-800 underline font-semibold">
          {" "}
          trekking in Nepal
        </span>
        , the serenity of its spiritual sites, or the warmth of its welcoming
        people, a journey to Nepal promises memories that will last a lifetime.
        With diverse{" "}
        <span className="font-semibold underline text-blue-800">
          Nepal tour packages and holiday options
        </span>
        , this enchanting country invites you to explore its natural wonders and
        cultural riches.
      </p>

      <p className="text-3xl font-bold mt-8 mb-4 text-primary tracking-tight">
        Why Choose Nepal as Your Next Destination?
      </p>

      <Button className="mt-4 px-8 py-6 bg-primary-dark hover:bg-primary text-white font-semibold rounded-lg shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-0.5">
        Read More
      </Button>
    </div>
  );
};

export default DescriptionText;
