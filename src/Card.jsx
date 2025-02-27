/**
 * Giúp tôi link file css này vào trên file html
 */
import "./card.css";

/**
 * Tạo một custom thẻ của chính chúng ta
 * - Phải viết hoa chữ cái đầu
 */
export function Card() {
  /**
   * Return chính là nội dung mong muốn hiển thị lên trên giao diện khi sử dụng thẻ Card của chúng ta.
   */
  return (
    <div className="card">
      <h1>Card Title</h1>
      <p>Card content</p>

      <div>
        <button>Buy</button>
        <button>Sell</button>
      </div>
    </div>
  );
}
