import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Story } from './Story';
import { List, ListItem, Paper } from '@mui/material';
import { ItemTypes, StoryClass } from '../types/types';
import { useDrop } from 'react-dnd';

export function Column(prop: { column_header: string, stories: StoryClass[], delete_story: Function, mark_as_done: Function }) {

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.STORY,
            drop: (item: StoryClass, monitor) => {
                prop.mark_as_done(item)
                console.log(item);
            }
        }),
        [prop.stories],
    )

    return (
        <Box sx={{ height: "80vh" }} ref={drop}>
            <Paper variant="outlined" elevation={0} sx={{ height: "100%" }}>
                <Paper elevation={7}>
                    <Typography
                        align="center"
                        variant="h4"
                        gutterBottom={true}
                    >{prop.column_header}</Typography>
                </Paper>
                <List>
                    {
                        prop.stories.map((story: StoryClass) => {
                            return (
                                <ListItem key={story.id}>
                                    <Story story={story} delete_story={prop.delete_story} mark_as_done={prop.mark_as_done} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Paper>
        </Box>
    );
}


