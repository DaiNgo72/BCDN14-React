export function Count() {
  return (
    <>
      <div className="text-lg font-bold mb-4">Count Component</div>

      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
        +
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        -
      </button>

      <h2 className="mt-4 text-xl">Current Count: 0</h2>
    </>
  );
}
