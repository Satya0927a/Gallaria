import { useReducer } from "react";
import type { imageData } from "../services/FetchImage";

export const FAVORITES_STORAGE_KEY = "favoritePhotos"

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
const useFavorities = () => {
  const [favPhotos, dispatch] = useReducer(reducer, initialState, loadFavorites)

  return { favPhotos, dispatch }
}
export default useFavorities