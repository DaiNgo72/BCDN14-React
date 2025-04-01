export function BaseTemplate() {
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Facebook</h1>

        <nav className="mt-2">
          <a href="/watch" className="mr-4 text-white hover:underline">
            Watch
          </a>
          <a href="/marketplace" className="text-white hover:underline">
            Marketplace
          </a>
        </nav>
      </header>


      

      <footer className="bg-gray-800 text-white p-4 text-center">
        Footer Facebook
      </footer>
    </>
  );
}
