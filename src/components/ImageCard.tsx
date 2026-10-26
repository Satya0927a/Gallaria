import type { imageData } from "../services/FetchImage"

const ImageCard = ({ image }: { image: imageData }) => {
  return (
    <div className="bg-green-300 h-fit" >
      <img src={image.download_url} width={400} alt={`image by ${image.author}`} />
    </div>
  )
}
export default ImageCard