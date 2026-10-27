const Navbar = ({ view, setView, setSearch }: {
  view: "all" | "favorites",
  setView: React.Dispatch<React.SetStateAction<"all" | "favorites">>,
  search: string, setSearch: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <nav className=" fixed top-0 bg-white w-full flex justify-between p-5 items-center">
      <section>
        <ul className="flex  gap-10 text-lg">
          <li>
            <button
              type="button"
              onClick={() => setView("all")}
              className={view === "all" ? "font-semibold text-black" : "text-neutral-500"}
            >
              All
            </button>
          </li>
          <li>|</li>
          <li>
            <button
              type="button"
              onClick={() => setView("favorites")}
              className={view === "favorites" ? "font-semibold text-black" : "text-neutral-500"}
            >
              Favorites
            </button>
          </li>
        </ul>
      </section>

      <section className="flex gap-2">
        <input onChange={(e) => { setSearch(e.target.value.trim()) }} className="border p-2" type="text" placeholder="Search" />
      </section>
    </nav>
  )
}
export default Navbar