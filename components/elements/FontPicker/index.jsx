

const FontPicker = ({ fonts, className, onChange }) => {

    const renderOptionElements = () => fonts.map(font => (
        <option value={font.value} selected={font.selected} hidden={font.hidden}>
            { font.title }
        </option>
    ));

    return (
        <select className={className} onChange={ e => onChange ? onChange(e) : null }>
            { renderOptionElements() }
        </select>
    );
};


export default FontPicker;