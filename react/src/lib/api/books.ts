import { api } from "./axios";
import type { PagedResultDto } from "./identity";

export interface BookDto {
  id: string;
  name: string;
  type: number;
  publishDate: string;
  price: number;
  creationTime: string;
}

export interface CreateUpdateBookDto {
  name: string;
  type: number;
  publishDate: string;
  price: number;
}

export interface GetBooksInput {
  maxResultCount?: number;
  skipCount?: number;
  sorting?: string;
  filter?: string;
}

export const bookTypeOptions = [
  { value: 0, key: "Enum:BookType.Undefined" },
  { value: 1, key: "Enum:BookType.Adventure" },
  { value: 2, key: "Enum:BookType.Biography" },
  { value: 3, key: "Enum:BookType.Dystopia" },
  { value: 4, key: "Enum:BookType.Fantastic" },
  { value: 5, key: "Enum:BookType.Horror" },
  { value: 6, key: "Enum:BookType.Science" },
  { value: 7, key: "Enum:BookType.ScienceFiction" },
  { value: 8, key: "Enum:BookType.Poetry" },
];

export function getBooks(params?: GetBooksInput) {
  return api.get<PagedResultDto<BookDto>>("/app/book", { params }).then((r) => r.data);
}

export function getBook(id: string) {
  return api.get<BookDto>(`/app/book/${id}`).then((r) => r.data);
}

export function createBook(input: CreateUpdateBookDto) {
  return api.post<BookDto>("/app/book", input).then((r) => r.data);
}

export function updateBook(id: string, input: CreateUpdateBookDto) {
  return api.put<BookDto>(`/app/book/${id}`, input).then((r) => r.data);
}

export function deleteBook(id: string) {
  return api.delete(`/app/book/${id}`).then((r) => r.data);
}
