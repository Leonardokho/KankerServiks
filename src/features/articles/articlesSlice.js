import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles`);
  return response.data.data
})

const initialState = {
  articles: [],
  status: 'idle',
  error: null
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.articles = state.articles.concat(action.payload)
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default articlesSlice.reducer

export const selectAllArticles = state => state.articles.articles;
export const selectArticleById = (state, articleId) => state.articles.articles.find(article => article.id === articleId)