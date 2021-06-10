const DefaultTextInput = ({
        className, onChange, placeholder, type, value,
        min, max
    }) => {
    return (
        <input
            type={type || `text`}
            className={`${className} default-styled-input`}
            onChange={ e => onChange ? onChange(e) : null }
            placeholder={placeholder || ''}
            value={ value ?? null }
            min={ min ?? 2 }
        />
    );
};


export default DefaultTextInput;