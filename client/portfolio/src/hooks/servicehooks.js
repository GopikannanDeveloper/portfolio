import { useQuery, useMutation } from '@tanstack/react-query';
import api from '../apis/apiService';

// Generic hook for fetching data
export function useFetchData({ key, url, action, dispatch }) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get(url);
      if (action) {
        dispatch(action(data?.data));
      }
      return data;
    },
  });
}

// Generic hook for conditional fetching
export function useFetchDataByCondition({ key, url, enabled }) {
  return useQuery({
    enabled: enabled,
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get(url);
      return data;
    },
  });
}

// Hook for posting data
export function usePostData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const response = await api.post(url, data, config);
      return response.data;
    },
  });
}

// Hook for putting (updating) data
export function usePutData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const response = await api.put(url, data, config);
      return response.data;
    },
  });
}

// Hook for posting form data
export function usePostFormData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (formData) => {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const response = await api.post(url, formData, config);
      return response.data;
    },
  });
}

// Hook for putting form data
export function usePutFormData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (formData) => {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const response = await api.put(url, formData, config);
      return response.data;
    },
  });
}

// Hook for deleting data
export function useDeleteData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async () => {
      const response = await api.delete(url);
      return response.data;
    },
  });
}

// Hook for posting image data
export function usePostImageData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const response = await api.post(url, data, config);
      return response.data;
    },
  });
}

// Hook for putting image data
export function usePutImageData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const response = await api.put(url, data, config);
      return response.data;
    },
  });
}
