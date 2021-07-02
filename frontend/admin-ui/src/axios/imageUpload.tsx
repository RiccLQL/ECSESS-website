import axios from "axios";

export async function upload(image: string): Promise<string> {
    const url = `${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`;
    let formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", "ml_default");
    const config = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    const response = await axios.post(url, formdata, config);
    return response.data.secure_url;
}