import { IBook } from "./IBook";

export interface ICollectionResponse {
  collection_id: number;
  collection_name: string;
  user_nickname: string;
  books: IBook[];
  description: string;
}
