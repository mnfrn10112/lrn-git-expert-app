import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);
    const onAddCategory = (category) => {
        category = category.trim();
        if (category.length <= 1) return;
        if (categories.includes(category)) return;
        setCategories([category, ...categories]);
    };
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map((c) =>
                <GifGrid key={`category-${c}`} category={c} />)}
        </>
    );
};
