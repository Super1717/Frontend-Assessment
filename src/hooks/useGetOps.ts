import { useQuery } from "@tanstack/react-query";
import type { Op } from "@/types/ops";

const GET_OP_ENDPOINT_URL = "https://frontend-challenge.veryableops.com/";

const getOpsQueryKey = ["getOps"] as const;

export function useGetOps() {
  return useQuery<Op[]>({
    queryKey: getOpsQueryKey,
    queryFn: () => fetch(GET_OP_ENDPOINT_URL).then((res) => res.json()),
  });
}
