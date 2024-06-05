import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IBook } from "@/interface/IBook";
import { Link } from "react-router-dom";
function Book(book: IBook) {
  return book.bookId !== undefined ? (
    <Link to={`book/${book.bookId}`}>
      <Card className="flex flex-col gap-3 rounded-sm h-full">
        <CardTitle>
          <img src={`${book?.image}`} className="w-full h-1/6 rounded-sm" />
        </CardTitle>
        <CardContent className="p-1 flex justify-start items-center">
          <h1 className="text-sm">
            {book.title.length > 10
              ? book.title.slice(0, 10) + "..."
              : book.title}
          </h1>
        </CardContent>
      </Card>
    </Link>
  ) : (
    <></>
  );
}

export default Book;
