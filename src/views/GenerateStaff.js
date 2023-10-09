import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button, Table, Stack, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const GenerateStaff = () => {
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
                                Role
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="teacher">Teacher</MenuItem>
                                    <MenuItem value="software">Software Devloper</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                ID Card Template *
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Sample Staff Id Card Vertical </MenuItem>
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
                                    Staff List
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
                                            <th>Staff Id</th>
                                            <th>Staff Name</th>
                                            <th>Role</th>
                                            <th>Designation</th>
                                            <th>Department</th>
                                            <th>Father name</th>
                                            <th>Mother Name</th>
                                            <th>Date of joining</th>
                                            <th>Phone</th>
                                            <th>Date of Birth</th>
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
export default GenerateStaff;