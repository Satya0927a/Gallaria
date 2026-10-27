import { Heart } from "lucide-react"
import type { imageData } from "../services/FetchImage"

const ImageCard = ({ image, isFavorite, onToggleFavorite }: {
  image: imageData,
  isFavorite: boolean,
  onToggleFavorite: (photo: imageData) => void
}) => {
  const liked = isFavorite

  return (
    <figure className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-900 shadow-md ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={image.download_url}
        alt={`image by ${image.author}`}
        loading="lazy"
        className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white drop-shadow-sm">
            {image.author}
          </p>
          <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">
            Photographer
          </p>
        </div>

        <button
          type="button"
          onClick={() => onToggleFavorite(image)}
          aria-label={liked ? "Unlike image" : "Like image"}
          aria-pressed={liked}
          className="shrink-0 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-md ring-1 ring-white/25 transition duration-300 hover:bg-white/25 hover:ring-white/40 active:scale-90"
        >
          <Heart
            size={18}
            className={`transition-transform duration-300 ${liked ? "scale-110 fill-rose-500 text-rose-500" : ""
              }`}
          />
        </button>
      </figcaption>
    </figure>
  )
}
export default ImageCard
