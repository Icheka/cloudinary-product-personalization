import { FaCaretDown } from 'react-icons/fa';


const ColorDropPicker = props => {
    return (
        <span className={`flex flex-row justify-between items-center border border-gray-500 bg-gray-200`} style={{ width: 52, padding: `10px auto` }}>
            <input
                type={`color`}
                style={{ width: 32, height: 32 }}
                className={`outline-none`}
            />
            <FaCaretDown size={12} />
        </span>
    );
};


export default ColorDropPicker;