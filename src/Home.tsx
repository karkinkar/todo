import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Column } from './components/Column';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import { List, ListItem } from '@mui/material';
import { StoryClass } from './types/types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CreateStoryModal } from './components/CreateStoryModal';
import ApiClient from './apiClient/ApiClient';

export function Home() {

  const apiClient = new ApiClient();
  const onSubmit = (event: any) => {
    const id = stories.length + 1;
    const title = event.target['title'].value;
    const description = event.target['description'].value;
    const isDone = false;

    const newStory = { id, title, description, isDone };
    apiClient.add_story(newStory, () => setStories([...stories, newStory]));
    setOpen(false);
    event.preventDefault();
  }
  const [stories, setStories] = useState<StoryClass[]>([])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mark_as_done = (storyToRemove: StoryClass) => {
    apiClient.mark_story_as_done(storyToRemove, () => {
      setStories(stories.filter(story => story !== storyToRemove))
    })
  };

  const delete_story = (id: number) => {
    apiClient.delete_story(id, () => {
      setStories(stories.filter(story => story.id !== id))
    })
  };

  const todo_stories = stories.filter(story => !story.isDone);
  const done_stories = stories.filter(story => story.isDone);

  useEffect(() => {
    console.log("Loading stories");
    apiClient.get_all_stories(setStories);
  }, [stories.length]);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" anchor="left" sx={{
        flexShrink: 0,
        width: 240,
        '.MuiDrawer-paper': {
          boxSizing: 'border-box'
        }
      }}>
        <List>
          <ListItem>
            <Button startIcon={<AddCircleOutlineIcon />} id='create_story_button' variant='contained' onClick={handleOpen}>Create Story</Button>
          </ListItem>
        </List>
      </Drawer>
      <Box mt={2} id='box' sx={{ minWidth: "100vh", minHeight: '100vh' }}>
        <Grid container spacing={1} sx={{ minHeight: '100vh' }}>
          <Grid item md={6}>
            <Column column_header="ToDo" stories={todo_stories} delete_story={delete_story} mark_as_done={mark_as_done} />
          </Grid>
          <Grid item md={6}>
            <Column column_header="Done" stories={done_stories} delete_story={delete_story} mark_as_done={mark_as_done} />
          </Grid>
        </Grid>
      </Box>

      <CreateStoryModal onSubmit={onSubmit} handleOpen={handleOpen} handleClose={handleClose} open={open} />

    </Box >
  )
};

