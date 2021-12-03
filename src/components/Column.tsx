import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './Column.css';
import { Story } from './Story';
import { List, ListItem, Paper } from '@mui/material';
import { StoryClass } from '../types/types';

export function Column(prop: { column_header: string, stories: StoryClass[], delete_story: Function, mark_as_done: Function }) {
    return (
        <Box sx={{ height: "80vh" }}>
            <Paper variant="outlined" elevation={0} sx={{ height: "100%" }}>
                <Paper elevation={7}>
                    <Typography
                        color="secondary"
                        align="center"
                        variant="h4"
                        gutterBottom={true}
                    >{prop.column_header}</Typography>
                </Paper>
                <List>
                    {
                        prop.stories.map((story: StoryClass) => {
                            return (
                                <ListItem>
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

