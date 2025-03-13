import { CarItem } from "./CarItem";

const listCar = [
  {
    id: 1,
    name: "black car",
    price: 200,
    image: "/products/black-car.jpg",
  },
  {
    id: 2,
    name: "red car",
    price: 200,
    image: "/products/red-car.jpg",
  },
  {
    id: 3,
    name: "silver car",
    price: 200,
    image: "/products/silver-car.jpg",
  },
];

console.log(
  [1, 2, 3].map((item) => {
    return `item: ${item * 4}`;
  })
);

export function ListCar() {
  return (
    <div className="grid grid-cols-3 gap-4 m-8">
      {listCar.map((car) => {
        return (
          <CarItem
            // Yêu cầu của react, giúp react tăng performance
            key={car.id}
            src={car.image}
            name={car.name}
            price={car.price}
          />
        );
      })}
    </div>
  );
}

const sum = (a, b) => {
  return a + b;
};

const sum2 = (a, b) => a + b;
