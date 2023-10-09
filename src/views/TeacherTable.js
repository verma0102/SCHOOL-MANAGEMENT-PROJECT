import { Card, CardContent, Grid, MenuItem, Typography, Select, Button, Table } from "@mui/material";

const TeacherTable = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Teacher Time Table
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Teachers
                                <Select variant='outlined' size='small' fullWidth>
                                    <MenuItem>Name</MenuItem>
                                    <MenuItem value='shivam varma'>Shivam verma</MenuItem>
                                    <MenuItem value='Ganesh verma'>Ganesh verma</MenuItem>


                                </Select>
                            </Grid>
                            <Grid xs={12} sm={1} sx={{ marginTop: '20px' }} item>
                                <Button variant='contained'>Search</Button>
                            </Grid>

                            <Grid xs={12} item>
                                <Table border='1'>
                                    <thead>
                                        <tr>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
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
export default TeacherTable;