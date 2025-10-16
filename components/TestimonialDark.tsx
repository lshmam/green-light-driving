import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  status: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  status,
  testimonial,
}) => (
  <Card className="group bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/80 transition-all duration-300 h-full flex flex-col">
    <CardContent className="p-6 flex-1 flex flex-col">
      <div className="flex flex-col gap-6 h-full items-center">
        <div className="flex flex-col xl:flex-row items-center gap-6 h-full">
          <div className="relative w-full xl:w-48 aspect-[4/3] xl:aspect-square shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-emerald-400 font-medium">{status}</p>
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              {testimonial}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialDark() {
  const testimonials = [
    {
      name: "Ravi",
      image: "/client1.jpg",
      status: "Passed First Time",
      testimonial:
        "Green Light Driving School is fantastic! Parminder is an excellent instructor who made driving lessons straightforward and relaxing. His clear instructions and flexible scheduling helped me pass my road test with ease. I highly recommend this driving school!",
    },
    {
      name: "Sidharat",
      image: "/client2.jpg",
      status: "Passed First Time",
      testimonial:
        "I had a great experience with my instructor at Green Light Driving School! They were incredibly patient and helped me build confidence behind the wheel. Each lesson was tailored to my learning pace, making the process smooth and enjoyable. The car was well-maintained, and my instructor's knowledge of Vancouver's roads and test routes really helped me feel prepared. Thanks to their guidance, I passed my road test with ease.",
    },
    {
      name: "Satnam S.",
      image: "/client3.jpg",
      status: "Passed First Time",
      testimonial:
        "My experience with Parminder was exceptional. As an instructor, he offers maximum flexibility to learners, which I truly appreciate. This approach helped me feel comfortable and confident throughout the learning process. I highly recommend this school to others seeking a great road test experience.",
    },
    {
      name: "Harman",
      image: "/client5.jpg",
      status: "Passed First Time",
      testimonial:
        "I had a fantastic experience with Green Light Driving School! The instructors were incredibly patient, professional, and supportive throughout the entire learning process. They tailored the lessons to fit my needs and worked with me on areas where I needed extra practice, helping me build confidence and master skills for the ICBC road test.",
    },
  ];

  return (
    <section className="w-full py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white text-center mb-4">
            What Our Students Say
          </h2>
          <p className="max-w-2xl md:text-lg text-zinc-400 text-center">
            Don't just take our word for it. Here's what some of our successful
            students have to say about their experience with Green Light Driving
            School.
          </p>
        </div>

        {/* Grid container with uniform card sizes */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}