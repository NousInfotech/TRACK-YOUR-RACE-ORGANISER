import { useQueryClient } from "@tanstack/react-query";
function useFetchData() {
  const queryClient = useQueryClient();

  const refectUser = () => {
    queryClient.invalidateQueries({ queryKey: ["sample"] });
  };

  // const refectOtherEmployee = (id: string) => {
  //   queryClient.invalidateQueries({ queryKey: ["userInfo", id] });
  // };

  // const getClientDetail = (clientId: string) => {
  //   const {
  //     data: { data: client },
  //   } = queryClient.getQueryData<ClientInfo>(["client", clientId]) ?? {
  //     data: {
  //       data: {
  //         client_id: "",
  //         company_id: "string",
  //         client_name: "",
  //         client_type: "",
  //         fiscal_end: "", // Expected as 'YYYY-MM-DD'
  //         reg_no: "",
  //         business_identification_no: "",
  //         address_line_1: "",
  //         address_line_2: "",
  //         city: "",
  //         postal_code: "",
  //         country: "",
  //         created_at: "",
  //       },
  //     },
  //   };
  //   return client;
  // };

  return {
    refectUser,
  };
}

export default useFetchData;
