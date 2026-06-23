import type { AcroStackServicesDtosBooksBookDto } from "@/api/models/acroStack/services/dtos/books/BookDto";

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
