import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Book from "./Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function CollectionList() {
  return (
    <div>
      <div>
        <div className="ml-5 mb-2 flex gap-2 items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-1/2">
            <p className="text-gray-500 text-sm ">milky님의 컬렉션</p>
            <p className="text-xl font-bold">부커상 수상작들</p>
          </div>
          <div className="ml-24">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="relative w-full max-w-xs mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="flex justify-center -ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/3">
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
      </div>
    </div>
  );
}

export default CollectionList;
