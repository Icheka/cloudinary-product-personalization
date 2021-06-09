const ColorPickerSquare = ({ color, onSelect, className, image }) => {
    return (
        <div
            className={`focus:border-2 focus:border-gray-500 cursor-pointer ${className} ${color == 'white' || color == '#fff' ? 'border border-gray-500' : null}`} 
            style={{ backgroundColor: color ?? 'transparent', width: 32, height: 32, backgroundImage: `url(${image})` }}
            onClick={ e => onSelect ? onSelect(e) : null }
        >
            &nbsp;
        </div>
    );
};


export default ColorPickerSquare;