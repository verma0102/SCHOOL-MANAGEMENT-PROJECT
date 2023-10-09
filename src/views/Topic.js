import { Card, CardContent, Grid, Select, MenuItem, Typography, Stack, Button, TextField, Table } from "@mui/material";
import { Col, Row } from "reactstrap";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';

const Topic = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>

                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant=" h3">
                                            Add Topic
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Class
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='class1'>Class1</MenuItem>
                                            <MenuItem value='class2'>Class2</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Section
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='a'>A</MenuItem>
                                            <MenuItem value='b'>B</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} size='small' item>
                                        Subject Group
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='1sub'> Sub 1 Group</MenuItem>
                                            <MenuItem value='2sub'>Sub 2 Group</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} size='small' item>
                                        Subject
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='phy'>Physic</MenuItem>
                                            <MenuItem value='Math'>Math</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Lesson
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='one'>One</MenuItem>
                                            <MenuItem value='two'>Two</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant='contained' size='small'>Add more</Button>
                                        </Stack>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Topic Name *
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant='contained' size='small'>Save</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant=" h3">
                                            Topic List
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={9} item>
                                        <TextField type='text' variant="outlined" size='small' placeholder="search..." />
                                    </Grid>
                                    <Grid xs={12} sm={3} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Class</th>
                                                    <th>Section</th>
                                                    <th>Subject Group</th>
                                                    <th>Subject</th>
                                                    <th>Lesson</th>
                                                    <th>Topic </th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Topic;