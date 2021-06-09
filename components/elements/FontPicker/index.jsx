

const FontPicker = ({ fonts, className, defaultHidden }) => {

    const renderOptionElements = () => fonts.map(font => (
        <option value={font.value} selected={font.selected} hidden={font.hidden}>
            { font.title }
        </option>
    ));

    return (
        <select className={className}>
            { defaultHidden && <option selected hidden={defaultHidden.isHidden} value={defaultHidden.value}>{ defaultHidden.title }</option> }
            { renderOptionElements() }
        </select>
    );
};


export default FontPicker;