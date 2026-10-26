import axios from "axios";
export interface imageData {
  id: string,
  author: string,
  width: string,
  height: string,
  url: string,
  download_url: string
}

const url: string = "https://picsum.photos/v2/list?limit=30";

const fetchImage = async (): Promise<imageData[]> => {
  const response = await axios.get<imageData[]>(url);
  return response.data
}
export default fetchImage;