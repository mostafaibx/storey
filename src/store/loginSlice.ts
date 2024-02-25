import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type loginState = {
  isLoading: boolean;
  data: any;
  error: any;
};

const initialState: loginState = {
  isLoading: false,
  data: null,
  error: null,
};

// I need to explain this in detail

export const userLogin = createAsyncThunk(
  'login/userLogin',
  async (user: { identifier: string; password: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/local`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
        // cookies option will move to service
        const date = new Date();
        date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
        const options = {
          path: '/',
          expires: date,
        };
        CookiesServices.set('jwt', action.payload.jwt, options);
        toast({
          description: 'Login successful.',
        });
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error;
        console.log(state);
        toast({
          description: 'An error occurred. Please try again.',
        });
      });
  },
});

export const selectlogin = ({ login }: any) => login;

export default loginSlice.reducer;
