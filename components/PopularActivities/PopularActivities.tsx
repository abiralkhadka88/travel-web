"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface Trek {
  id: number;
  title: string;
  price: string;
  duration: string;
  image: string;
  slug: string;
}

const treks = [
  {
    id: 1,
    title: "Humla Saipal Limi Valley Trek",
    price: "US $ 4500",
    duration: "20 Days",
    image:
      "https://images.pexels.com/photos/20046906/pexels-photo-20046906/free-photo-of-lake-and-mountains-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "majestic-bhutan-tour",
  },
  {
    id: 2,
    title: "Annapurna Base Camp Trek",
    price: "US $ 1200",
    duration: "12 Days",
    image:
      "https://images.pexels.com/photos/14273399/pexels-photo-14273399.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "annapurna-base-camp",
  },
  {
    id: 3,
    title: "Weekend Eco Hike to Chisapani",
    price: "US $ 25",
    duration: "Day Trip",
    image:
      "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "chisapani-hike",
  },
  {
    id: 4,
    title: "Everest High Pass: An Outstanding Journey",
    price: "US $ 2800",
    duration: "19 Days",
    image:
      "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "everest-high-pass",
  },
  {
    id: 5,
    title: "Gokyo Lakes Trek",
    price: "US $ 2200",
    duration: "16 Days",
    image:
      "https://images.pexels.com/photos/18331843/pexels-photo-18331843/free-photo-of-a-person-climbing-up-a-mountain-with-a-backpack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "gokyo-lakes",
  },
  {
    id: 6,
    title: "Day Trip Heli Tours to Everest",
    price: "US $ 1515",
    duration: "1 Day",
    image:
      "https://images.pexels.com/photos/20839121/pexels-photo-20839121/free-photo-of-mount-everest-in-himalayas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "everest-heli-tour",
  },
];

const TrekCard = ({ trek }: { trek: Trek }) => {
  return (
    <Link href={`/${trek.slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-warm-md hover:shadow-warm-xl transition-all duration-300">
        <div className="relative aspect-[4/3] h-80 w-full">
          <Image
            src={trek.image}
            alt={trek.title}
            fill
            sizes="100%"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-content">
            {trek.duration}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4 text-white">
          <p className="text-primary font-bold mb-2">{trek.price}</p>
          <h3 className="text-lg font-semibold leading-tight">{trek.title}</h3>
        </div>
      </div>
    </Link>
  );
};

const TrekGrid = () => {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 xl:px-24 ">
      <h2 className="text-3xl font-bold text-content mb-8">Popular Treks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} />
        ))}
      </div>
      <Button className="mt-8 px-8 py-6 bg-primary-dark hover:bg-primary text-white font-semibold rounded-lg shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-0.5 ">
        See More...
      </Button>
    </div>
  );
};

export default TrekGrid;
