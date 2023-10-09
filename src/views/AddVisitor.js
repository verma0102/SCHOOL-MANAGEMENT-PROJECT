import { CardContent, Typography, Card, Grid, TextField, Button, Stack } from "@mui/material";
const AddVisitor = () => {
    return (
        <>
            <div className="content">

                <Card style={{ margin: '0 auto', padding: '20px 5px' }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h4" align="center">
                                        ADD VISITOR
                                    </Typography>
                                </Grid>
                                <Grid xs={12} sm={4} item>
                                    Purpose *
                                    <TextField label="Select" variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Meeting Width *
                                    <TextField label="select" variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Visitor Name *
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    Phone
                                    <TextField type="number" label="Phone" size="small" placeholder="Enter Your Mobile no" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Id Card:
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Number Of Person
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Date
                                    <TextField label="25/07/2023" variant="outlined" size="small" fullWidth required />
                                </Grid>


                                <Grid xs={12} sm={4} item>
                                    In Time
                                    <TextField label="11:38 AM" variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Out Time
                                    <TextField label="11:38 AM" variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={4} item>
                                    Attach Document
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    Note
                                    <TextField variant="outlined" size="small" fullWidth required />
                                </Grid>


                                <Grid xs={12} item >
                                    <Stack direction='row-reverse'>
                                        <Button type="Save" variant="contained" size="small" color="primary">Save</Button>
                                    </Stack>

                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
export default AddVisitor;
