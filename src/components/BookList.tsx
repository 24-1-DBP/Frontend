import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Book from "./Book";
import { IBookList } from "@/interface/IBookList";
import { useEffect, useState } from "react";
import { IBook } from "@/interface/IBook";
import { IResponse } from "@/interface/IResponse";

function BookList({ bookList }: { bookList: IBookList }) {
  const [books, setBooks] = useState<IBook[]>();

  useEffect(() => {
    fetch(bookList.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: IResponse<IBook[]>) => {
        const { body } = data;
        setBooks(body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bookList]);
  /*
  useEffect(() => {
    const booksList: IBook[] = [
      {
        title: "test",
        img: "test",
        author: "test",
        description: "test",
      },
    ];

    setBooks(booksList);
  }, []);*/
  return (
    <div>
      <h1 className="ml-5 mt-10 text-2xl font-bold">{bookList.title}</h1>
      <div className="relative w-full max-w-xs mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="flex justify-center -ml-1">
            {books == undefined ? (
              <h1>loading...</h1>
            ) : (
              books.map((book, index) => (
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

export default BookList;
