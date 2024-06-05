import BookDetail from "@/components/BookDetail";
import Review from "@/components/Review";
import { IBookDetail } from "@/interface/IBook";
import { IResponse } from "@/interface/IResponse";
import { IReview } from "@/interface/IReview";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function BookDetailPage() {
  const [reviews, setReviews] = useState<IReview[]>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dev.mjudbp.com/api/v1/books/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data: IResponse<IBookDetail>) => {
        const { body } = data;
        const { reviews } = body;
        setReviews(reviews);
      });
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <FontAwesomeIcon
        onClick={() => {
          navigate(-1);
        }}
        icon={faArrowLeft}
        className="mb-5"
      ></FontAwesomeIcon>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="grid gap-6">
          <BookDetail id={id !== undefined ? +id : 0} />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">4.2</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              (1,234 ratings)
            </div>
          </div>
          <div className="grid gap-6">
            {reviews?.map((review) => {
              return (
                <div key={review.reviewId}>
                  <Review key={review.reviewId} review={review} />
                  <hr className="mt-5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
