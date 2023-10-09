import { Search } from "@mui/icons-material";
import { Card, CardContent, Grid, Stack, Typography, Select, MenuItem, Button, TextField, Table } from "@mui/material";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';
import SearchIcon from '@mui/icons-material/Search';
const CopyLesson = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">

                                    Lesson Plan Report
                                </Typography>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row' gap={10}>
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="p">
                                        <AiOutlineFilePdf size={25} />
                                        Syllabus Status Report
                                    </Typography>

                                    <Typography sx={{ color: 'black' }} gutterBottom variant="p">


                                        <AiOutlineFilePdf size={25} />
                                        Subject Lesson Plan Report
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">

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
                                    <MenuItem value='1sub'>1 Sub Group</MenuItem>
                                    <MenuItem value='2sub'>2 Sub Group</MenuItem>
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

                                    Subject Lesson Plan Report for English (210) Complate 0%
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <TextField type='text' variant="outlined" size='small' placeholder="search..." />
                            </Grid>
                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Teacher</th>
                                            <th>Lesson Name</th>
                                            <th>Topic Name</th>
                                            <th>Sub Topic</th>
                                            <th>Date</th>
                                            <th>Time from </th>
                                            <th>Time To</th>
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
export default CopyLesson;