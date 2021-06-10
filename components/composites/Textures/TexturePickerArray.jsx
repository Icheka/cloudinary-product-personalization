import { useState } from 'react';
import TexturePickerSquare from './TexturePicker';

const TexturePickerArray = ({ texturesArray, elementClassName, isFluid, onSelect }) => {
    // SET INDEX OBJECT TO AUTO-FOCUSED
    const [focusedSquare, setFocusedSquare] = useState(0);

    return (
        <div className={`flex flex-row`}>
            { 
                texturesArray.map((texture, index) => (
                    <TexturePickerSquare
                        isFocused={ index === focusedSquare }
                        onClick={ e => setFocusedSquare(index) }
                        onSelect={e => onSelect ? onSelect(e, texture.texture) : null}
                        className={elementClassName}
                        isFluid={isFluid}
                        image={texture.image}
                    />
                )) 
            }
        </div>
    );
};

export default TexturePickerArray;