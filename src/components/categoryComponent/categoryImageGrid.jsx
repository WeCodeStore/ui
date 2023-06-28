import { useState } from "react";
import "./categoryImageGrid.css";

const CategoryImageGrid = () => {

    const [images, setImages] = useState([
        { name: 'Shop Bed', src: 'https://i.imgur.com/58rvHxE.jpg', desc: 'This describes this image..' },
        { name: 'Shop Kitchen', src: 'https://i.imgur.com/S9tQqzv.jpg', desc: 'This describes this image 2..' },
        { name: 'Shop Toys', src: 'https://i.imgur.com/EJHl7aP.jpg', desc: 'This describes this image 3 ..' },
        { name: 'Shop Tools', src: '//placeimg.com/600/400?text=4', desc: 'This describes this image 4..' },
        { name: 'Shop Cloths', src: '//placeimg.com/600/400?text=5', desc: 'This describes this image 5..' },
        { name: 'Shop Electronics', src: '//placeimg.com/600/400?text=6', desc: 'This describes this image 6..' },
    ]);
    const [currentImage, setCurrentImage] = useState({});
    
    const handleClick = (val) => {
        console.log(val)
        setCurrentImage( val );
    }
    return (
        <>
            <h3 className="header-category"> Shop By Category</h3>
            <div className="container-category">
                    {images.map((val, k) => {
                            return (
                                <div  key={k}>
                                    <h6 className="header-category">{val.name}</h6>
                                    <img src={val.src} className={'img' + (val.src === currentImage.src ? 'p-1' : '')} onClick={() => handleClick(val)} />
                                </div>)
                        })
                    }
            </div> 
            
        </>
    );
};
export default CategoryImageGrid;