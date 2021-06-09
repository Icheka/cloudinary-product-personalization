import { ColorPickerSquare } from ".";

/**
 * Renders an array of 'ColorPickerSquare's
 * @param { Array<object> } array
 * @returns { Instanceof JSXElement }
 */

const ColorPickerArray = ({ array, elementClassName, image }) => {

    return (
        <div className={`flex flex-row`}>
            { 
                array.map((color, index) => (
                    <ColorPickerSquare
                        color={color.color}
                        onSelect={e => color.onSelect ? color.onSelect(e) : null}
                        className={elementClassName}
                        image={array[index].image}
                    />
                )) 
            }
        </div>
    );
};

export default ColorPickerArray;