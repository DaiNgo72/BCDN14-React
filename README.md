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
- Giá trị mới phải khác giá trị cũ thì react mới re-render hay là cập nhật lại giao diện

# [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

- Giúp chúng ta lưu trữ dữ liệu cho dù người dùng có reload lại trang web. (theme, config của trang web mình như font chữ, ...)

- 2 method cần nắm:

1. getItem: truyền key vào để lấy giá trị.
2. setItem: truyền key và giá trị của key đó.

- Chỉ chấp nhận lưu giá trị dưới định dạng string

# JSON

- JSON là string
- Khác string là JSON nó có format nhất định để biểu diễn các kiểu dữ liệu của JS.

- 2 method cần nắm:

1. stringify: chuyển đổi kiểu dữ liệu của JS bất kỳ -> string
2. parse: chuyển đổi JSON(string) -> về kiểu dữ liệu của JS

# Deep clone

# Function làm bước trung gian

# State

- các component Count độc lập về state
- Khi `Count 1` thay đổi thì `Count 2`, `Count 3` không bị ảnh hưởng.

```jsx
    <Count />
    <Count />
    <Count />
```

# Life cycle

- Vòng đời của component

1. Sinh ra (mounting)

- Lần đầu xuất hiện trên giao diện

2. Trưởng thành (updating)

- Khi props hoặc state thay đổi

3. Mất (un-mounting)

- Xóa khỏi giao diện

# useEffect

- Can thiệp vào từng vòng đời của component để xử lý.

```js

const useEffect = ( callback, dependencies ) => {

  // Chạy sau khi UI được render xong
  callback()

}

```

- Giống nhau: mọi trường hợp callback luôn được gọi mỗi khi mounting

- callback:
- dependencies:

1. undefined - callback được gọi mỗi lần re-render (0.1%)

```js
// lỗi hay gặp cần tránh
const [c, setC] = useState(0);

useEffect(()=>{
  setC(c + 1);
});
```

2. [] - callback chỉ chạy một lần duy nhất (mounting) - (50%)

- không có sự phụ thuộc vào cái gì hết nên nó chỉ chạy 1 lần duy nhất duy nhất thông

*Use case*:
  2.1. sử dụng để call api khi mới vừa vào trang web.
  2.2. sử dụng để thêm sự kiện cho đối tượng document hoặc body.

3. [<giá_trị_1>, <giá_trị_2>] - (50%)

- callback sẽ chạy khi <giá_trị_1> hoặc <giá_trị_2> thay đổi khi so sánh trước và sau (render)

4. Un-mounting - pending

- khi vào 1 component đăng ký sự kiện thì sau khi component đó biến mất thì phải xóa sự kiện đăng ký đó.
- cleanup: dọn dẹp cho lần render trước đó.

## Rules

- Tạo component thì dùng declaration function
- Những hàm xử lý trong component thì sử dụng arrow function

# Cách để lấy một element trên UI bằng React

# Deep Clone

```js
const clone = JSON.parse(JSON.stringify(data))
```

# SetState có phải là bất đồng bộ hay không

- setState chạy như cơ chế bất đồng bộ

# nếu như setState chạy đồng bộ thì sao?

- performance kém vì phải re-render nhiều lần

# Event Bubbling vs capturing

<https://javascript.info/bubbling-and-capturing#stopping-bubbling>

---

# Deploy server - FREE (render.com, netlify.com, vercel.com, ...)

- build
- minify: làm nhỏ kích thước file lại
- network
- đường dẫn

# Routing

- SPA
- HTML - MPA
- react-router

# Bundle Code

- vite
- webpack

# Single Page Application
- 1 trang web chỉ có 1 trang HTML duy nhất
- Sử dụng js để render ra nhiều trang web khác nhau
- Tránh reload lại trang web nhiều nhất có thể

# Multiple Page Application


# BrowserRouter
- Quản lý history của app

# Routes vs Route

# element vs Component

# a vs Link
- a: reload trang
- Link: không reload trang web

# Outlet
- Render route con của bên trong route cha
- nesting - lồng nhau


# Link vs NavLink
- Link: không có trạng thái
- NavLink có trạng thái

# useNavigate vs Link | NavLink
- useNavigate: muốn xử lý trước khi quyết định di chuyển trang
- Link | NavLink: click phát là đi ngay luôn

# Cách thành phần của url