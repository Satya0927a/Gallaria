import { useEffect, useState } from "react"
import type { imageData } from "../services/FetchImage"
import fetchImage from "../services/FetchImage";

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<imageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const runFetch = async () => {
      try {
        const data = await fetchImage()
        setPhotos(data)
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "Failed to fetch images")
      }
      finally {
        setLoading(false)
      }
    }
    runFetch()
  }, [])
  return { photos, loading, error }
}
export default useFetchPhotos;