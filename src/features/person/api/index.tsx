import axiosInstance from "../../../axios";

export const getPersons = async () => {
  const response = await axiosInstance.get("/persons", {
    params: {
      quantity: 50,
    },
  });

  return response.data;
};
