import NoteListClient from "./Notes.client";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";



export default async function App() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['notes', {query: "", page: 1}],
    queryFn: () => fetchNotes(1, ""),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <NoteListClient/>
    </HydrationBoundary>
  );
}