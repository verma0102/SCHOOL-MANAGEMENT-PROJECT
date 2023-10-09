import { Card, CardContent, Grid, MenuItem, Select, Typography, Button, TextField, Table } from "@mui/material";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';



const FeesForward = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                    Select Criteria
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={5} item>
                                Class *
                                <Select size="small" variant="outlined" fullWidth >

                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={5} item>
                                Section *
                                <Select size="small" variant="outlined" fullWidth >

                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} sx={{ marginTop: '21px' }} item>
                                <Button variant="contained">Search</Button>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Previous Session Balance Fees
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={10} item>
                                <TextField type="text" variant="outlined" size='small' placeholder="Search..." />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Student Name</th>
                                            <th>Admission No</th>
                                            <th>Admission Date</th>
                                            <th>Roll No</th>
                                            <th>Father Name</th>
                                            <th>Balance ($)</th>

                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button variant="contained">Save</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default FeesForward;