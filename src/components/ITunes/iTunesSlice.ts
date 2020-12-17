import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../../store';
import type { Podcast } from './iTunesSaga';

export type ITunesState = {
  podcasts: Podcast[];
};

const iTunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    podcasts: [],
  } as ITunesState,
  reducers: {
    searchPodcasts(state, action: PayloadAction<{ searchTerm: string }>) {
      // side effects
    },
    loadedPodcasts(state, action: PayloadAction<Podcast[]>) {
      state.podcasts = action.payload;
    },
  },
});

export const { searchPodcasts, loadedPodcasts } = iTunesSlice.actions;

export const selectPodcasts = (state: StoreState) => state.itunes.podcasts;

export const iTunesReducer = iTunesSlice.reducer;
