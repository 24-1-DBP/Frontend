import { IReview } from "@/interface/IReview";
function Review({ review }: { review: IReview }) {
  return (
    <article className="grid gap-3">
      <div className="flex items-center gap-4">
        <div className="grid">
          <div className="font-semibold">{review.userNickName}</div>
        </div>
      </div>
      <div>{review.reviewContent}</div>
    </article>
  );
}

export default Review;
