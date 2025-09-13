'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type Prop = {
    children: React.ReactNode;
}

export default function TanStackProvider({children}: Prop) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>{children}
        </QueryClientProvider>
    );

};