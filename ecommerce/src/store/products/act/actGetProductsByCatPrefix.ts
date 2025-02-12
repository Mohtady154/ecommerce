import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TProduct} from "../../../types/product";
type TResponse = TProduct[];
const actGetProductsByCatPrefix = createAsyncThunk (
"products/actGetProductsByCatPrefix",
  async (prefix:string,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
 try { 
  const response = await axios.get<TResponse>(`http://localhost:5005/products?cat_prefix=${prefix}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
     }
     return rejectWithValue("Unexpected error."); 
    }
  }


);


export default actGetProductsByCatPrefix; 