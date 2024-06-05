import BookList from "@/components/BookList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IBookList } from "@/interface/IBookList";

const NewBookList: IBookList = {
  title: "신간 책들",
  url: "/api/api/v1/books/new",
};

const BasicBookList: IBookList = {
  title: "일반 도서들",
  url: "/api/api/v1/books/basic",
};
const BestBookList: IBookList = {
  title: "베스트 도서들",
  url: "/api/api/v1/books/best",
};
function Home() {
  return (
    <>
      <ScrollArea className="h-dvh pt-36">
        <BookList bookList={NewBookList} />
        <BookList bookList={BasicBookList} />
        <BookList bookList={BestBookList} />
      </ScrollArea>
    </>
  );
}
export default Home;
