import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Table } from "reactstrap";



const StudentCriteria = () => {
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
                            <Grid xs={12} sm={3} item>
                                Class *
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="10">10<sup>th</sup></MenuItem>
                                    <MenuItem value="12">12<sup>th</sup></MenuItem>
                                    <MenuItem value="O lebel">O LEBEL</MenuItem>
                                    <MenuItem value="Pursue MCA">MCA</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Section
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Search By KeyWord :
                                <TextField type="text" variant="outlined" size="small" placeholder="Search by Student Name Roll no Enroll no" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={2} sx={{ marginTop: '20px' }} item >
                                <Button variant="contained" startIcon={<SearchIcon />} color="primary">Search</Button>
                            </Grid>
                        </Grid>

                        <Grid xs={12} item>
                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                Student List
                            </Typography>
                            <Grid xs={12} sm={2} item>
                                <Table bordered={true}>
                                    <thead>
                                        <tr>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Admission No</th>
                                            <th>Student Name</th>
                                            <th>Father Name</th>
                                            <th>Date of Birth</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                        </tr>
                                    </tbody>
                                </Table>

                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default StudentCriteria;