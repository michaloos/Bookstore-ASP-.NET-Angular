import { Author } from "./autor";

export interface Book{
    bookId: number;
    title: string;
    autorId: number;
    year_of_publish: number;
    isbn: string;
    autor: Author;
}