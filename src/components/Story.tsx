import { Card, CardContent, Paper, Typography } from '@mui/material';
import './Story.css'

export function Story() {
    return (
        <Card variant="outlined">
            <Paper variant="outlined" elevation={10} sx={{ bgcolor: 'info.light' }}>
                <CardContent>
                    <Typography variant="h5" fontSize="medium">Title</Typography>
                    <Typography variant="h6" fontSize="small">Description</Typography>
                </CardContent>
            </Paper>
        </Card>
    );
}