import { useState } from "react";
import { CardDetail } from "./CardDetail";
import { CardList } from "./CardList";
import { Cart } from "./Cart";

const mangSanPham = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/phone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0(Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/phone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraTruoc: "7 MP",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/phone/applephone.jpg",
  },
];

export function PhoneShop() {
  // state không có chạy lại
  // Không có khai báo lại mới
  const [phoneDetail, setPhoneDetail] = useState(mangSanPham[2]);

  // Mỗi khi reload lại trang
  // b1: kiểm tra localStorage có lưu giá trị carts hay không
  // b2: nếu có thì giá trị default của carts là giá trị lưu trong localStorage
  // b3: nếu không có thì là mảng rỗng []
  const [carts, setCarts] = useState(() => {
    let carts = localStorage.getItem("carts");

    if (carts) {
      return JSON.parse(carts);
    } else {
      return [];
    }
  });

  console.log("re-run");

  // Khi component re-render
  // Thì nó sẽ khởi tạo mới lại từ đầu
  let count = 10;

  console.log("carts:::", carts);

  const handleAddToCart = (product) => {
    let newCarts;

    const findItem = carts.find((item) => {
      return item.maSP === product.maSP;
    });

    if (findItem) {
      // đã có trong giỏ hàng
      // Thử code tính năng
      const cloneArr = [...carts];

      const findItem = cloneArr.find((cart) => {
        return cart.maSP === product.maSP;
      });

      // Cập nhật lại giá trị của thuộc tính
      findItem.soLuong += 1;

      // setCarts(cloneArr);
      newCarts = cloneArr;
    } else {
      // Chưa có trong giỏ hàng
      //   C1:
      // carts.push({
      //   ...product,
      //   soLuong: 1,
      // });

      // setCarts([...carts]); // 0x222

      // C2:
      newCarts = [
        ...carts, // copy tất cả các element của carts

        // thêm mới một phần tử vào trong mảng hiện tại, thêm vào cuối mảng.
        {
          ...product,
          soLuong: 1,
        },
      ];
    }

    // setCarts(newCarts);

    // // array, object => localStorage => number, string, boolean, null, undefined
    // // để lưu string

    // // JSON: string, có định dạng format cụ thể
    // // " { "age": 20 } "

    // localStorage.setItem("carts", JSON.stringify(newCarts));

    handleUpdateCarts(newCarts);
  };

  const handleUpdateCarts = (newCarts) => {
    localStorage.setItem("carts", JSON.stringify(newCarts));
    setCarts(newCarts);
  };

  return (
    <>
      <h1 className="text-4xl text-center mb-8">Bài tập giỏ hàng</h1>

      <div className="text-end container mx-auto mb-8">
        <Cart data={carts} setCarts={handleUpdateCarts} />
      </div>

      <CardList
        handleAddToCart={handleAddToCart}
        setPhoneDetail={setPhoneDetail}
        listProduct={mangSanPham}
      />

      <br />
      <CardDetail
        name={phoneDetail.tenSP}
        image={phoneDetail.hinhAnh}
        screen={phoneDetail.manHinh}
        os={phoneDetail.heDieuHanh}
        frontCamera={phoneDetail.cameraTruoc}
        backCamera={phoneDetail.cameraSau}
        ram={phoneDetail.ram}
        rom={phoneDetail.rom}
      />
    </>
  );
}
