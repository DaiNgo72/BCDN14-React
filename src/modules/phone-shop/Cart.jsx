import { useState } from "react";

/**
 * props:
 * - data: list cart
 */
export function Cart(props) {
  const [open, setOpen] = useState(false);

  //   let sum = 0;

  //   props.data.forEach((product) => {
  //     sum += product.soLuong;
  //   });

  let sum = props.data.reduce((sum, product) => {
    return sum + product.soLuong;
  }, 0);

  const handleOpenCart = () => {
    setOpen(true);
  };

  const handleCloseCart = () => {
    setOpen(false);
  };

  const handleIncreQuantity = (id) => {
    const cloneArr = [...props.data];

    const findItem = cloneArr.find((p) => {
      return p.maSP === id;
    });

    findItem.soLuong += 1;

    props.setCarts(cloneArr);
  };

  // deep clone
  // salow clone
  const handleDecreQuantity = (id) => {
    // heap, stack: object array.

    // Copy đến từng item của mảng, => deep clone
    const cloneArr = props.data.map((product) => {
      return {
        ...product,
      };
    });

    const findItem = cloneArr.find((p) => {
      return p.maSP === id;
    });

    findItem.soLuong -= 1;

    if (findItem.soLuong > 0) {
      props.setCarts(cloneArr);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenCart}
        className="p-2 border rounded-sm cursor-pointer bg-blue-500 text-white"
      >
        Giỏ hàng ({sum})
      </button>

      {open && (
        <div className="w-[80vw] h-[80vh] border fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-auto">
          <button
            onClick={handleCloseCart}
            className="absolute -top-2 -right-2 p-2 rounded cursor-pointer"
          >
            X
          </button>

          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Mã sản phẩm</th>
                <th className="py-2 px-4 border-b">Hình ảnh</th>
                <th className="py-2 px-4 border-b">Tên sản phẩm</th>
                <th className="py-2 px-4 border-b">Số lượng</th>
                <th className="py-2 px-4 border-b">Đơn giá</th>
                <th className="py-2 px-4 border-b">Thành tiền</th>
              </tr>
            </thead>

            <tbody>
              {/* ctrl + I */}
              {props.data.map((product) => (
                <tr key={product.maSP} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-center">
                    {product.maSP}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <img
                      src={product.hinhAnh}
                      alt={product.tenSP}
                      className="w-[80px] h-[80px] object-cover mx-auto"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {product.tenSP}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        className="px-2 py-1 border rounded bg-gray-200"
                        onClick={() => {
                          handleDecreQuantity(product.maSP);
                        }}
                      >
                        -
                      </button>
                      <p className="p-2 border rounded">{product.soLuong}</p>
                      <button
                        className="px-2 py-1 border rounded bg-gray-200"
                        onClick={() => {
                          handleIncreQuantity(product.maSP);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {product.giaBan}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {product.giaBan * product.soLuong}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

// .map =>
// .reduce => 1 giá trị

let arr = [{ value: 1 }, { value: 2 }, { value: 6 }];
// -> 9

// c1
let sum = 100;

for (let i = 0; i < arr.length; i++) {
  // i:0, sum = 100, item = {value: 1}
  // i:1, sum = 101, item = {value: 2}
  // i:2, sum = 103, item = {value: 5}

  sum += arr[i].value;

  // i:0, sum = 101
  // i:1, sum = 103
  // i:2, sum = 108
}

// -- nhan duoc ket qua sum
//

// c2
let sum2 = arr.reduce((total, item, index) => {
  // index = 0; total = 100; item={value:1}
  // index = 1; total = 101; item={value: 2}
  // index = 2; total = 103; item={value: 6}
  return total + item.value; // 109
}, 100);

console.log(sum2);
