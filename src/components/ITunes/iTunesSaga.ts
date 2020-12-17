import { put, takeLatest } from 'redux-saga/effects';
import { loadedPodcasts, searchPodcasts } from './iTunesSlice';
import * as yup from 'yup';
import { PayloadAction } from '@reduxjs/toolkit';

const podcastSchema = yup
  .object({
    artistName: yup.string().defined(),
    trackName: yup.string().defined(),
    artworkUrl60: yup.string().defined(),
    trackId: yup.number().defined(),
  })
  .defined();

export type Podcast = yup.InferType<typeof podcastSchema>;

async function fetchPodcasts(searchTerm: string) {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      searchTerm
    )}&entity=podcast`
  );
  const data = await response.json();

  const responseSchema = yup.object({
    resultCount: yup.number().defined(),
    results: yup.array(podcastSchema),
  });

  const { results } = await responseSchema.validate(data);
  return results;
}

function* onSearchPodcast({
  payload: { searchTerm },
}: PayloadAction<{ searchTerm: string }>) {
  const padcasts = yield fetchPodcasts(searchTerm);
  yield put(loadedPodcasts(padcasts));
}

export function* itunesSaga() {
  yield takeLatest(searchPodcasts.type, onSearchPodcast);
}
