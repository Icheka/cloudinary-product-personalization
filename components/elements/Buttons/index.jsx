export const DefaultButton = ({ title, onClick }) => {
    return (
        <button
            className={`bg-orange rounded-sm px-5 py-1 text-white flex flex-row items-center justify-center outline-none focus:ring-2 focus:ring-yellow-300`}
            onChange={ e => onChange ? onChange : null }
        >
            { title }
        </button>
    );
};