import { useQuery } from "react-query";
import { getSheets } from "@/services/getSheets/index.js";

export default function useSheets() {
  return useQuery(["sheets"], () => getSheets());
}
