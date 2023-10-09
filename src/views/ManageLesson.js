import { Card, CardContent, Grid, MenuItem, Select, Typography, Button, Table } from "@mui/material";



const ManageLesson = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Manage Lesson Plan
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Teachers
                                <Select variant="outlined" size='small' fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="Shivam">Shivam verma</MenuItem>
                                    <MenuItem value="pawan">Pawan verma</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} sx={{ marginTop: '20px' }} item>
                                <Button variant='contained'>Search</Button>
                            </Grid>



                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Monday<br />09/18/2023</th>
                                            <th>Tueday<br />09/19/2023</th>
                                            <th>Wednesday<br />09/20/2023</th>
                                            <th>Thurday<br />09/21/2023</th>
                                            <th>Friday<br />09/22/2023</th>
                                            <th>Saturday<br />09/23/2023</th>
                                            <th>Sunday<br />09/24/2023</th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default ManageLesson;