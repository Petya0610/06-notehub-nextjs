import axios from "axios";
import type { NewNoteData, Note, NoteTag } from "../types/note";


export interface NoteResponse {
 notes: Note[];
 totalPages: number;
}

const api = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchNotes = async (page: number, query: string): Promise<NoteResponse> => {
    const res = await api.get<NoteResponse>("/notes", {
        params: {search: query, page, perPage: 12}, 
    });
    return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
    const res = await api.get<Note>(`/notes/${id}`);
    return res.data;
}

export const createNote = async (newNote : NewNoteData): Promise<Note> => {
    const res = await api.post<Note>("/notes", newNote);
    return res.data;
}

export const deleteNote = async (id: string): Promise<Note> => {
    const res = await api.delete<Note>(`/notes/${id}`);
    return res.data;
}