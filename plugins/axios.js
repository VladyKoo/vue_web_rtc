import axios from "axios";

export default {
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL,
    })
  }
};