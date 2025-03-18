import { CardItem } from "./CardItem";

export function CardList(props) {
  // props.setPhoneDetail
  return (
    <>
      <div className="flex gap-4 justify-evenly">
        {props.listProduct.map((product) => {
          // product ✅
          // props
          return (
            <CardItem
              key={product.maSP}
              name={product.tenSP}
              image={product.hinhAnh}
              onClickDetail={() => {
                props.setPhoneDetail(product);
              }}
              onClickAddToCart={() => {
                props.handleAddToCart(product);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
