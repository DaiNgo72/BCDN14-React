/**
 * Mình sẽ quy định component của mình sẽ có những props nào
 * - Không được phụ thuộc vào nơi mình sử dụng
 * - Hay là api trả về
 */

/**
 * props
 * - name
 * - image
 *
 * - onClickDetail
 * - onClickAddToCart
 */

export function CardItem(props) {
  return (
    <>
      <div className="border border-solid border-black rounded-lg p-6">
        <img
          className="w-[200px] h-[200px] object-cover mx-auto"
          alt=""
          src={props.image}
        />

        <h2 className="font-bold text-[30px]">{props.name}</h2>

        <button
          onClick={props.onClickDetail}
          className="bg-green-700 text-white px-[12px] py-[8px] rounded-lg cursor-pointer"
        >
          Xem chi tiết
        </button>
        <button
          onClick={props.onClickAddToCart}
          className="ml-[8px] bg-red-700 text-white px-[12px] py-[8px] rounded-lg cursor-pointer"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </>
  );
}
