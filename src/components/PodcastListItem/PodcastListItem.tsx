import type { Podcast } from '../ITunes/iTunesSaga';
import { Box, ListItem, Stack } from '@chakra-ui/react';

type PodcastListItemProps = {
  podcast: Podcast;
};

export function PodcastListItem({ podcast }: PodcastListItemProps) {
  return (
    <ListItem
      style={{
        backgroundColor: 'white',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
        border: '1px solid green',
        color: 'black',
        maxWidth: '600px',
      }}
    >
      <Stack direction="row">
        <img
          style={{ width: '100px', height: '100px' }}
          alt="artwork"
          src={podcast.artworkUrl60}
        />
        <Stack align="flex-start" style={{ marginLeft: '10px' }}>
          <Box textAlign="left">{podcast.artistName}</Box>
          <Box textAlign="left">{podcast.trackName}</Box>
        </Stack>
      </Stack>
    </ListItem>
  );
};
