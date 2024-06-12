import { IBook } from "./IBook";

export interface ICollectionResponse {
  collection_id: number;
  collection_name: string;
  username: string;
  books: IBook[];
  description: string;
}

export interface ICollectionRequest {
  collection_name: string;
  description: string;
  books: number[];
  userID: number;
}
