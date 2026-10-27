import ImageCard from "./ImageCard"
import Loader from "./Loader"
import { GlobeOffIcon, ImageOff } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { imageData } from "../services/FetchImage"
import { memo } from "react"

const Gallary = ({ photos, loading, error, favorites, onToggleFavorite, emptyMessage = "No photos found", emptyDescription = "Try adjusting your search.", emptyIcon: EmptyIcon = ImageOff }: {
  photos: imageData[],
  loading: boolean,
  error: string | null,
  favorites: imageData[],
  onToggleFavorite: (photo: imageData) => void,
  emptyMessage?: string,
  emptyDescription?: string,
  emptyIcon?: LucideIcon
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
      {photos.length != 0 ? (
        <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {photos.map((d) => (
            <ImageCard
              key={d.id}
              image={d}
              isFavorite={favorites.some((photo) => photo.id === d.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </section>
      ) : (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-full bg-neutral-100 p-4 text-neutral-400 ring-1 ring-neutral-200">
            <EmptyIcon className="size-8" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-neutral-800">{emptyMessage}</p>
            <p className="text-sm text-neutral-500">{emptyDescription}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default memo(Gallary)