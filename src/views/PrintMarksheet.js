import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button, Table, Stack, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const PrintMarksheet = () => {
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
                            <Grid xs={12} sm={4} item>
                                Class *
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>

                                    <MenuItem value="Pursue MCA">MCA</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Section
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Template
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>CBSE Practice Text Template </MenuItem>
                                    <MenuItem value="a">First</MenuItem>
                                    <MenuItem value="b">Second</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse' spacing={3}>
                                    <Button variant="contained" startIcon={<SearchIcon />} color="primary">Search</Button>

                                    <Button variant="contained" size='small'>BULK DOWNLOAD</Button>
                                </Stack>
                            </Grid>



                            <Grid xs={12} item>
                                <Table bordered={true}>
                                    <thead>
                                        <tr>
                                            <th> <FormGroup>
                                                <FormControlLabel required control={<Checkbox />} />
                                            </FormGroup></th>
                                            <th>Admission No</th>
                                            <th>Student Name</th>
                                            <th>Father Name</th>
                                            <th>Date of Birth</th>
                                            <th>Gender</th>
                                            <th>Mobile No</th>
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
export default PrintMarksheet;