# Kiểm tra không thấy: npm -v

Bước 1: tạo folder - react-tutorial
Bước 2: mở new terminal
Bước 3: npm create vite .

- tạo dự ngay chính folder react-tutorial này

# Kiểm tra có npm

- npm create vite

# Cách mở nhanh terminal trong vscode: ctrl + `

# Chỉ có 1 folder làm việc trong vscode thôi

# npm i && npm run dev

- npm: (node package manager) quản lý các thư viện của nodejs
- nodejs: môi trường để có thể chạy được js

- npm install | npm i : cài đặt các thư viện cần thiết cho dự án
??? Làm sao để biết thư viện cần cài đặt là thư viện nào
- dựa vào file package.json: mô tả dự án của chúng ta

- các thư viện được liệt kê ở dependencies + devDependencies

- dependencies vs devDependencies ???

- devDependencies: những thư viện chỉ phụ vụ cho dev phát triển ứng dụng.

- dependencies: những thư viện thật sự cần thiết của dự án.

- sau khi gõ npm i -> sinh ra 1 file package-lock.json
??? package.json vs package-lock.json

- package.json: liệt kê ra được khoảng version mà thư viện có thể cài đặt được.

- package-lock.json: cài chính xác version là bao nhiêu.

- node_modules: lưu trữ tất cả thư viện
- public: lưu trữ những file static (tĩnh) -> file audio, hình ảnh, logo, video, ...
- src: nơi làm việc chính của mình
- .gitignore: liệt kê những file, folder chúng ta không muốn lưu vào lịch sử commit, không muốn khác biết,...

- npm i: cài thư viện, tự động sinh ra folder node_modules cho chúng ta.
- .eslintrc: quy định của dự án.
- vite.config.js: tool để giúp chúng ta chạy được dự án.

# Để chạy dự án

- npm run dev -> đi vào sâu

# React

- Tên thẻ custom phải viết hoa chữ cái đầu
  - vì sao?
- Có 2 cách sử dụng thẻ custom
  - 1 mở 1 đóng
  - chỉ có mở -> kết thúc thẻ mở phải `/>`

- `class` -> `className`

- Phải có 1 thẻ bao bọc ngoài cùng trước khi return. ✅
- ❌ không được return về những thẻ song song hay cùng cấp nhau.

- binding data: Đưa giá trị của biến fullName lên trên giao diện. Dùng dấu `{}`

# node

- môi trường để thực thi js

# npm create vite

- tạo dự án mới react

# JSX

- js + html = jsx

# Inline Style

- style trong jsx chỉ nhận Object

# JSX vs HTML

Mọi event trong jsx đều viết dưới dạng camelCase: `on` viết thường chữ tiếp theo sẽ viết hoa.

- onClick: jsx
- onclick: js thuần

# Arrow Function

# useState

- tạo biến là state của component.
khi biến đó thay đổi thì UI được cập nhật.

- phải dùng useState để tạo state của component, và cập nhật state đó
bằng cách sử dụng hàm cập nhật lại state do useState trả về.

```js
const [bgc, setBgc] = useState('green');
```

> Tóm lại sử dụng useState khi chúng ta cần UI thay đổi khi giá trị của biến thay đổi. \n
> state -> UI

# Render Image, Audio, Icon, Svg, Video

- lưu tại folder public -> /tới folder đó là xong

- không lưu tại folder public thì phải dùng import để lấy đường dẫn

# Module CSS

- lý do: css thông thường sẽ ảnh hưởng ở phạm vi global
-

# Tailwind CSS

v3 vs v4: khác cách cài đặt

# npm i -D: cài đặt cho thư viện ở dưới phần devDependencies

# npm i -D vite@latest: cài version mới nhất

# npm i -D vite@6.2.0: cài đúng version mong muốn

# Props

- Khi chúng ta muốn truyền dữ liệu từ component cha vào component con.

- Không có chiều ngược lại đó là truyền dữ liệu con ra cha. (**note vẫn có trick để làm được - nâng cao)

# Cách tạo component (SOLID)

- Khi định nghĩa component thì những props phải tuân theo nguyên tắc:

- Chỗ nào cần dữ liệu động thì chúng ta sẽ định nghĩa tên prop cho dữ liệu đó.
- Không được phụ thuộc vào nơi mình sử dụng.
- Hay là api trả về.
- Phải để người sử dụng tuân theo component của mình. Ngược lại thì component sai (lỏ) ❌.

# Khi state thay đổi

- thì cả component chạy lại.
- component cha chạy lại -> component con chạy lại.
- Khi giá trị mới === giá trị cũ thì react sẽ không cập nhật state => không re-render => không cập nhật UI
