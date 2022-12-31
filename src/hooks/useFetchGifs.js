import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadImages = async () => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    };

    useEffect(() => {
        loadImages();
    }, []);

    return {
        images,
        isLoading
    };
};
