import { useContext } from "react";
import BookContext from "../context/BookContext";
import Book from "./Book";

const ListBook = () => {
    const {books, setBooks} = useContext(BookContext);
    return (
        <div className="ListBook">
            {books.length ? books.map(book => {
                <Book />
            }):(
                <p className="nodata">No books available, Please add some books!!!</p>
            )}
        </div>
    )
}

export default ListBook