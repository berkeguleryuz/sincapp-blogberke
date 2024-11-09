// tüm veriyi burada alıyoruz
import axios from "axios";

export async function getPosts() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res?.data);
    return res?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Api error");
  }
}
