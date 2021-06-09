import { useState } from "react";
import { ColorPickerSquare } from ".";

/**
 * Renders an array of 'ColorPickerSquare's
 * @param { Array<object> } array           | an array of objects containing data for each ColorPickerSquare to be rendered
 * @param { String } elementClassName       | a string of CSS classes to apply to EACH ColorPickerSquare
 * @param { Array<Number> } isFluid         | array of width and height to be used instead of the defaults;
 *                                            this also allows each ColorPickerSquare to auto-resize to contain children elements
 * @param { String } elementClassName       | a string of CSS classes to apply to EACH ColorPickerSquare
 * @returns { Instanceof ReactElement }
 */

const ColorPickerArray = ({ array, elementClassName, isFluid }) => {
    // SET INDEX OBJECT TO AUTO-FOCUSED
    const [focusedSquare, setFocusedSquare] = useState(0);

    return (
        <div className={`flex flex-row`}>
            { 
                array.map((color, index) => (
                    <ColorPickerSquare
                        isFocused={ index === focusedSquare }
                        onClick={ e => setFocusedSquare(index) }
                        color={color.color}
                        onSelect={e => color.onSelect ? color.onSelect(e) : null}
                        className={elementClassName}
                        image={array[index].image}
                        isFluid={isFluid}
                    />
                )) 
            }
        </div>
    );
};

export default ColorPickerArray;