import { Card, CardContent, CardHeader, Checkbox, FormGroup, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { ItemTypes, StoryClass } from '../types/types';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag } from 'react-dnd';

export function Story(prop: { story: StoryClass, delete_story: Function, mark_as_done: Function }) {
    const delete_function = () => prop.delete_story(prop.story.id);
    const set_as_done = () => {
        if (prop.story.isDone) {
            return;
        }
        prop.mark_as_done(prop.story);
    };

    const [, drag] = useDrag(() => ({
        type: ItemTypes.STORY,
        item: prop.story,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));

    return (
        <div ref={drag}>
            <Card variant="outlined">
                <CardHeader action={
                    <FormGroup>
                        <Tooltip title="Mark as Done">
                            <Checkbox checked={prop.story.isDone} onClick={set_as_done} />
                        </Tooltip>
                        <IconButton aria-label="delete" size="small" onClick={delete_function}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </FormGroup>
                }
                    title={prop.story.title}
                    sx={{ backgroundColor: 'secondary.light', fontSize: 'small' }} />
                <Paper variant="outlined" >
                    <CardContent>
                        <Typography variant="h3" fontSize="medium">{prop.story.description}</Typography>
                    </CardContent>
                </Paper>
            </Card>
        </div>
    );
}