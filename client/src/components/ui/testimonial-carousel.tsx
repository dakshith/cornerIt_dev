import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Testimonial } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export function TestimonialCarousel({ 
  testimonials, 
  autoplay = true, 
  autoplaySpeed = 5000 
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSlide = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  const onSelect = useCallback(() => {
    if (!api) return;
    const selectedIndex = api.selectedScrollSnap();
    setCurrent(selectedIndex);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  // Handle autoplay
  useEffect(() => {
    if (isPlaying && api) {
      autoplayTimerRef.current = setInterval(() => {
        api.scrollNext();
      }, autoplaySpeed);
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying, autoplaySpeed, api]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setIsPlaying(false);
  const resumeAutoplay = () => setIsPlaying(autoplay);

  // Render rating stars
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 w-4 h-4" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 w-4 h-4" />);
    }

    return stars;
  };

  return (
    <div 
      className="relative w-full"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <Carousel
        opts={{ loop: true }}
        orientation="horizontal"
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/3">
              <Card className="glass-morphism h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {renderRating(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-primary to-secondary p-0.5 mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg" />
        <CarouselNext className="hidden md:flex absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary text-white shadow-md hover:shadow-lg" />
      </Carousel>

      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === current ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
