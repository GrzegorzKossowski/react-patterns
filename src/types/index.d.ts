export interface IAuthor {
  id: string;
  name: string;
  age: number;
  country: string;
  books: string[];
}

export interface IBook {
  id: string;
  name: string;
  pages: number;
  title: string;
  price: number;
}
export type IList = {
  items: Array<IAuthor | IBook>;
  sourceName: string;
  ItemComponent: React.ElementType;
};

export interface IJPUser {
  id: number;
  [key: string]: string;
  address: {
    [key: string]: string;
    geo: {
      [key: string]: string;
    };
  };
  company: {
    [key: string]: string;
  };
}
