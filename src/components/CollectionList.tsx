import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { IBook } from "@/interface/IBook";
import { useEffect, useState } from "react";
import Book from "./Book";

function CollectionList({ books }: { books: IBook[] }) {
  const [booksList, setBooks] = useState<IBook[]>();

  useEffect(() => {
    setBooks(books);
  }, [books]);
  console.log(books);
  return (
    <div>
      <h1 className="ml-5 mt-5 text-2xl font-bold">{}</h1>
      <div className="relative w-full max-w-xs mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="flex justify-center -ml-1">
            {booksList == undefined ? (
              <h1>loading...</h1>
            ) : (
              booksList.map((book, index) => (
                <CarouselItem key={index} className="pl-5 basis-1/2">
                  <div className="p-2">
                    <Book {...book}></Book>
                  </div>
                </CarouselItem>
              ))
            )}
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
  );
}

export default CollectionList;
