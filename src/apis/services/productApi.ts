import apiRoutes from "../apiRoutes";
import axiosInstance from "../axiosInstance";

const getProducts = async () => {
    const response = await axiosInstance.get(apiRoutes.PRODUCT.LIST)
    return response.data;
}

export { getProducts }