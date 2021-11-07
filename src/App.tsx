import Button from '@mui/material/Button';
import React from 'react';
import './App.css';
import { Column } from './components/Column';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

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

  return (
    <div id="root">
      <Column background_color="#ff7575" column_header="ToDo"/>
      <Column background_color="#61ff8b" column_header="Done"/>
      <Button id='create_story_button' variant='contained' onClick={handleOpen}>Create Story</Button>

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
              sx={ style }
              noValidate
              autoComplete="off">
              <TextField required id="outlined-required" label="Title" defaultValue="Sample Title"/>
              <TextField id="outlined-multiline-static" label="Description" multiline rows={4} defaultValue="Default Value"/>
            </Box>
          </Fade>
        </Modal>
    </div>

    </div>
  )
}


export default App;
