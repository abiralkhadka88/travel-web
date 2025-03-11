"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Info } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: Date;
  specialRequests: string;
}

const BookingPage = () => {
  // const router = useRouter();
  const slug = usePathname();

  const [guests, setGuests] = useState(2);

  // Initialize the form with react-hook-form
  const form = useForm<BookingFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: 2,
      date: new Date(),
      specialRequests: "",
    },
  });

  // Watch the date and guests to update the booking summary
  const watchDate = form.watch("date");
  const watchGuests = form.watch("guests");

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking submitted:", data);

    // Show success toast
    //     toast.message({
    //       title: "Booking Submitted",
    //       description: `Your booking for ${id?.replace(/-/g, " ")} has been received.`,
    //       variant: "default",
    //     });
    //   };

    toast.message(
      `Your booking for ${slug?.replace(/-/g, " ")} has been received.`
    );
  };

  // Calculate the total amount based on number of guests
  const pricePerPerson = 1399;
  const totalAmount = pricePerPerson * (watchGuests || guests);

  const destination = slug?.split("/").pop() || "";

  // Then replace hyphens with spaces and capitalize each word
  const formattedDestination = destination
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 ">
            Book Your Journey to{" "}
            <span className="text-primary">{formattedDestination}</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Complete your booking details below to secure your spot on our 7-day
            Luxury Tour. A journey through the heart of the destination awaits
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Booking Form */}
          <div className="lg:col-span-2 bg-white">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please fill in your details to complete the booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 123 456 7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Guests</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min={1}
                                {...field}
                                onChange={(e) => {
                                  field.onChange(parseInt(e.target.value));
                                  setGuests(parseInt(e.target.value));
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>
                            Select Your Preferred Start Date
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0 bg-white"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests</FormLabel>
                          <FormControl>
                            <textarea
                              className="w-full h-24 px-3 py-2 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Any special requirements or requests?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Complete Booking
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <Card>
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle className="text-primary-dark">
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 bg-white">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {formattedDestination}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        7-day luxury journey
                      </p>
                    </div>

                    <div className="border-t border-b py-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Date</span>
                        <span className="font-medium">
                          {watchDate
                            ? format(watchDate, "PPP")
                            : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Guests</span>
                        <span className="font-medium">
                          {watchGuests || guests}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">7 days</span>
                      </div>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Price per person</span>
                        <span className="font-medium">$1,399</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total amount</span>
                        <span className="text-blue-600">${totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t">
                  <div className="w-full space-y-3">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">
                        Free cancellation up to 7 days before arrival
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">
                        Pay only 20% now, rest upon arrival
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Info className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">
                        Tour price includes all listed inclusions
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card className="bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Need Assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Our travel experts are here to help you with your booking.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-20">Call us:</span>
                      <a
                        href="tel:+1234567890"
                        className="text-sm text-blue-600"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-20">Email:</span>
                      <a
                        href="mailto:support@example.com"
                        className="text-sm text-blue-600"
                      >
                        support@example.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
