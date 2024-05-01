import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 비동기 분석 함수 모의 구현
const analyzeImage = async (image) => {
  // 여기서 실제 이미지 분석 요청을 실행합니다.
  // 예시에서는 setTimeout을 사용하여 비동기 처리를 모사합니다.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("고양이"); // 분석 결과를 반환합니다.
    }, 3000);
  });
};

// 비동기 분석 액션
export const analyzeImageAsync = createAsyncThunk(
  'analysis/analyzeImage',
  async (image, { rejectWithValue }) => {
    try {
      const result = await analyzeImage(image);
      return result;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

// 분석 상태 slice
export const analysisSlice = createSlice({
  name: 'analysis',
  initialState: {
    image: null,
    isAnalyzing: false,
    result: null,
    error: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(analyzeImageAsync.pending, (state) => {
        state.isAnalyzing = true;
        state.error = null;
      })
      .addCase(analyzeImageAsync.fulfilled, (state, action) => {
        state.isAnalyzing = false;
        state.result = action.payload;
      })
      .addCase(analyzeImageAsync.rejected, (state, action) => {
        state.isAnalyzing = false;
        state.error = action.payload;
      });
  },
});

export const { setImage } = analysisSlice.actions;

export default analysisSlice.reducer;