import { create } from "zustand";

const useApiResponse = create((set) => ({
  response: {},
  setResponse: (eta, ordernummer) =>
    set(() => ({
      response: {
        eta: eta,
        ordernummer: ordernummer,
        orderInProgress: true,
      },
    })),
}));
export default useApiResponse;
//skapat en global state för vår apiresponse
