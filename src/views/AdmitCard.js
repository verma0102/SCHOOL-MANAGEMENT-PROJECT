import { Typography, Card, Table, CardContent, Grid, TextField, Pagination, label } from "@mui/material";
import { Row, Col } from "reactstrap";
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import Switch from '@mui/material/Switch';


const AdmitCard = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                        Add AdmitCard
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        Template *
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Heading
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Title
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Exam Name
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        School Name
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Exam Center
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Footer Text
                                        <TextField text="text" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                    <Grid xs={12} item>
                                        Left Logo
                                        <TextField type="file" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Right Logo
                                        <TextField type="file" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Sign
                                        <TextField type="file" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Background Image
                                        <TextField type="file" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Name
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Father Name
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Mother Name
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Date of Birth
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Admission No
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Roll Number
                                        <Switch {...label} defaultChecked />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Address
                                        <Switch {...label} defaultChecked />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Gender
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Photo
                                        <Switch {...label} defaultChecked />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Class
                                        <Switch {...label} defaultChecked />
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
                                    <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                        AdmitCard List
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={8} item>
                                        <TextField type="Search" variant="outlined" size="small" placeholder="Search" />
                                    </Grid>


                                    <Grid xs={12} sm={4} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>CERTIFICATE NAME</th>
                                                    <th>BACKGROUND IMAGE</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Grid>
                                    <Pagination count={5} shape="rounded" color="primary" />
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}
export default AdmitCard;