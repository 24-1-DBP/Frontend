import { IBookDetail } from "@/interface/IBook";
import { IResponse } from "@/interface/IResponse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faEmptyThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
function BookDetail({ id }: { id: number }) {
  const [book, setBook] = useState<IBookDetail>();
  const [isLike, setisLike] = useState<boolean | undefined>(false);
  useEffect(() => {
    fetch(`/api/api/v1/books/${id}`, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data: IResponse<IBookDetail>) => {
        const { body } = data;
        setBook(body);
      });
  }, [id]);

  useEffect(() => {
    setisLike(book?.isLiked);
  }, [book]);
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <img src={book?.image} />
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{book?.title}</h1>
          <div className="flex gap-2 items-center">
            {isLike ? (
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={() => {
                  setisLike(!isLike);
                  fetch(`/api/api/v1/likes/${id}`, {
                    method: "POST",
                  });
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEmptyThumbsUp}
                onClick={() => {
                  setisLike(!isLike);
                  fetch(`/api/api/v1/likes/${id}`, {
                    method: "POST",
                  });
                }}
              />
            )}
            <p>좋아요</p>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400">by {book?.author}</p>
      </div>
      <div className="prose dark:prose-invert">
        <p>{book?.summary}</p>
      </div>
    </div>
  );
}

export default BookDetail;
