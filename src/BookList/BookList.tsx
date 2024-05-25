import { useEffect, useState } from "react";
import Book from "./Book";
import SlideBtn from "../component/slideBtn";
interface BookListProp {
  books: IBook[];
  title: string;
}
function BookList({ books, title }: BookListProp) {
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;
  const lastPage = Math.ceil(books.length / limit);
  console.log(offset);
  useEffect(() => {
    setPage(1);
  }, []);
  return (
    <>
      <div className="flex flex-col w-1/2">
        <h1 className="m-5 text-3xl font-bold">{title}</h1>
        <div className="flex gap-6 justify-between relative">
          <div className="absolute top-44 left-7">
            {page != 1 ? (
              <SlideBtn
                isLeft={true}
                onClick={() => {
                  setPage(page - 1);
                }}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="absolute top-44 right-2">
            {page != lastPage ? (
              <SlideBtn
                isLeft={false}
                onClick={() => {
                  setPage(page + 1);
                }}
              ></SlideBtn>
            ) : (
              <></>
            )}
          </div>

          {books.slice(offset, offset + limit).map((book: IBook) => {
            return <Book key={book.rank} {...book}></Book>;
          })}
        </div>
      </div>
    </>
  );
}

export default BookList;
