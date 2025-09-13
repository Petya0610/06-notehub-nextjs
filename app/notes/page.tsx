import css from "./NotesPage.module.css";
import NoteListClient from "./Notes.client";
import { QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";



export default async function App() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['notes', {query: "", page: 1}],
    queryFn: () => fetchNotes(1, ""),
  });
  return (
  <div className={css.app}>
    <NoteListClient/>
  </div>

  );
}