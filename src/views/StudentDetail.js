import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button, Table, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';

const StudentDetail = () => {
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
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>
                                    <MenuItem value={'O lebel'}>O LEBEL</MenuItem>
                                    <MenuItem value={"Pursue MCA"}>MCA</MenuItem>
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

                            <Grid xs={12} item>
                                <Stack direction='row' spacing={3}>
                                    <Typography gutterBottom variant="p">
                                        <AiOutlineFilePdf size={20} />
                                        List views
                                    </Typography>

                                    <Typography gutterBottom variant="p">
                                        <AiOutlineFilePdf size={20} />
                                        Detail views
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <TextField type="search" placeholder="Search..." variant="outlined" size='small' />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table bordered={true}>
                                    <thead>
                                        <tr>
                                            <th>Admission No</th>
                                            <th>Student Name</th>
                                            <th>Class</th>
                                            <th>Father Name</th>
                                            <th>Disable Reason</th>
                                            <th>Gender</th>
                                            <th>Mobile Number</th>
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
export default StudentDetail;