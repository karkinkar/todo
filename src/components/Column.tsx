import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './Column.css';
import { Story } from './Story';
import { List, ListItem, Paper } from '@mui/material';

export function Column(prop: { column_header: string }) {
    return (
        <Box sx={{ height: "80vh" }}>
            <Paper variant="outlined" elevation={5} sx={{ height: "100%" }}>
                <Paper elevation={7}>
                    <Typography
                        color="secondary"
                        align="center"
                        variant="h4"
                        gutterBottom={true}
                    >{prop.column_header}</Typography>
                </Paper>
                <List>
                    <ListItem>
                        <Story />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
}

