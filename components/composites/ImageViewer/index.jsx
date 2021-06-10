import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';


const ProductImage = ({
    productColor, overlay, texture, text, font, width,
    fontSize, textOverlayPosition
}) => {
    
    return (
        <CloudinaryContext cloudName="demo-robert">
            <Image publicId="Hanging_T-Shirt_v83je9" width={`${width || 650}`} secure="true">
                <Transformation width="300" fetchFormat="auto" />
                <Transformation overlay={texture} quality="auto" fetchFormat="auto" />
                <Transformation overlay={overlay} quality="auto" fetchFormat="auto" width="110" />
                <Transformation overlay={{fontFamily: font, fontSize: `${fontSize}`, fontWeight: "bold", text: text}} gravity="center" x={ textOverlayPosition.x } y={ textOverlayPosition.y }  color={`#666`} />
                <Transformation rawTransformation={`e_replace_color:${productColor}`} />
            </Image>
        </CloudinaryContext>
    );
};

export default ProductImage;