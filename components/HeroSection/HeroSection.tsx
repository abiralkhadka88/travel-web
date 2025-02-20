// "use client";

// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import Image from "next/image";

// // Dummy trip data
// const tripData = [
//   {
//     id: 1,
//     name: "Everest Base Camp Trek",
//     duration: "14 Days",
//     difficulty: "Moderate",
//     price: "$1600",
//   },
//   {
//     id: 2,
//     name: "Annapurna Circuit",
//     duration: "21 Days",
//     difficulty: "Challenging",
//     price: "$1800",
//   },
//   {
//     id: 3,
//     name: "Langtang Valley Trek",
//     duration: "10 Days",
//     difficulty: "Easy",
//     price: "$1200",
//   },
//   {
//     id: 4,
//     name: "Manaslu Circuit Trek",
//     duration: "16 Days",
//     difficulty: "Difficult",
//     price: "$2000",
//   },
//   {
//     id: 5,
//     name: "Gokyo Lakes Trek",
//     duration: "12 Days",
//     difficulty: "Moderate",
//     price: "$1400",
//   },
// ];

// const HeroSection = () => {
//   const [open, setOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");

//   return (
//     // <div className="relative w-full h-[600px] ">
//     <div className="relative w-full md:h-[600px] ">
//       {/* Hero Background */}
//       {/* <div className="absolute inset-0 bg-gradient-to-r from-sky-500/90 to-blue-600/90">
//         <div className="absolute inset-0 bg-black/40" />
//       </div> */}
//       <div className="absolute inset-0 bg-gradient-to-r from-sky-500/90 to-blue-600/90">
//         <Image
//           src="https://images.pexels.com/photos/9150857/pexels-photo-9150857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           alt="sdf"
//           width={1260}
//           height={600}
//           layout="responsive"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
//           Discover Your Next Adventure
//         </h1>
//         <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
//           Explore the world&apos;s most breathtaking destinations and find your
//           perfect trek
//         </p>

//         {/* Search Section */}
//         <div className="w-full max-w-2xl">
//           <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   placeholder="Search for treks..."
//                   className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 />
//                 <Search
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//               </div>
//             </PopoverTrigger>
//             <PopoverContent
//               className="w-[calc(100vw-2rem)] max-w-2xl p-0 bg-white"
//               align="start"
//             >
//               <Command>
//                 <CommandList>
//                   <CommandEmpty>No trips found.</CommandEmpty>
//                   <CommandGroup heading="Suggested Trips">
//                     {tripData
//                       .filter((trip) =>
//                         trip.name
//                           .toLowerCase()
//                           .includes(searchValue.toLowerCase())
//                       )
//                       .map((trip) => (
//                         <CommandItem
//                           key={trip.id}
//                           className="flex items-center justify-between py-3 px-4 hover:bg-gray-100 cursor-pointer"
//                         >
//                           <div>
//                             <div className="font-medium">{trip.name}</div>
//                             <div className="text-sm text-gray-500">
//                               {trip.duration} • {trip.difficulty}
//                             </div>
//                           </div>
//                           <div className="text-sky-600 font-semibold">
//                             {trip.price}
//                           </div>
//                         </CommandItem>
//                       ))}
//                   </CommandGroup>
//                 </CommandList>
//               </Command>
//             </PopoverContent>
//           </Popover>
//         </div>

//         {/* Stats */}
//         <div className="flex gap-8 mt-12 text-center">
//           <div>
//             <div className="text-3xl font-bold">50+</div>
//             <div className="text-sm">Destinations</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold">1000+</div>
//             <div className="text-sm">Happy Trekkers</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold">100%</div>
//             <div className="text-sm">Success Rate</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Dummy trip data remains the same
const tripData = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    duration: "14 Days",
    difficulty: "Moderate",
    price: "$1600",
  },
  {
    id: 2,
    name: "Annapurna Circuit",
    duration: "21 Days",
    difficulty: "Challenging",
    price: "$1800",
  },
  {
    id: 3,
    name: "Langtang Valley Trek",
    duration: "10 Days",
    difficulty: "Easy",
    price: "$1200",
  },
  {
    id: 4,
    name: "Manaslu Circuit Trek",
    duration: "16 Days",
    difficulty: "Difficult",
    price: "$2000",
  },
  {
    id: 5,
    name: "Gokyo Lakes Trek",
    duration: "12 Days",
    difficulty: "Moderate",
    price: "$1400",
  },
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative w-full h-[600px]">
      {/* Hero Background with fixed height */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/90 to-blue-600/90">
        <Image
          src="https://images.pexels.com/photos/9150857/pexels-photo-9150857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          // src="https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero background"
          fill
          sizes="100%"
          className="object-cover h-full"
        />
        {/* <div className="absolute inset-0 bg-black/40" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/20 to-[#F59E0B]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
          Explore the world&apos;s most breathtaking destinations and find your
          perfect trek
        </p>

        {/* Search Section */}
        <div className="w-full max-w-2xl">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for treks..."
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="w-[calc(100vw-2rem)] max-w-2xl p-0 bg-white"
              align="start"
            >
              <Command>
                <CommandList>
                  <CommandEmpty>No trips found.</CommandEmpty>
                  <CommandGroup heading="Suggested Trips">
                    {tripData
                      .filter((trip) =>
                        trip.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      )
                      .map((trip) => (
                        <CommandItem
                          key={trip.id}
                          className="flex items-center justify-between py-3 px-4 hover:bg-gray-100 cursor-pointer"
                        >
                          <div>
                            <div className="font-medium">{trip.name}</div>
                            <div className="text-sm text-gray-500">
                              {trip.duration} • {trip.difficulty}
                            </div>
                          </div>
                          <div className="text-sky-600 font-semibold">
                            {trip.price}
                          </div>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">Destinations</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm">Happy Trekkers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
