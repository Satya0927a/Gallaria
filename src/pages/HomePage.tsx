import { useEffect, useMemo, useState } from "react"
import Gallary from "../components/Gallary"
import Navbar from "../components/Navbar"
import useFetchPhotos from "../hooks/useFetchPhotos"
import type { imageData } from "../services/FetchImage"
import useFavorities, { FAVORITES_STORAGE_KEY } from "../hooks/useFavorites"



const HomePage = () => {
  const { photos, loading, error } = useFetchPhotos()
  const { favPhotos, dispatch } = useFavorities()
  const [view, setView] = useState<"all" | "favorites">("all")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favPhotos))
    } catch {
      console.error("couldnt store to the localstorage");
    }
  }, [favPhotos])

  const visiblePhotos: imageData[] = useMemo(() => {
    const sourcePhotos = view === "favorites" ? favPhotos : photos
    if (!search) return sourcePhotos
    return sourcePhotos.filter((photo) => photo.author.toLowerCase().startsWith(search.toLowerCase()))
  }, [view, favPhotos, photos, search])

  const toggleFavorite = (photo: imageData) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: photo })
  }
  return (
    <div>
      <Navbar view={view} setView={setView} search={search} setSearch={setSearch} />
      <Gallary
        photos={visiblePhotos}
        loading={loading}
        error={error}
        favorites={favPhotos}
        onToggleFavorite={toggleFavorite}
        emptyMessage={view === "favorites" ? "No favorite photos yet" : "No photos found"}
      />
    </div>
  )
}
export default HomePage;