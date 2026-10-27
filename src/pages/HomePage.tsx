import { useEffect, useMemo, useReducer, useState } from "react"
import Gallary from "../components/Gallary"
import Navbar from "../components/Navbar"
import useFetchPhotos from "../hooks/useFetchPhotos"
import type { imageData } from "../services/FetchImage"

const FAVORITES_STORAGE_KEY = "favoritePhotos"

type FavoriteAction = { type: "TOGGLE_FAVORITE"; payload: imageData }

const initialState: imageData[] = []

const loadFavorites = (): imageData[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (!stored) return []
    const parsed: unknown = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed as imageData[] : []
  } catch {
    return []
  }
}

const reducer = (state: imageData[], action: FavoriteAction): imageData[] => {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const isFavorite = state.some((photo) => photo.id === action.payload.id)
      return isFavorite
        ? state.filter((photo) => photo.id !== action.payload.id)
        : [...state, action.payload]
    }
    default:
      return state
  }
}

const HomePage = () => {
  const { photos, loading, error } = useFetchPhotos()
  const [favPhotos, dispatch] = useReducer(reducer, initialState, loadFavorites)
  const [view, setView] = useState<"all" | "favorites">("all")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favPhotos))
    } catch {
      // localStorage can be unavailable (e.g. private mode); favorites still work in memory
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