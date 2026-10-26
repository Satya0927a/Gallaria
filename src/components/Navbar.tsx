const Navbar = () => {
  return (
    <nav className=" fixed top-0 bg-white w-full flex justify-between p-5 items-center">
      <section>
        <ul className="flex  gap-10 text-lg">
          <li>All</li>
          <li>|</li>
          <li>Favorites</li>
        </ul>
      </section>

      <section className="flex gap-2">
        <input className="border p-2" type="text" placeholder="Search" />
        <button className="bg-gray-200 p-2 rounded-sm">filter</button>
      </section>
    </nav>
  )
}
export default Navbar