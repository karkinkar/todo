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

export function Home() {
  const get_all_stories = () => {
    fetch('http://localhost:3000/stories', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data: StoryClass[]) => setStories(data))
  }

  const add_story = (story: StoryClass) => {
    fetch('http://localhost:3000/stories', {
      method: 'POST',
      body: JSON.stringify(story),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => get_all_stories())
  }

  const mark_story_as_done = (story: StoryClass) => {
    story.isDone = true;
    fetch('http://localhost:3000/stories/' + story.id, {
      method: 'PUT',
      body: JSON.stringify(story),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => get_all_stories())
  }

  const delete_story = (id: number) => {
    fetch('http://localhost:3000/stories/' + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })
      .then(() => get_all_stories())
  }

  const onSubmit = (event: any) => {
    const id = stories.length + 1;
    const title = event.target['title'].value;
    const description = event.target['description'].value;
    const isDone = false;

    add_story({ id, title, description, isDone });
    setOpen(false);
    event.preventDefault();
  }
  const [stories, setStories] = useState<StoryClass[]>([])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const todo_stories = stories.filter(story => !story.isDone);
  const done_stories = stories.filter(story => story.isDone);

  useEffect(() => get_all_stories());

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
            <Column column_header="ToDo" stories={todo_stories} delete_story={delete_story} mark_as_done={mark_story_as_done} />
          </Grid>
          <Grid item md={6}>
            <Column column_header="Done" stories={done_stories} delete_story={delete_story} mark_as_done={mark_story_as_done} />
          </Grid>
        </Grid>
      </Box>

      <CreateStoryModal onSubmit={onSubmit} handleOpen={handleOpen} handleClose={handleClose} open={open} />

    </Box >
  )
};
