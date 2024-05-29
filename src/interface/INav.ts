export interface INavElement {
  name: string;
  svg: JSX.Element;
  page: () => JSX.Element;
}

export interface INav {
  elements: INavElement[];
}
