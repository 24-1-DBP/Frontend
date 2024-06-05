import { IReview } from "./IReview";

export interface IBook {
  bookId: number;
  title: string;
  image: string;
  price: number;
}

export interface IBookDetail {
  bookId: number;
  title: string;
  image: string;
  reviews: IReview[];
  price: number;
  summary: string;
  author: string;
  publisher: string;
  isLiked: boolean;
}
