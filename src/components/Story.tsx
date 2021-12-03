import { Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup, IconButton, Paper, Typography } from '@mui/material';
import { StoryClass } from '../types/types';
import './Story.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export function Story(prop: { story: StoryClass, delete_story: Function, mark_as_done: Function }) {
    const delete_function = () => prop.delete_story(prop.story.id);
    const set_as_done = () => {
        if (prop.story.isDone) {
            return;
        }
        prop.mark_as_done(prop.story);
    };

    return (
        <Card variant="outlined">
            <CardHeader action={
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={prop.story.isDone} defaultChecked color="success" onClick={set_as_done} />} label="mark as done" />
                    <FormControlLabel control={
                        <IconButton aria-label="delete" size="small" onClick={delete_function}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    } label="delete" />
                </FormGroup>
            }
                title={prop.story.title}
                sx={{ bgcolor: 'info.dark', fontSize: 'small' }} />
            <Paper variant="outlined" elevation={10} sx={{ bgcolor: 'info.light' }}>
                <CardContent>
                    <Typography variant="h3" fontSize="medium">{prop.story.description}</Typography>
                </CardContent>
            </Paper>
        </Card>
    );
}