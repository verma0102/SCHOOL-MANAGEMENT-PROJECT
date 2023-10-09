import { Card, CardContent, Grid, MenuItem, Select, Stack, Button, Typography, TextField, Table } from "@mui/material";
import { Col, Row } from "reactstrap";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const Section = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Add Section
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} item>
                                        Section Name
                                        <Select variant="outlined" size='small' fullWidth>

                                            <MenuItem>Section</MenuItem>
                                            <MenuItem value='abc'>Abc</MenuItem>
                                            <MenuItem value='xyz'>xyz</MenuItem>

                                        </Select>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant='contained'>Save</Button>
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
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Section List
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={9} item>
                                        <TextField type="search" variant="outlined" size='small' placeholder="Search..." />
                                    </Grid>


                                    <Grid xs={12} sm={3} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Section</th>
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
export default Section;