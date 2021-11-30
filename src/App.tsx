import Button from '@mui/material/Button';
import React, { useState } from 'react';
import './App.css';
import { Column } from './components/Column';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import { List, ListItem } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { StoryClass } from './types/types';

const style = {
  '& .MuiTextField-root': { m: 1, width: '25ch' },
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

function App() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const get_all_stories = () => {
    fetch('http://localhost:3000/stories', {
      method : 'GET'
    })
    .then((response) => response.json())
    .then((data: StoryClass[]) => setStories(data))
  }

  const [stories, setStories] = useState<StoryClass[]>([])
  get_all_stories()
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
      <Box mt={2} sx={{ width: "80vw" }}>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Column column_header="ToDo" stories={stories}/>
          </Grid>
          <Grid item md={6}>
            <Column column_header="Done" stories={stories}/>
          </Grid>
        </Grid>
      </Box>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box component="form"
              sx={style}
              noValidate
              autoComplete="off">
              <TextField required id="outlined-required" label="Title" defaultValue="Sample Title" />
              <TextField id="outlined-multiline-static" label="Description" multiline rows={4} defaultValue="Default Value" />
            </Box>
          </Fade>
        </Modal>
      </div>

    </Box >
  )
}


export default App;
