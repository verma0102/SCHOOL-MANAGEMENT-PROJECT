import { Card, CardContent, Grid, TextField, Typography, Table, Stack, Button } from "@mui/material";
import { Col, Row } from "reactstrap";

// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

import Switch from "@mui/material/Switch";

const label = { inputProps: { 'area-label': 'Switch-demo' } }
const AddStaff = () => {
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
                                            Add Staff Id Card
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Background Image
                                        <TextField type="file" variant="outlined" size='small' fullWidth />

                                    </Grid>

                                    <Grid xs={12} item>
                                        Logo
                                        <TextField type="file" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Signature
                                        <TextField type="file" variant="outlined" size='small' fullWidth />
                                    </Grid>


                                    <Grid xs={12} item>
                                        School name
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Address / Email / Phone
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Id Card Title
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Header Color
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Staff Name
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Staff Id
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Designation
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Department
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Father Name
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Mother Name
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Date of joining
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Current Address
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Phone
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Date of Birth
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Design Type
                                        <Switch {...label} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        BarCode
                                        <Switch {...label} />
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
                                            Staff Id Card List
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={9} item>

                                        <TextField type="Search" placeholder="Search..." variant="outlined" size="small" />
                                    </Grid>


                                    <Grid xs={12} sm={3} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table bordered={true}>
                                            <thead>
                                                <tr>
                                                    <th>ID Card Title</th>
                                                    <th>Background Image</th>
                                                    <th>Design Type</th>

                                                    <th>Action</th>

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
                </Col>
            </Row>
        </div>
    )
}
export default AddStaff;