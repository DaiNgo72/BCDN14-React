export function CarItem(props) {
  return (
    <>
      <div className="border rounded-md px-10 py-5 shadow-md shadow-amber-300">
        <img className="w-[100px] aspect-square object-cover" src={props.src} />

        <p className="font-bold text-2xl">{props.name}</p>
        <p className="text-xl">{props.price}</p>
      </div>
    </>
  );
}
