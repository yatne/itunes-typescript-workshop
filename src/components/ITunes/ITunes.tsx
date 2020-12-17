import {
  List,
  UnorderedList,
  ListItem,
  Box,
  Stack,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPodcasts, selectPodcasts } from './iTunesSlice';
import { PodcastListItem } from '../PodcastListItem/PodcastListItem';

export function ITunes() {
  const dispatch = useDispatch();
  const podcasts = useSelector(selectPodcasts);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Box>
      <Stack direction="row">
        <Input
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
          style={{ backgroundColor: 'white', color: "black"}}
        />
        <Button
          colorScheme="blue"
          onClick={() => dispatch(searchPodcasts({ searchTerm }))}
        >
          Search
        </Button>
      </Stack>
      <List>
        {podcasts.map((podcast) => (
          <PodcastListItem podcast={podcast} />
        ))}
      </List>
    </Box>
  );
}
