import { Card, CardContent, Paper, Typography } from '@mui/material';
import { StoryClass } from '../types/types';
import './Story.css'

export function Story(prop: {story: StoryClass}) {
    return (
        <Card variant="outlined">
            <Paper variant="outlined" elevation={10} sx={{ bgcolor: 'info.light' }}>
                <CardContent>
                    <Typography variant="h5" fontSize="medium">{prop.story.title}</Typography>
                    <Typography variant="h6" fontSize="small">{prop.story.description}</Typography>
                </CardContent>
            </Paper>
        </Card>
    );
}