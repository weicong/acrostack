import type { AcroStackBooksBookDto } from "@/api/models/acroStack/books/BookDto";
/** List/detail item as returned by the book list endpoint. Feature-local alias
 * so pages don't depend on the generated (Kubb) type name directly. */
export type BookListItem = AcroStackBooksBookDto;

export type BookFormBook = Pick<
  AcroStackBooksBookDto,
  "id" | "name" | "type" | "publishDate" | "price"
>;

export function toFormBook(dto: AcroStackBooksBookDto): BookFormBook {
  return {
    id: dto.id,
    name: dto.name,
    type: dto.type,
    publishDate: dto.publishDate,
    price: dto.price,
  };
}
