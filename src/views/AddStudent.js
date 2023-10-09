import { Typography, Card, CardContent, Grid, Select, MenuItem, Table, Button, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'


const AddStudent = () => {
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

                            <Grid xs={12} sm={6} item>
                                Class *
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Section
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>

                                </Select>
                            </Grid>



                            <Grid xs={12} item >
                                <Stack direction='row-reverse'>
                                    <Button variant="contained" size='small' startIcon={<SearchIcon />}>Search</Button>
                                </Stack>

                            </Grid>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Student Member List
                                </Typography>
                            </Grid>


                            <Grid xs={12} sm={10} item>

                                <TextField type="Search" placeholder="Search..." variant="outlined" size="small" />
                            </Grid>


                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table bordered={true}>
                                    <thead>
                                        <tr>
                                            <th>Member ID</th>
                                            <th>Library Card No</th>
                                            <th>Admission No</th>
                                            <th>Student Name</th>
                                            <th>Class</th>
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
        </div >
    )
}
export default AddStudent;