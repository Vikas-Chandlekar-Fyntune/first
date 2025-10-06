import { useQuery } from "@tanstack/react-query";
import { getPersons } from "../api";

/**
 *
 * Custom hook : useGetPersons
 * Description : Retrieves all persons
 */

const useGetPersons = () => {
  return useQuery({
    queryKey: ["persons"],
    queryFn: getPersons, // helper fn for api call
  });
};

export default useGetPersons;
