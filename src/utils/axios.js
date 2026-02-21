// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000"
// });

// api.interceptors.response.use(
//   res => res,
//   async err => {
//     if (err.response.status === 401) {
//       try {
//         const refresh = localStorage.getItem("refresh");
//         const res = await axios.post("http://localhost:5000/admin/refresh", {
//           refreshToken: refresh
//         });
//         localStorage.setItem("token", res.data.accessToken);
//         err.config.headers.Authorization = res.data.accessToken;
//         return axios(err.config);
//       } catch {
//         localStorage.clear();
//         window.location = "/admin";
//       }
//     }
//     return Promise.reject(err);
//   }
// );

// export default api;




// import axios from "axios";

// // १. तुमची Render वरील बॅकएंड लिंक इथे टाका
// // उदाहरण: https://versaimmortal-api.onrender.com
// const BASE_URL =  process.env.REACT_APP_API_URL; 

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // २. REQUEST INTERCEPTOR: प्रत्येक रिक्वेस्ट सोबत आपोआप टोकन पाठवण्यासाठी
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // प्रोफेशनल स्टँडर्डनुसार 'Bearer ' प्रीफिक्स जोडला आहे
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // ३. RESPONSE INTERCEPTOR: टोकन एक्सपायर झाल्यावर (401 Error) रिफ्रेश करण्यासाठी
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // जर एरर 401 असेल आणि आपण आधीच रिफ्रेश करण्याचा प्रयत्न केला नसेल (_retry flag)
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refresh = localStorage.getItem("refresh");
        
//         if (!refresh) {
//           throw new Error("No refresh token available");
//         }

//         // रिफ्रेश टोकन कॉल (थेट axios वापरला आहे जेणेकरून इंटरसेप्टर लूपमध्ये अडकणार नाही)
//         const res = await axios.post(`${BASE_URL}/admin/refresh`, {
//           refreshToken: refresh,
//         });

//         // नवीन टोकन सेव्ह करा
//         const newToken = res.data.accessToken;
//         localStorage.setItem("token", newToken);

//         // मूळ विनंतीमध्ये नवीन टोकन जोडा आणि पुन्हा रन करा
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return axios(originalRequest);

//       } catch (refreshError) {
//         // जर रिफ्रेश टोकन सुद्धा एक्सपायर झाले असेल, तर सर्व काही पुसा आणि लॉगिनला पाठवा
//         console.error("Session expired. Please login again.");
//         localStorage.clear();
//         window.location.href = "/admin"; 
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;









import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
 
if (!BASE_URL) {
  console.error("REACT_APP_API_URL is not defined");
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/admin/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");
        if (!refresh) throw new Error("No refresh token");

        const res = await axios.post(`${BASE_URL}/admin/refresh`, {
          refreshToken: refresh,
        });

        const newToken = res.data.accessToken;
        localStorage.setItem("token", newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);

      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/admin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;