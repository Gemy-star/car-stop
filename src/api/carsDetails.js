import axiosInstance from '../axios/axiosInstance';


export const getCarsDetails = () =>   {
   return axiosInstance.get('CustomerCarSellApi/GetMakeModels')
}