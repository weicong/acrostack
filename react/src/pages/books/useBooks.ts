import { useQuery } from "@tanstack/react-query";
import { getBooks, type GetBooksInput } from "@/lib/api/books";

interface UseBooksOptions {
  params?: GetBooksInput;
}

export function useBooks({ params }: UseBooksOptions = {}) {
  const { data, isLoading } = useQuery({
    queryKey: ["books", params],
    queryFn: () => getBooks(params),
  });

  return { data, isLoading, items: data?.items ?? [] };
}
