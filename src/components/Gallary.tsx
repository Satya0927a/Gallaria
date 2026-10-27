import ImageCard from "./ImageCard"
import Loader from "./Loader"
import useFetchPhotos from "../hooks/useFetchPhotos"
import { GlobeOffIcon } from "lucide-react"

const Gallary = () => {
  const { photos, loading, error } = useFetchPhotos()
  if (loading) {
    return <Loader />
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
    <div className=" min-h-dvh pt-22 px-5">
      {loading && <Loader />}
      {!loading && (
        <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {photos.map((d) => <ImageCard key={d.id} image={d} />)}
        </section>
      )}
    </div>
  )
}
export default Gallary