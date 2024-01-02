const ProductInfo = ({ items, category }) => {
  const fruits = items.filter((item) => item.category === category);
  return fruits.map((e, index) => (
    <tr key={index}>
      <td> {index + 1} </td>
      <td> {e.name} </td>
      <td> {e.price} </td>
    </tr>
  ));
};

export default ProductInfo;
