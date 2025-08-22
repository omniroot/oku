import { CONSTS } from "@/shared/consts.ts";
import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchInterval: CONSTS.REFETCH_INTERVAL,
      staleTime: CONSTS.STALE_TIME,
      refetchOnWindowFocus: false,
      retryDelay: 1000,
      retry: 2,
    },
  },
});
