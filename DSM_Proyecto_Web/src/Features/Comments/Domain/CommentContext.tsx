import { createContext, useState } from "react";
import type { Comment } from "./Comment";




type CommentContextType = {
    comment: Comment | null;
    setComment: (comment: Comment | null) => void;
}


const CommentContext = createContext<CommentContextType | undefined>(undefined);

export function CommentProvider ({ children }: { children: React.ReactNode }) {

    const [comment, setComment] = useState <Comment | null>(null);

    return (
        <CommentContext.Provider value={{ comment, setComment }}>
            {children}
        </CommentContext.Provider>
    )
}
