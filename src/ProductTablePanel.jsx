const ProductTablePanel = ({ products, filterText, onlyStock }) => {
    let lastCategory
    const row = []

    products.forEach(prod => {
        if (prod.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
            return
        }

        if (onlyStock && !prod.stocked) return

        if (prod.category !== lastCategory) {
            row.push(
                <tr key={prod.category}>
                    <th colSpan="2">{prod.category}</th>
                </tr>
            )
        }

        row.push(
            <tr key={prod.name}>
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