import { Card, CardContent, Grid, Select, MenuItem, Button, Stack, Table, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const PrintAdminCard = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={4} item>
                                Exam Group
                                <Select variant='outlined' size='small' fullWidth>
                                    <MenuItem>Class ( school base Grading system )</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Exam
                                <Select variant='outlined' size='small' fullWidth>
                                    <MenuItem>Text Examination ( 2021)</MenuItem>
                                    <MenuItem value='phy'>Physic</MenuItem>
                                    <MenuItem value='che'>Che</MenuItem>
                                    <MenuItem value='math'>Math</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Session
                                <Select variant='outlined' size='small' fullWidth>

                                    <MenuItem value={2021}>2016-17</MenuItem>
                                    <MenuItem value={2021}>2017-18</MenuItem>
                                    <MenuItem value={2021}>2018-19</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Class
                                <Select variant='outlined' size='small' fullWidth>
                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value={10}>10<sub>th</sub></MenuItem>
                                    <MenuItem value={12}>12<sub>th</sub></MenuItem>

                                </Select>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Section
                                <Select variant='outlined' size='small' fullWidth>
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Admit Card Template
                                <Select variant='outlined' size='small' fullWidth>
                                    <MenuItem>Admit Card</MenuItem>
                                    <MenuItem value='simple'>Simple Admit Card</MenuItem>
                                    <MenuItem value='Good'>Good Admit Card</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant='contained' size='small' startIcon={<SearchIcon />}>Search</Button>
                                </Stack>

                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                    Student List
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button variant='contained'>Generate</Button>
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <FormGroup>
                                                    <FormControlLabel required control={<Checkbox />} />
                                                </FormGroup>
                                            </th>
                                            <th>Admission No</th>
                                            <th>Student No</th>
                                            <th>Father Name</th>
                                            <th>Date of Birth</th>
                                            <th>Gender</th>
                                            <th>Category</th>
                                            <th>Mobile Number</th>



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
export default PrintAdminCard;