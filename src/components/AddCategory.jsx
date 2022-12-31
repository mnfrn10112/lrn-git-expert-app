import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onAddCategory(inputValue);
        setInputValue('');
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    );
};
