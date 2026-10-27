import ImageCard from "./ImageCard"
import Loader from "./Loader"
import { GlobeOffIcon } from "lucide-react"
import type { imageData } from "../services/FetchImage"

const Gallary = ({ photos, loading, error, favorites, onToggleFavorite, emptyMessage = "No photos found" }: {
  photos: imageData[],
  loading: boolean,
  error: string | null,
  favorites: imageData[],
  onToggleFavorite: (photo: imageData) => void,
  emptyMessage?: string
}) => {
  if (loading) {
    return (
      <div className=" min-h-dvh px-5 flex items-center justify-center">
        <div className=" flex gap-2 justify-center items-center p-2 rounded-2xl ">
          <Loader />
        </div>
      </div>
    )
  }
  if (error) {
    return (
      <div className=" min-h-dvh px-5 flex items-center justify-center">
        <div className="bg-red-200 flex gap-2 justify-center items-center p-2 rounded-2xl text-red-900">
          <GlobeOffIcon />
          <p>{error}</p>
        </div>
      </div>
    )
  }
  return (
    <div className=" min-h-dvh px-5 pt-32 sm:pt-22">
      <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
        {photos.length != 0 ? photos.map((d) => (
          <ImageCard
            key={d.id}
            image={d}
            isFavorite={favorites.some((photo) => photo.id === d.id)}
            onToggleFavorite={onToggleFavorite}
          />
        )) : <p>{emptyMessage}</p>}
      </section>
    </div>
  )
}
export default Gallary