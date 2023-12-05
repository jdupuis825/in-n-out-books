// Name: Jocelyn Dupuis
// File: book.interface.ts
// Date: 11/16/2023
// Description: TS file for book interface

// export Ibook interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
