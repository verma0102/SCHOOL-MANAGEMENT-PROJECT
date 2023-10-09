import { Typography, Card, CardContent, Grid, TextField, Stack, Pagination, Table, Button } from "@mui/material";
import { Col, Row } from "reactstrap";
import Switch from "@mui/material/Switch";

//icon

import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'



const DesignMarkSheet = () => {
    const label = { inputProps: { 'area-lable': 'switch-demo' } }
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
                                            Add Marksheet
                                        </Typography>

                                        <Grid xs={12} item>
                                            Template *
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Exam Name
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            School Name
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Exam center
                                            <TextField type="number" variant="outlined" size="small" fullWidth />
                                        </Grid>


                                        <Grid xs={12} item>
                                            Body Text
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Footer text
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Printing Date
                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Header Image
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>



                                        <Grid xs={12} item>
                                            Left Logo
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>


                                        <Grid xs={12} item>
                                            Right Logo
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>


                                        <Grid xs={12} item>
                                            Middle Sign
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>


                                        <Grid xs={12} item>
                                            Right Logo
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Background Image
                                            <TextField type="file" variant="outlined" size="small" fullWidth />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Name
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
                                            Exam session
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Admission No
                                            <Switch {...label} />
                                        </Grid>
                                        <Grid xs={12} item>
                                            Division
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Rank
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Roll No
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Photo
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Class
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Section
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Date of Birth
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            Remark
                                            <Switch {...label} />
                                        </Grid>

                                        <Grid xs={12} item>
                                            <Stack direction='row-reverse'>
                                                <Button variant='contained' size='small'>Save</Button>
                                            </Stack>
                                        </Grid>
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
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                        Marksheet List
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={9} item>
                                        <TextField type="search" placeholder="Search" size="small" />
                                    </Grid>

                                    <Grid xs={12} sm={3} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Certificate Name</th>
                                                <th>Background Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Grid xs={12} item>
                                        <Pagination count={5} variant="outlined" color='primary' shape="rounded" />
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
export default DesignMarkSheet;