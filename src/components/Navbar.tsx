import { HeartIcon, SearchIcon } from "lucide-react"

const Navbar = ({ view, setView, setSearch }: {
  view: "all" | "favorites",
  setView: React.Dispatch<React.SetStateAction<"all" | "favorites">>,
  search: string, setSearch: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <nav className=" fixed top-0 z-10 w-full  bg-white">
      <div className="flex flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
        <section>
          <ul className="flex items-center gap-4 text-base sm:gap-10 sm:text-lg">
            <li>
              <button
                type="button"
                onClick={() => setView("all")}
                className={view === "all" ? "font-semibold text-black" : "text-neutral-500"}
              >
                All
              </button>
            </li>
            <li aria-hidden="true">|</li>
            <li>
              <button
                type="button"
                onClick={() => setView("favorites")}
                className={`flex items-center gap-1 ${view === "favorites" ? "font-semibold text-black" : "text-neutral-500"}`}
              >
                <HeartIcon className="size-5 sm:size-6" />
                Favorites
              </button>
            </li>
          </ul>
        </section>

        <section className="w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <SearchIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
            <input
              onChange={(e) => { setSearch(e.target.value.trim()) }}
              className="w-full rounded-xl border p-2 pl-8"
              type="text"
              placeholder="Search author name"
              aria-label="Search by author name"
            />
          </div>
        </section>
      </div>
    </nav>
  )
}
export default Navbar