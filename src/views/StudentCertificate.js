import { Typography, Card, Table, CardContent, Grid, TextField, Select, MenuItem, Button, Stack } from "@mui/material";
import { Col, Row } from "reactstrap";
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'area-label': 'switch-demo' } };

const StudentCertificate = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography style={{ color: "black" }} gutterBottom variant="h5">
                                            Add Student Certificate
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Certificate Name
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Header Left Text
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Header Center Text
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Header Right Text
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Body Text
                                        <TextField type="text" size='small' variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Footer Left Text
                                        <TextField type="text" size='small' variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Footer Center Text
                                        <TextField type="text" size='small' variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Footer Right Text
                                        <TextField type="text" size='small' variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Typography style={{ color: "black" }} gutterBottom variant="p">
                                            Certificate Design
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={6} item>

                                        <TextField type="text" size='small' variant="outlined" placeholder="Header Heigth" fullWidth />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        <TextField type="text" size='small' variant="outlined" placeholder="Footer Heigth" fullWidth />
                                    </Grid>


                                    <Grid xs={12} sm={6} item>

                                        <TextField type="text" size='small' variant="outlined" placeholder="Body Heigth" fullWidth />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        <TextField type="text" size='small' variant="outlined" placeholder="Body width" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Student Photo
                                        <Switch  {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Background Image
                                        <TextField type="file" size='small' variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant="contained">Save</Button>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card style={{ margin: "0 auto" }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                            Student Certificate List
                                        </Typography>
                                    </Grid>


                                    <Grid xs={12} sm={9} item>

                                        <TextField type="Search" placeholder="Search..." variant="outlined" size="small" />
                                    </Grid>


                                    <Grid xs={12} sm={3} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Certificate Name</th>
                                                    <th>Background Image</th>

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
export default StudentCertificate;


