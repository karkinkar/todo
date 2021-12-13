import { Backdrop, Box, Button, Fade, Modal, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import React, { FormEventHandler } from "react";

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

export function CreateStoryModal(prop: { onSubmit: FormEventHandler<HTMLFormElement>, handleOpen: VoidFunction, handleClose: VoidFunction, open: boolean }) {



    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={prop.open}
                onClose={prop.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={prop.open}>
                    <Box component="form"
                        sx={style}
                        noValidate
                        autoComplete="off"
                        onSubmit={prop.onSubmit}>
                        <TextField required id="title" label="Title" defaultValue="Sample Title" />
                        <TextField id="description" label="Description" multiline rows={4} defaultValue="Default Value" />
                        <Button variant="contained" type="submit" endIcon={<AddCircleOutlineIcon />}>Create Todo</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}