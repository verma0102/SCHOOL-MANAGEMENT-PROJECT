import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button, Table, Stack, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const GenerateCertificate = () => {
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
                                Certificate *
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Sample Transfer Certificate </MenuItem>
                                    <MenuItem value="first">First</MenuItem>
                                    <MenuItem value="second">Second</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant="contained" startIcon={<SearchIcon />}>Search</Button>
                                </Stack>
                            </Grid>

                            <Grid xs={12} sm={11} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Student Name
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Button variant="contained" size='small'>Generate</Button>
                            </Grid>


                            <Grid xs={12} sm={10} item>
                                <TextField type="text" variant="outlined" size='small' placeholder="Search..." />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
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
                                            <th>Class</th>
                                            <th>Father Name</th>
                                            <th>Date of Birth</th>
                                            <th>Gender</th>
                                            <th>Category</th>
                                            <th>Mobile No</th>

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
export default GenerateCertificate;