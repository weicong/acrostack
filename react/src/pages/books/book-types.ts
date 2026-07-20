import type { AcroStackServicesDtosBooksBookDto } from "@/api/models/acroStack/services/dtos/books/BookDto";
/** List/detail item as returned by the book list endpoint. Feature-local alias
 * so pages don't depend on the generated (Kubb) type name directly. */
export type BookListItem = AcroStackServicesDtosBooksBookDto;

export type BookFormBook = Pick<
  AcroStackServicesDtosBooksBookDto,
  "id" | "name" | "type" | "publishDate" | "price"
>;

export function toFormBook(dto: AcroStackServicesDtosBooksBookDto): BookFormBook {
  return {
    id: dto.id,
    name: dto.name,
    type: dto.type,
    publishDate: dto.publishDate,
    price: dto.price,
  };
}
