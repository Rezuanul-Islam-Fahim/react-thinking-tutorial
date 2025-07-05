const ProductTablePanel = ({ products, filterText, onlyStock }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(v => (
                    <tr>
                        <td>{ v.name }</td>
                        <td>{ v.price }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTablePanel;