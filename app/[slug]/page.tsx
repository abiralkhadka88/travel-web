"use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   ChevronDown,
//   ChevronUp,
//   MapPin,
//   Star,
//   Clock,
//   Users,
//   Mountain,
//   Car,
//   Home,
//   UtensilsCrossed,
// } from "lucide-react";

// // This would be replaced with data fetching in a real app
// const getTourBySlug = (slug: string) => {
//   // Example tour data based on the Bhutan tour from screenshots
//   return {
//     title: "Majestic Bhutan: A Seven Day Bhutan Tour",
//     slug: "majestic-bhutan-tour",
//     originalPrice: "US $1799",
//     discountedPrice: "US $1399",
//     discount: "400 OFF",
//     perPerson: "per person",
//     duration: "7 days",
//     difficulty: "Easy Trip",
//     destination: "Bhutan",
//     groupSize: "Min. 20 Pax",
//     maxElevation: "3120m",
//     activities: "City Tour Only",
//     vehicle: "Private Luxury Tourist Vehicles",
//     accommodation: "3 star Standard Hotels",
//     meals: "All Standard Meals throughout the trip",
//     singleSupplement: "USD 300",
//     description:
//       "A Seven-Day Majestic Bhutan Tour by Luxury Holidays Nepal Pvt. Ltd. is a journey through the heart and soul of Bhutan, a mystical kingdom nestled in the Himalayas. Over seven days, travelers will immerse themselves in the beauty and tranquility of Bhutan's monastic cities, rugged landscapes, and vibrant culture. From the iconic Tiger's Nest Monastery perched on a cliff to the lush valleys of Punakha, each day brings a new adventure. Explore ancient dzongs, meet friendly locals, and savor Bhutanese delicacies. With luxurious accommodations, expert guidance, and all-inclusive services, this tour promises an unforgettable experience of Bhutan's majestic wonders.",
//     pricing: [
//       {
//         people: "1 person",
//         price: "USD 1900 per person (With Single Supplement)",
//       },
//       { people: "2 persons", price: "USD 1399 per person" },
//       { people: "3 persons", price: "USD 1380 per person (1 Triple Room)" },
//       { people: "4 persons", price: "USD 1365 per person" },
//       {
//         people: "5 persons",
//         price: "USD 1350 per person (1 Double 1 Triple Room)",
//       },
//       { people: "6 persons", price: "USD 1335 per person" },
//       {
//         people: "7 persons",
//         price: "USD 1320 per person (2 Double 1 Triple Room)",
//       },
//       { people: "8 persons", price: "USD 1300 per person" },
//       {
//         people: "9 persons",
//         price: "USD 1285 per person (3 Double 1 Triple Room)",
//       },
//     ],
//     itinerary: [
//       {
//         day: "01",
//         title:
//           "Arrival in Paro (2,280m altitude) - After landing, enjoy a 1-hour scenic drive to Thimphu",
//         description:
//           "Upon Arrival in Paro, situated at an elevation of 2,280m, you will be greeted by the serene and untouched beauty of Bhutan. As you disembark at Paro International Airport, the only international airport in Bhutan, you'll immediately notice the traditional architecture and the surrounding pristine landscape.\n\nYour journey from Paro to the capital city, Thimphu, begins with a 1-hour scenic drive. This drive is not just a transfer, it's part of your Bhutanese adventure, offering stunning views of the Paro Valley, with its lush fields and traditional houses, against the backdrop of towering mountains. You'll wind along the banks of the Paro Chhu and Thimphu Chhu rivers, with opportunities to see local life unfold in the countryside.\n\nAs you approach Thimphu, you'll notice the seamless blend of traditional and modern architecture, indicative of Bhutan's careful balance between preserving its cultural heritage and embracing necessary modernization. The drive is comfortable, typically in a well-maintained private vehicle, ensuring you can enjoy the views and anticipation of exploring Thimphu.\n\nUpon Arrival in Thimphu, you will be taken to your accommodation, where you can relax and acclimatize to the altitude and prepare for the exciting days ahead exploring the Majestic Bhutan.",
//       },
//       {
//         day: "02",
//         title:
//           "Sightseeing tour of Thimphu - Explore the city's majestic sites at your own pace",
//         description:
//           "Spend the day exploring Thimphu's cultural landmarks and attractions with your guide.",
//       },
//       {
//         day: "03",
//         title:
//           "Drive from Thimphu to Punakha (3 hours drive, 1,200m altitude) - Traverse through the mountainous roads with stunning views",
//         description:
//           "Enjoy a scenic drive through mountain passes with breathtaking views of the Himalayas.",
//       },
//       {
//         day: "04",
//         title:
//           "Sightseeing of Punakha - Immerse yourself in the rich culture and history of the area",
//         description:
//           "Visit the magnificent Punakha Dzong and other historical sites in the region.",
//       },
//       {
//         day: "05",
//         title:
//           "Drive from Punakha to Paro (3.5 hours drive, return to 2,280m altitude) - Return through the beautiful landscapes",
//         description:
//           "Return to Paro through picturesque landscapes and small traditional villages.",
//       },
//       {
//         day: "06",
//         title:
//           "Hike to Tiger's Nest Monastery (4-5 hours hike, 3,120m altitude) and sightseeing tour of Paro - Conquer the iconic hike and explore more of Paro's treasures",
//         description:
//           "Embark on the iconic hike to Tiger's Nest Monastery, perched dramatically on a cliff.",
//       },
//       {
//         day: "07",
//         title:
//           "Departure day - Take a short drive to the Paro International Airport for your final departure",
//         description:
//           "After breakfast, transfer to Paro International Airport for your departure flight.",
//       },
//     ],
//     reviews: {
//       tripadvisor: { rating: 5.0, reviews: 528 },
//       google: { rating: 4.8, reviews: 84 },
//       facebook: { rating: 4.1, reviews: 44 },
//     },
//     similarPackages: [
//       {
//         title: "Glimpses of Bhutan Tour",
//         duration: "3 Nights 4 Days",
//         price: "$775",
//         originalPrice: "$875",
//         rating: 5.0,
//         reviewCount: 10,
//         image:
//           "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg",
//       },
//       {
//         title: "Bhutan Magical Tour",
//         duration: "4 Nights 5 Days",
//         price: "$999",
//         originalPrice: "$1199",
//         rating: 5.0,
//         reviewCount: 10,
//         image:
//           "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg",
//       },
//       {
//         title: "Golden Triangle Bhutan Tour",
//         duration: "5 Nights 6 Days",
//         price: "$1199",
//         originalPrice: "$1399",
//         rating: 5.0,
//         reviewCount: 8,
//         image:
//           "https://images.pexels.com/photos/18331843/pexels-photo-18331843/free-photo-of-a-person-climbing-up-a-mountain-with-a-backpack.jpeg",
//       },
//     ],
//   };
// };

// export default function TourPage({ params }: { params: { slug: string } }) {
//   const [tour, setTour] = useState<unknown>(null);
//   const [expandedDay, setExpandedDay] = useState<string | null>("01");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate data fetching
//     const fetchedTour = getTourBySlug(params.slug);
//     setTour(fetchedTour);
//     setLoading(false);
//   }, [params.slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   if (!tour) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Tour not found
//       </div>
//     );
//   }

//   const toggleDay = (day: string) => {
//     if (expandedDay === day) {
//       setExpandedDay(null);
//     } else {
//       setExpandedDay(day);
//     }
//   };

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <div className="relative h-96 w-full">
//         <Image
//           src="https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg"
//           alt={tour.title}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h1 className="text-4xl font-bold text-white text-center max-w-4xl px-4">
//             {tour.title}
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 flex flex-col md:flex-row gap-8">
//         {/* Left Column - Tour Details */}
//         <div className="w-full md:w-2/3">
//           {/* At a Glance */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-6">At a Glance</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="flex items-start gap-4">
//                 <MapPin className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Destination</h3>
//                   <p>{tour.destination}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Clock className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Duration</h3>
//                   <p>{tour.duration}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Star className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">
//                     Trip Difficulty
//                   </h3>
//                   <p>{tour.difficulty}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <MapPin className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Activities</h3>
//                   <p>{tour.activities}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Mountain className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">
//                     Max. Elevation
//                   </h3>
//                   <p>{tour.maxElevation}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Users className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Group Size</h3>
//                   <p>{tour.groupSize}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Car className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Vehicle</h3>
//                   <p>{tour.vehicle}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Home className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Accommodation</h3>
//                   <p>{tour.accommodation}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <UtensilsCrossed className="text-blue-600 h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-blue-700">Meals</h3>
//                   <p>{tour.meals}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <p className="font-medium">Single Supplement</p>
//             <p>{tour.singleSupplement}</p>
//           </div>

//           {/* About the Tour */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">About {tour.title}</h2>
//             <p className="text-gray-700 leading-relaxed">{tour.description}</p>

//             {/* Pricing Table */}
//             <div className="mt-6">
//               {tour.pricing.map((price: any, index: number) => (
//                 <div key={index} className="py-2 border-b text-sm">
//                   <p>
//                     {price.people}: {price.price}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Itinerary */}
//           <div className="mb-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold">Itinerary</h2>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
//                 Expand All +
//               </button>
//             </div>

//             <div className="border rounded-lg overflow-hidden">
//               {tour.itinerary.map((day: any) => (
//                 <div key={day.day} className="border-b last:border-b-0">
//                   <div
//                     className="flex items-start p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
//                     onClick={() => toggleDay(day.day)}
//                   >
//                     <div className="relative mr-4">
//                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-semibold">
//                         {day.day}
//                       </div>
//                       <div className="absolute top-10 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2"></div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-lg">{day.title}</h3>
//                     </div>
//                     <div className="ml-2">
//                       {expandedDay === day.day ? (
//                         <ChevronUp />
//                       ) : (
//                         <ChevronDown />
//                       )}
//                     </div>
//                   </div>

//                   {expandedDay === day.day && (
//                     <div className="px-4 pb-6 pl-16 text-gray-700 leading-relaxed">
//                       <p>{day.description}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Reviews */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-6">Traveller Review</h2>
//             <div className="grid grid-cols-3 gap-4 mb-4 border rounded-lg p-4">
//               <div className="text-center">
//                 <div className="flex items-center justify-center space-x-2">
//                   <span className="font-bold text-lg">Tripadvisor</span>
//                 </div>
//                 <div className="flex items-center justify-center mt-2">
//                   <span className="text-green-600 font-bold">
//                     {tour.reviews.tripadvisor.rating}
//                   </span>
//                   <div className="flex ml-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-current text-green-600"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-sm mt-1">
//                   {tour.reviews.tripadvisor.reviews} reviews
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center">
//                   <span className="font-bold text-lg">Google</span>
//                 </div>
//                 <div className="flex items-center justify-center mt-2">
//                   <span className="text-yellow-600 font-bold">
//                     {tour.reviews.google.rating}
//                   </span>
//                   <div className="flex ml-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-current text-yellow-500"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-sm mt-1">
//                   {tour.reviews.google.reviews} reviews
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center">
//                   <span className="font-bold text-lg">Facebook</span>
//                 </div>
//                 <div className="flex items-center justify-center mt-2">
//                   <span className="text-blue-600 font-bold">
//                     {tour.reviews.facebook.rating}
//                   </span>
//                   <div className="flex ml-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-4 h-4 fill-current ${
//                           i < Math.floor(tour.reviews.facebook.rating)
//                             ? "text-blue-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-sm mt-1">
//                   {tour.reviews.facebook.reviews} reviews
//                 </p>
//               </div>
//             </div>

//             {/* Sample Review */}
//             <div className="border rounded-lg p-4">
//               <div className="flex items-center gap-4 mb-2">
//                 <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
//                   <span className="font-semibold text-gray-700">G</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Grace Turner</h3>
//                   <p className="text-sm text-gray-500">Dallas, US</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import {
  Share,
  Check,
  MapPin,
  Clock,
  Star,
  Footprints,
  Mountain,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

interface TourImages {
  src: string;
  alt: string;
}

interface TourProps {
  title: string;
  rating: number;
  reviews: number;
  duration: string;
  difficulty: string;
  groupSize: string;
  elevation: string;
  price: {
    original: string;
    discounted: string;
    discount: string;
  };
  images: TourImages[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
}

const tourData: TourProps = {
  title: "A Seven Day Majestic Bhutan Tour",
  rating: 4.8,
  reviews: 12,
  duration: "7 days",
  difficulty: "Easy Trip",
  groupSize: "Min. 20 Pax",
  elevation: "3120m",
  price: {
    original: "US $1799",
    discounted: "US $1399",
    discount: "400 OFF",
  },
  images: [
    {
      src: "https://images.pexels.com/photos/67548/the-tiger-s-nest-monastery-taktsang-palphug-monastery-buddha-67548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Bhutan Tour",
    },
    {
      src: "https://images.pexels.com/photos/1089318/pexels-photo-1089318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Bhutan Tour 1",
    },
  ],
  itinerary: [
    {
      day: "01",
      title:
        "Arrival in Paro (2,280m altitude) - After landing, enjoy a 1-hour scenic drive to Thimphu.",
      description:
        "Upon Arrival in Paro, situated at an elevation of 2,280m, you will be greeted by the serene and untouched beauty of Bhutan. As you disembark at Paro International Airport, you'll immediately notice the traditional architecture and the surrounding pristine landscape.",
    },
    {
      day: "02",
      title: "Exploring Thimphu - A Blend of Tradition and Modernity",
      description:
        "Begin your day in Bhutan's capital, Thimphu. Visit the majestic Tashichho Dzong, stroll through local markets, and experience the unique fusion of ancient traditions with modern influences.",
    },
    {
      day: "03",
      title: "Cultural Immersion in Paro - Discover Ancient Traditions",
      description:
        "Return to Paro to delve deeper into Bhutanese culture. Explore the National Museum and the historic Rinpung Dzong, and wander the streets lined with traditional architecture that tell stories of Bhutan's past.",
    },
    {
      day: "04",
      title: "Hiking to Tiger’s Nest Monastery - A Spiritual Journey",
      description:
        "Embark on an exhilarating hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), perched on a cliffside. Enjoy panoramic views and immerse yourself in the spiritual aura that permeates this sacred site.",
    },
    {
      day: "05",
      title: "Nature and Wellness - Relax in a Serene Environment",
      description:
        "Spend a rejuvenating day amid Bhutan’s natural beauty. Take a gentle walk through lush valleys, relax at a traditional Bhutanese spa, and embrace the calm and restorative energy of the landscape.",
    },
    {
      day: "06",
      title: "Village Life and Local Artisans - Connect with the Community",
      description:
        "Visit rural villages to witness the traditional lifestyles and craftsmanship of Bhutan. Engage with local artisans, learn about their methods, and perhaps bring home a piece of Bhutanese art.",
    },
    {
      day: "07",
      title: "Farewell Bhutan - Reflect on an Unforgettable Journey",
      description:
        "On your final day, enjoy a leisurely morning in Thimphu or Paro, revisit your favorite spots, and reflect on the enriching experiences of your journey before departing from Paro International Airport.",
    },
  ],
};

const TourDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/destinations"
              className="text-gray-500 hover:text-gray-900"
            >
              Best Destinations to Travel in South Asia
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">
              Majestic Bhutan: A Seven Day Bhutan Tour
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {tourData.title}
              </h1>

              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(tourData.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  Based on {tourData.reviews} reviews
                </span>
                <Button variant="outline" size="sm" className="ml-4">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="ml-2">
                  Get Brochure
                </Button>
              </div>

              <div className="relative mb-8">
                <Image
                  src={tourData.images[currentImageIndex].src}
                  alt={tourData.images[currentImageIndex].alt}
                  //   sizes="100%"
                  //   fill
                  height={400}
                  width={400}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev > 0 ? prev - 1 : tourData.images.length - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev < tourData.images.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2"
                >
                  Next
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-6">At a Glance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      {/* Add your icon here */}
                      <MapPin className="text-blue-600 h-6 w-6 mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Destination</p>
                      <p className="text-sm text-gray-600">Bhutan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      {/* Add your icon here */}
                      <Clock className="text-blue-600 h-6 w-6 mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-gray-600">7 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      {/* Add your icon here */}
                      <Star className="text-blue-600 h-6 w-6 mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Trip Difficulty</p>
                      <p className="text-sm text-gray-600">Easy Trip</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      {/* Add your icon here */}
                      <Footprints className="text-blue-600 h-6 w-6 mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Activities</p>
                      <p className="text-sm text-gray-600">City Tour Only</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      {/* Add your icon here */}
                      <Mountain className="text-blue-600 h-6 w-6 mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Max. Elevation</p>
                      <p className="text-sm text-gray-600">3120m</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      {/* Add your icon here */}
                      <Users className="text-blue-600 h-6 w-6 mt-1" />
                    </div>
                    <div>
                      <p className="font-medium">Group Size</p>
                      <p className="text-sm text-gray-600">Min. 20 Pax</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  About Majestic Bhutan: A Seven Day Bhutan Tour
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600">
                    A Seven-Day Majestic Bhutan Tour by Luxury Holidays Nepal
                    Pvt. Ltd. is a journey through the heart and soul of Bhutan,
                    a mystical kingdom nestled in the Himalayas. Over seven
                    days, travelers will immerse themselves in the beauty and
                    tranquility of Bhutan&apos;s monastic cities, rugged
                    landscapes, and vibrant culture.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">Itinerary</h2>
                <div className="space-y-6">
                  {tourData.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border-l-2 border-gray-200 pl-4 relative"
                    >
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                      <h3 className="font-medium">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
                <h2 className="text-xl font-semibold mb-6">Traveller Review</h2>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={
                        "https://th.bing.com/th/id/OIP.Z62YUv4KIH-rnCc2xXEfGwHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
                      }
                      alt="Tripadvisor"
                      width={100}
                      height={100}
                      className="h-6 object-contain"
                    />
                    <div>
                      <div className="font-medium">5.0</div>
                      <div className="text-sm text-gray-500">528 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={
                        "data:image/jpeg;base64,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"
                      }
                      alt="Google"
                      width={100}
                      height={100}
                      className="h-6 object-contain"
                    />
                    <div>
                      <div className="font-medium">4.9</div>
                      <div className="text-sm text-gray-500">1,234 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={
                        "https://th.bing.com/th/id/OIP.TJPPqgPkbIoECkGmtCrmIQHaHa?rs=1&pid=ImgDetMain"
                      }
                      alt="Facebook"
                      width={100}
                      height={100}
                      className="h-6 object-contain"
                    />
                    <div>
                      <div className="font-medium">4.8</div>
                      <div className="text-sm text-gray-500">567 reviews</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-medium">
                      GT
                    </div>
                    <div>
                      <h3 className="font-medium">Grace Turner</h3>
                      <p className="text-sm text-gray-500">Dallas, US</p>
                      <div className="flex items-center mt-1">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="mt-2 text-gray-600">
                        The first thing that struck me about Bhutan was its
                        pristine landscapes...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="line-through text-gray-400">
                      {tourData.price.original}
                    </div>
                    <div className="text-green-500 text-sm font-medium">
                      {tourData.price.discount}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    {tourData.price.discounted}
                    <span className="text-sm font-normal text-gray-600 ml-2">
                      per person
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      "Book Instantly Directly with Provider",
                      "Best Price guarantee",
                      "Fully Customizable Trip",
                      "Extend Trip Without Any Charges",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mb-3 bg-red-500 hover:bg-red-600">
                    Check Availability
                  </Button>
                  <Button variant="outline" className="w-full">
                    Make An Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
              You Also Like <span className="italic">Similar Packages</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add similar tour cards here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TourDetail;
