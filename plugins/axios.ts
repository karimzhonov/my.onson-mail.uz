import axios, { type AxiosResponse, type AxiosRequestConfig, type AxiosError } from "axios";
import { token } from "~/composables";
import { useToast } from "~/components/ui/toast";

const { toast } = useToast()

export default defineNuxtPlugin(() => {
  const {
    public: { NUXT_APP_BACKEND_HOST },
  } = useRuntimeConfig();

  const api = axios.create({
    baseURL: NUXT_APP_BACKEND_HOST,
  });

  const request = async (
    method: string,
    url: string,
    data: any | null,
    config: AxiosRequestConfig = {},
    toasted: boolean = true
  ): Promise<AxiosResponse | undefined> => {
    config.url = url;
    config.method = method;
    config.data = data;
    config.headers = {
      Authorization: `Bearer ${token.value.access}`,
    }
    try {
      const response = await api.request(config);
      if (toasted) {
        toast({title: "Операция выполнена успешно"})
      }
      return response
    } catch (e: unknown) {
      const error = e as AxiosError
      if (error.response?.status == 401) {
        if (token.value.refresh) {
          const { data } = await api.post("/oauth/refresh/", {
            refresh: token.value.refresh,
          });
          token.value = data
          return await request(method, url, config.data, config)
        }
        window.location.href = `https://auth.onson-mail.uz?next=${window.location.origin}`
      }
      const message = Object.values(error.response?.data ?? {}).map(v => typeof v === 'string' ? v : v.join('. ')).join('. ')
      toast({title: message, variant: 'destructive',})
      throw e
    }
  };

  return {
    provide: {
      api: {
        get: async (url: string, config: AxiosRequestConfig = {}) => await request('get', url, null, config, false),
        post: async (url: string, data: any, config: AxiosRequestConfig = {}, toasted=true) => await request('post', url, data, config, toasted),
        patch: async (url: string, data: any, config: AxiosRequestConfig = {}, toasted=true) => await request('patch', url, data, config, toasted),
        delete: async (url: string, config: AxiosRequestConfig = {}, toasted=true) => await request('delete', url, null, config, toasted),
      }
    },
  };
})
