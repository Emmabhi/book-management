import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const BookForm = ({handleSubmit}) => {
    const [bookState, setBookState] = useState({
        name: '',
        author: '',
        price: '',
    });

    const handleChange = (e) => {
        setBookState({
            ...bookState,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventdefault();
        handleSubmit({
            id: uuidv4(),
            date: new Date(),
            ...bookState
        });
    }
    const renderInputField = (label, placeholder, name) => (
        <div className="inputField">
            <label>{label}</label>
            <input  onChange = {handleChange} value={bookState[name]} name={name} type="text" placeholder={placeholder}/>
        </div>
    )
    const disabledSubmit = !bookState.name || !bookState.author || !bookState.price;
    
    return (
        <form onSubmit={onSubmit} className="form">
            {renderInputField('book Name','Enter name of book...','name')}
            {renderInputField('book Author','Enter name of author...','author')}
            {renderInputField('book Price','Enter price of book...','price')}
            <button type="submit" className="btnForm" disabled={disabledSubmit}>Submit</button>
        </form>
    )
}

export default BookForm