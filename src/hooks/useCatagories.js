import { useQuery } from "@tanstack/react-query";
import instance from "../api/apiClient";

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],  
        queryFn: async () => {
          const { data  } = await instance.get('/products/categories');
          return data ;
        },
      });
}
   