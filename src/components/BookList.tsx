import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Book from "./Book";

function BookList() {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <Carousel className="w-full">
        <CarouselContent className="flex justify-center -ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Book></Book>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-0 left-0 h-full flex items-center pl-4">
          <CarouselPrevious />
        </div>
        <div className="absolute top-0 right-0 h-full flex items-center pr-4">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default BookList;
