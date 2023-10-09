import { Card, CardContent, Grid, Select, MenuItem, Typography, TextField, Stack, Button, Table } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const Payrol = () => {
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

                            <Grid xs={12} sm={4} item>
                                Role
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='admin'>Admin 1</MenuItem>
                                    <MenuItem value='admin2'>Admin 2</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Month
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Month</MenuItem>
                                    <MenuItem value='jan'>jan</MenuItem>
                                    <MenuItem value='feb'>feb</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Year
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Year</MenuItem>
                                    <MenuItem value={2020}>2020</MenuItem>
                                    <MenuItem value={2023}>2023</MenuItem>
                                </Select>
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


                            <Grid xs={12} sm={10} item>
                                <TextField type="search" variant="outlined" size='small' placeholder="Search..." />
                            </Grid>


                            <Grid xs={12} sm={2} item>

                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />

                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>

                                            <th>Staff ID</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Department</th>
                                            <th>Designation</th>
                                            <th>Phone</th>
                                            <th>Staus</th>
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
export default Payrol;