import { createContext, useContext, useState } from "react";
import type { Comment } from "./Comment";




type CommentContextType = {
    comments: Comment[] | null;
    setComments: (comments: Comment[] | null) => void;
}


const CommentContext = createContext<CommentContextType | undefined>(undefined);

export function CommentProvider ({ children }: { children: React.ReactNode }) {

    const [comments, setComments] = useState <Comment[] | null>(null);

    return (
        <CommentContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentContext.Provider>
    )
}
 

export function useComments () {

    const context = useContext(CommentContext);

    if (!context) {
        throw new Error("useMovies debe usarse dentro de MovieProvider");
    }

    return context;
}