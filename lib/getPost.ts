// tekil veriyi alıyoruz buradan id özelinde

import axios from "axios";

export async function getPost(id: string) {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    // console.log(res);
    return res?.data;
  } catch (error) {
    console.log(error);
    throw new Error("Api error");
  }
}
