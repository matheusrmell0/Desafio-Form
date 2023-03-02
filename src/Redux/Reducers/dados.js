import createAsyncSlice from "../Helper/createAsyncSlice";
import { FETCH_GET } from "../../Api";

const slice = createAsyncSlice({
  name: 'dados',
  fetchConfig: () => FETCH_GET(),
});

export const fetchDados = slice.asyncAction
export default slice.reducer;