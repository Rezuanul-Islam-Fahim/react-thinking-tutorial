const SearchPanel = ({
    filterText,
    onChangeFilterText,
    onlyStock,
    onChangeOnlyStock
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onChangeFilterText(e.target.value)} />
            <br />
            <input
                type="checkbox"
                value={onlyStock}
                onChange={(e) => onChangeOnlyStock(e.target.checked)} />
            {' '} Only show products in stock
            <br />
            <br />
        </form>
    );
}

export default SearchPanel;