const ProductTablePanel = ({ products, filterText, onlyStock }) => {
    let lastCategory
    const row = []

    products.forEach(prod => {
        if (prod.category !== lastCategory) {
            row.push(
                <tr>
                    <th colSpan="2">{prod.category}</th>
                </tr>
            )
        }

        row.push(
            <tr>
                <td>
                    {prod.stocked ?
                        prod.name :
                        <span style={{ color: "red" }}>{prod.name}</span>}
                </td>
                <td>{prod.price}</td>
            </tr>
        )

        lastCategory = prod.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{row}</tbody>
        </table>
    );
}

export default ProductTablePanel;