
import { Card, CardContent, FormControlLabel, FormGroup, Grid, Typography, Checkbox, TextField, Button } from "@mui/material";


const FeesReminder = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Fees Reminder
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Action
                                <FormGroup>
                                    <FormControlLabel required control={<Checkbox />} label='Active' />
                                </FormGroup>
                            </Grid>

                            <Grid xs={12} sm={3} item>

                                <Typography sx={{ color: "black" }} gutterBottom variant="p">
                                    Reminder Type
                                </Typography>


                            </Grid>
                            <Grid xs={12} sm={6} item>
                                Days
                                <TextField type="number" variant="outlined" size='small' fullWidth />
                            </Grid>

                            <Grid xs={12} item>
                                <Button variant='contained'>Save</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default FeesReminder;