import { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import fetchImage, { type imageData } from "../services/FetchImage"

const Gallary = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setdata] = useState<imageData[]>([]);
  useEffect(() => {
    const runFetch = async () => {
      try {
        setloading(true);
        const data = await fetchImage()
        setdata(data)
      } catch (error) {
        console.log(error);
      }
      finally {
        setloading(false)
      }
    }
    runFetch()
  }, [])
  return (
    <div className=" min-h-dvh pt-22 px-5">
      <section className="flex gap-15 flex-wrap justify-center">
        {loading && <Loader />}
        {!loading && data.map((d) => <ImageCard image={d} />)}
      </section>
    </div>
  )
}
const Loader = () => {
  return (
    <div>
      loading
    </div>
  )
}
export default Gallary