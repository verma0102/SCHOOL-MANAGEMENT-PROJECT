import { Search } from "@mui/icons-material";
import { Card, CardContent, Grid, Stack, Typography, Select, MenuItem, Button, Table } from "@mui/material";
//icon

import { LuFileSpreadsheet } from 'react-icons/lu';
import { RiFileExcel2Line } from 'react-icons/ri';
import SearchIcon from '@mui/icons-material/Search';


const ManageSyllabus = () => {
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


                            <Grid xs={12} sm={3} size='small' item>
                                Class
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='class1'>Class1</MenuItem>
                                    <MenuItem value='class2'>Class2</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Section
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} size='small' item>
                                Subject Group
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='1sub'> Sub 1 Group</MenuItem>
                                    <MenuItem value='2sub'>Sub 2 Group</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} size='small' item>
                                Subject
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='phy'>Physic</MenuItem>
                                    <MenuItem value='Math'>Math</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant='contained' startIcon={<Search />}>Search</Button>

                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">

                                    Syllabus Status For English  ( 210 )
                                </Typography>
                            </Grid>


                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <LuFileSpreadsheet size={30} /><RiFileExcel2Line size={30} />

                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Lesson Topic</th>
                                            <th>Topic Completion Date</th>
                                            <th>Status</th>
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
export default ManageSyllabus;