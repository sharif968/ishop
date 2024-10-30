import { useQuery } from "@tanstack/react-query";
import instance from "../api/apiClient";

export const useCategoryProducts = ({category}) => {
    return useQuery({
        queryKey: ['category' , categoryProducts],  
        queryFn: async () => {
            const { data } = await instance.get(`/products/category/${category}`);
          return data ;
        },
      });
}
   