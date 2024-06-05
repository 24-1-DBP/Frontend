export interface IResponse<T> {
  header: any;
  body: T;
  statusCode: string;
  statusCodeValue: number;
}
