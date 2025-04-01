export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800 font-sans">
      <h1 className="text-3xl mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-500">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
