import { useQuery } from '@tanstack/react-query';
import instance from '../api/apiClient';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],  
    queryFn: async () => {
      const { data  } = await instance.get('/products');
      return data ;
    },
  });
};