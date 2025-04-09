import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "006c9922630d4b19ba01e69f15e0a92a",
  },
});

export { CanceledError };
