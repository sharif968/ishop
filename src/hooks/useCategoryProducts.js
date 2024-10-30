import { useQuery } from "@tanstack/react-query";
import instance from "../api/apiClient";

export const useCategoryProducts = ({categoryTitle}) => {
    return useQuery({
        queryKey: [ "categoryTitle"],  
        queryFn: async () => {
            const { data } = await instance.get(`/products/category/${categoryTitle}`);
          return data ;
        },
      });
}
   