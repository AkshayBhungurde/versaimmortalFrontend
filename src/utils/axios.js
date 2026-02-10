import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

api.interceptors.response.use(
  res => res,
  async err => {
    if (err.response.status === 401) {
      try {
        const refresh = localStorage.getItem("refresh");
        const res = await axios.post("http://localhost:5000/admin/refresh", {
          refreshToken: refresh
        });
        localStorage.setItem("token", res.data.accessToken);
        err.config.headers.Authorization = res.data.accessToken;
        return axios(err.config);
      } catch {
        localStorage.clear();
        window.location = "/admin";
      }
    }
    return Promise.reject(err);
  }
);

export default api;
