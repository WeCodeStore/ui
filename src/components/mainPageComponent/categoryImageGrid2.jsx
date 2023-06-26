
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CategoryImageGrid2 = ({ data }) => {

    const [images, setImages] = useState([
       [ { name: 'Image 1', src: 'https://i.imgur.com/58rvHxE.jpg', desc: 'This describes this image..' },
        { name: 'Image 2', src: '//placeimg.com/600/400?text=2', desc: 'This describes this image 2..' },
        { name: 'Image 3', src: '//placeimg.com/600/400/any', desc: 'This describes this image 3 ..' }],
       [ { name: 'Image 4', src: '//placeimg.com/600/400?text=4', desc: 'This describes this image 4..' },
        { name: 'Image 5', src: '//placeimg.com/600/400?text=5', desc: 'This describes this image 5..' },
        { name: 'Image 6', src: '//placeimg.com/600/400?text=6', desc: 'This describes this image 6..' }]
    ]);
    const [currentImage, setCurrentImage] = useState({currentSelection:images[0]});
    
    const handleClick = (val) => {
        console.log(val)
        setCurrentImage( val );
    }
    return (
        <div>
            <Container>
                <Row >
                   
                        {images[0].map((val, k) => {
                            return  (
                                <Col  key={k}>
                                    <img src={val.src} className={'img-fluid ' + (val.src === currentImage.src ? 'p-1' : '')} onClick={() => handleClick(val)} />
                                </Col>)
                        })
                        }
                        </Row>
                        <Row>
                        {images[1].map((val, k) => {
                            return  (
                                <Col  key={k}>
                                    <img src={val.src} className={'img-fluid ' + (val.src === currentImage.src ? 'p-1' : '')} onClick={() => handleClick(val)} />
                                </Col>)
                        })
                        }
                    </Row>
                    </Container>
            
        </div>
    );
};
export default CategoryImageGrid2;