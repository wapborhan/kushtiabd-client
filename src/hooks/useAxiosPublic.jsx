import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "",
  });
  return axiosPublic;
};

export default useAxiosPublic;
