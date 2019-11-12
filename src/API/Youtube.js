import Axios from "axios";

const KEY = "AIzaSyDiPnd65V9s0vxKSp6QgC0oS4BMHt7U8C0";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})