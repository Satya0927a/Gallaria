import { useEffect, useState } from "react"
import Gallary from "../components/Gallary"
import Navbar from "../components/Navbar"
import useFetchPhotos from "../hooks/useFetchPhotos"
import type { imageData } from "../services/FetchImage"

const HomePage = () => {
  const { photos, loading, error } = useFetchPhotos()
  const [search, setSearch] = useState<string>("")
  const filterPhotos: imageData[] = photos.filter((photo) => photo.author.toLowerCase().startsWith(search.toLowerCase()));
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Gallary photos={search ? filterPhotos : photos} loading={loading} error={error} />
    </div>
  )
}
export default HomePage;