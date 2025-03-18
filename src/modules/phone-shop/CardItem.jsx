export function CardItem() {
  return (
    <>
      <div className="border border-solid border-black rounded-lg p-6">
        <img
          className="w-[200px] h-[200px] object-cover mx-auto"
          alt=""
          src="/phone/applephone.jpg"
        />

        <h2 className="font-bold text-[30px]">Iphone XS Max</h2>

        <button className="bg-green-700 text-white px-[12px] py-[8px] rounded-lg cursor-pointer">
          Xem chi tiết
        </button>
        <button className="ml-[8px] bg-red-700 text-white px-[12px] py-[8px] rounded-lg cursor-pointer">
          Thêm vào giỏ hàng
        </button>
      </div>
    </>
  );
}
