import { Card, CardContent, Grid, Select, MenuItem, Typography, TextField, Stack, Button, Table } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"


const StaffAttendance = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">Select Criteria
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Role
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='admin'>Admin 1</MenuItem>
                                    <MenuItem value='admin2'>Admin 2</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Attendance Date
                                <TextField type="date" variant="outlined" size='small' fullWidth />
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant='contained' size='small' startIcon={<SearchIcon />}>Search</Button>
                                </Stack>
                            </Grid>



                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">Staff List
                                </Typography>
                            </Grid>


                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant='contained' size='small' >Save Attendance</Button>
                                </Stack>
                            </Grid>

                            <Grid xs={12} item>

                                <Button variant='contained' size='small' >Make As Holiday</Button>

                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Staff ID</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Attendance</th>
                                            <th>Note</th>



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
export default StaffAttendance;