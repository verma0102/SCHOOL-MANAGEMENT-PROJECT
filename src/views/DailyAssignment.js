import { Card, CardContent, Grid, Select, MenuItem, TextField, Typography, Stack, Button, Table } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const DailyAssigment = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Select Criteria
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={2} item>
                                Class
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Section
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Subject Group
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='one'>One</MenuItem>
                                    <MenuItem value='two'>Two</MenuItem>

                                </Select>
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                Subject
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='phy'>Physics</MenuItem>
                                    <MenuItem value='math'>Math</MenuItem>

                                </Select>
                            </Grid>


                            <Grid xs={12} sm={2} item>
                                Date
                                <TextField type='date' variant='outlined' size='small' fullWidth />
                            </Grid>


                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant="contained" size='small' startIcon={<SearchIcon />}>Search</Button>
                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Daily Assignment List
                                </Typography>
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Student Name</th>
                                            <th>Class</th>
                                            <th>Section</th>

                                            <th>Subject</th>
                                            <th>Title</th>

                                            <th>Submission Date</th>
                                            <th>Evaluation Date</th>
                                            <th>Evalucated By</th>

                                            <th>Action</th>

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
export default DailyAssigment;