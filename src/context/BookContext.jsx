import { Children, createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({Children}) => {
    const [books, setBooks] = useState([]);
    const value = {books, setBooks}
    return (
        <BookContext.Provider value={{value}}>
            {Children}
        </BookContext.Provider>
    )
}

export default BookContext