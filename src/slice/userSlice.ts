import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../Api/axios';

// 회원가입 비동기 함수
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', userData);
      console.log(response.data)
      return response.data; // 성공 시 응답 데이터 반환
    } catch (error) {
      return rejectWithValue(error.response.data); // 실패 시 에러 데이터 반환
    }
  }
);


// 로그인 비동기 함수 추가
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', credentials, {withCredentials: true});
      const { accessToken, user } = response.data;
      console.log('accesstoken:',accessToken)
      console.log('user:',user)
      localStorage.setItem('accessToken', accessToken);  // 로컬 스토리지에 액세스 토큰 저장
      dispatch(setCredentials({ accessToken, user }));  // 상태 업데이트
      console.log('Logged in user info:', user);  // Log the user info
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || '로그인 처리 중 오류 발생';
      return rejectWithValue(errorMessage);
    }
  }
);


// 로그아웃 비동기 함수
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { getState, rejectWithValue }) => {
    const { accessToken } = getState().user;
    try {
      const response = await axios.post('http://localhost:8080/auth/logout', {}, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true
      });
      alert("로그아웃 되었습니다.");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 리프레시 토큰을 이용한 토큰 재발급
export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const { refreshToken } = getState().user;
    try {
      const response = await axios.post('http://localhost:8080/auth/reissue', {
          refreshToken: refreshToken
      }, {
          withCredentials: true  // Cookie를 요청과 함께 보내기 위해 필요
      });
      const { accessToken } = response.data;
      dispatch(setCredentials({ accessToken, user: getState().user.userInfo }));
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
      // 실패 시 로그아웃 등의 추가 처리가 필요할 수 있습니다.
    }
  }
);


// userSlice 내에서 상태 업데이트를 위한 액션
export const setCredentials = createAction('user/setCredentials', function prepare({ accessToken, user }) {
  return {
      payload: { accessToken, user }
  };
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    accessToken: localStorage.getItem('accessToken') || null, // 초기 상태 설정
    refreshToken: null,
    isLoading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // 회원가입 액션에 대한 처리 
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // 로그인 액션에 대한 처리 
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setCredentials, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.userInfo = action.payload.user; // Update this as necessary
    })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // 로그아웃 처리
      .addCase(logoutUser.fulfilled, (state) => {
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem('accessToken'); // 로컬 스토리지에서 제거
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        // refreshToken 성공 시 상태 업데이트
        state.accessToken = action.payload.accessToken; // 새 accessToken 저장
      })
      .addCase(refreshToken.rejected, (state, action) => {
        // refreshToken 실패 시 상태 처리
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem('accessToken'); // 로컬 스토리지에서 제거
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;