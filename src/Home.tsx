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
import update from 'immutability-helper';

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
  const [stories, setStories] = useState<StoryClass[]>([]);

  const [todoStories, setTodoStories] = useState<StoryClass[]>([]);
  const [doneStories, setDoneStories] = useState<StoryClass[]>([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mark_as_done = (story: StoryClass) => {
    apiClient.mark_story_as_done(story, () => {
      const story_index = stories.findIndex((storyTemp) => storyTemp.id === story.id);
      const updated_stories = update(
        stories,
        {
          [story_index]: {
            isDone: {
              $set: true
            }
          }
        }
      );
      setStories(updated_stories);
      setDoneStories(updated_stories.filter(story => story.isDone));
      setTodoStories(updated_stories.filter(story => !story.isDone));
    })
  };

  const delete_story = (id: number) => {
    apiClient.delete_story(id, () => {
      setStories(stories.filter(story => story.id !== id))
    })
  };

  useEffect(() => {
    console.log("Loading stories");
    apiClient.get_all_stories((newStories: StoryClass[]) => {
      setStories(newStories);
      setDoneStories(newStories.filter(story => story.isDone));
      setTodoStories(newStories.filter(story => !story.isDone));
    });
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
            <Column column_header="ToDo" stories={todoStories} delete_story={delete_story} mark_as_done={mark_as_done} />
          </Grid>
          <Grid item md={6}>
            <Column column_header="Done" stories={doneStories} delete_story={delete_story} mark_as_done={mark_as_done} />
          </Grid>
        </Grid>
      </Box>

      <CreateStoryModal onSubmit={onSubmit} handleOpen={handleOpen} handleClose={handleClose} open={open} />

    </Box >
  )
};
