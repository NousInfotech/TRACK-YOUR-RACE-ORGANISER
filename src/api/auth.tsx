import axios, { AxiosResponse } from "axios";
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
});


// // Person - contact person, legal advisor, bankers
// export const useGetOperatingMutation = (
//   client_id: string,
//   props?: UseQueryOptions<AxiosResponse, Error, AxiosResponse>
// ): UseQueryResult<AxiosResponse, Error> => {
//   return useQuery<AxiosResponse, Error>({
//     queryKey: ["operating", client_id],
//     queryFn: () =>
//       dInstance.get<AxiosResponse>(`/get-operating-information/${client_id}`),
//     enabled: !!client_id,
//     ...props, // Spread the props, including onSuccess
//   });
// };



// Operating Information
// export const useUpsertOperatingMutation = (
//   props?: UseMutationOptions<
//     AxiosResponse,
//     Error,
//     { client_id: string; data: BusinessSchema }
//   >
// ): UseMutationResult<
//   AxiosResponse,
//   Error,
//   { client_id: string; data: BusinessSchema }
// > => {
//   return useMutation<
//     AxiosResponse,
//     Error,
//     { client_id: string; data: BusinessSchema }
//   >({
//     mutationFn: ({ data, client_id }) =>
//       dInstance.post<AxiosResponse>(
//         `/update-operating-information/${client_id}`,
//         data
//       ),
//     ...props,
//   });
// };
