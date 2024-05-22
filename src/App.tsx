import { useEffect, useState } from "react";
import "./index.css";
import BookList from "./BookList/BookList";
function App() {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const bookList: IBook[] = [
      {
        title: "test",
        year: 2023,
        rank: 1,
        author: "test",
        img: "https://image.aladin.co.kr/product/33707/79/cover200/s052930028_1.jpg",
      },
      {
        title: "test",
        year: 2023,
        rank: 2,
        author: "test",
        img: "https://image.aladin.co.kr/product/33707/79/cover200/s052930028_1.jpg",
      },
      {
        title: "test",
        year: 2023,
        rank: 3,
        author: "test",
        img: "https://image.aladin.co.kr/product/33707/79/cover200/s052930028_1.jpg",
      },
      {
        title: "test",
        year: 2023,
        rank: 4,
        author: "test",
        img: "https://image.aladin.co.kr/product/33707/79/cover200/s052930028_1.jpg",
      },
      {
        title: "test",
        year: 2023,
        rank: 5,
        author: "test",
        img: "https://image.aladin.co.kr/product/33707/79/cover200/s052930028_1.jpg",
      },
      {
        title: "test",
        year: 2023,
        rank: 6,
        author: "test",
        img: "https://image.aladin.co.kr/product/33707/79/cover200/s052930028_1.jpg",
      },
    ];
    setBooks(bookList);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 px-40">
      <BookList books={books} title={"인기 북 순위"} />
      <BookList books={books} title={"신간 책"} />
      <BookList books={books} title={"연간 책 순위"} />
    </div>
  );
}

export default App;
