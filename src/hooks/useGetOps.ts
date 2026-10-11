import { useQuery } from "@tanstack/react-query";

const GET_OP_ENDPOINT_URL = "https://frontend-challenge.veryableops.com/";

const getOpsQueryKey = ["getOps"] as const;

export function useGetOps() {
  return useQuery({
    queryKey: getOpsQueryKey,
    queryFn: () => fetch(GET_OP_ENDPOINT_URL).then((res) => res.json()),
  });
}
