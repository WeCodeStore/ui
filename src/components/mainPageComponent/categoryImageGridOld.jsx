
import { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./categoryImageGrid.css";

const CategoryImageGrid = ({ data }) => {

    const [images, setImages] = useState([
        { name: 'Image 1', src: '//placeimg.com/600/400?text=1', desc: 'This describes this image..' },
        { name: 'Image 2', src: '//placeimg.com/600/400?text=2', desc: 'This describes this image 2..' },
        { name: 'Image 3', src: '//placeimg.com/600/400/any', desc: 'This describes this image 3 ..' },
        { name: 'Image 4', src: '//placeimg.com/600/400?text=4', desc: 'This describes this image 4..' },
        { name: 'Image 5', src: '//placeimg.com/600/400?text=5', desc: 'This describes this image 5..' },
        { name: 'Image 6', src: '//placeimg.com/600/400?text=6', desc: 'This describes this image 6..' },
    ]);
    const [currentImage, setCurrentImage] = useState({currentSelection:images[0]});
    
    const handleClick = (val) => {
        console.log(val)
        setCurrentImage( val );
    }
    return (
        <>
            <div className="row rowContainer">
                <div className="col-md">
                    <div className="row no-gutters">
                        {images.map((val, k) => {
                            return (
                                <div className="col-sm-4 categoryImg2" key={k}>
                                    <img src={val.src} className={'img-fluid ' + (val.src === currentImage.src ? 'p-1' : '')} onClick={() => handleClick(val)} />
                                </div>)
                        })
                        }
                    </div>
                </div>
               {/*} <div className="col-md">
                    <h3 className="font-weight-light">{currentImage.name}</h3>
                    <p>{currentImage.desc}</p>
                    </div> */}
            </div>
        </>
    );
};
export default CategoryImageGrid;