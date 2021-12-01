import { Card, CardContent, CardHeader, IconButton, Paper, Typography } from '@mui/material';
import { StoryClass } from '../types/types';
import './Story.css'
import DeleteIcon from '@mui/icons-material/Delete';

export function Story(prop: {story: StoryClass, delete_story: Function}) {
    const delete_function = () => prop.delete_story(prop.story.id);

    return (
        <Card variant="outlined">
            <CardHeader action={
                <IconButton aria-label="delete" size="small" onClick={delete_function}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            }
            title={prop.story.title}
            sx={{bgcolor: 'info.dark'}}/>
            <Paper variant="outlined" elevation={10} sx={{ bgcolor: 'info.light' }}>
                <CardContent>
                    <Typography variant="h3" fontSize="medium">{prop.story.description}</Typography>
                </CardContent>
            </Paper>
        </Card>
    );
}