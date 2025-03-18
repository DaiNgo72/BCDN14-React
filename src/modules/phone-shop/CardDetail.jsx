/**
 * props:
 * - screen
 * - os
 * - frontCamera
 * - backCamera
 * - ram
 * - rom
 * - name
 * - image
 */

export function CardDetail(props) {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr]">
        <div className="left">
          <h2 className="text-3xl text-center">{props.name}</h2>

          <img src={props.image} />
        </div>

        <div className="right">
          <h2 className="mb-4 text-3xl">Thông số kỹ thuật</h2>

          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 py-3">
            <p>Màn hình</p>
            <p>{props.screen}</p>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 py-3">
            <p>Hệ điều hành</p>
            <p>{props.os}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 py-3">
            <p>Camera trước</p>
            <p>{props.frontCamera}</p>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 py-3">
            <p>Camera sau</p>
            <p>{props.backCamera}</p>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 py-3">
            <p>RAM</p>
            <p>{props.ram}</p>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-t border-solid border-gray-500 py-3">
            <p>ROM</p>
            <p>{props.rom}</p>
          </div>
        </div>
      </div>
    </>
  );
}
