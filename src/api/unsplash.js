import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID 44294ddf461e86ee81b7ab58c9e313f288d9f2b5ac950503aed29399c3ac32d0`
  }
});
