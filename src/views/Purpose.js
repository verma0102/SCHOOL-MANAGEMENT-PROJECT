import { Button, Typography, Card, CardContent, Grid, TextField, Table, Stack } from "@mui/material";
import { Col, Row } from "reactstrap";


//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const Purpose = () => {
    return (
        <div className="content">
            <Row>
                <Col md={2}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Purpose
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="p">
                                            Complaint Type
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="p">
                                            Source
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="p">
                                            Refrence
                                        </Typography>
                                    </Grid>

                                </Grid>


                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Add Purpose
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Purpose *
                                        <TextField type="text" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Description
                                        <TextField type="text" variant="outlined" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant='contained' size="small">Save</Button>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Purpose List
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={8} item>
                                        <TextField type="search" variant="outlined" size='small' placeholder="Search..." />
                                    </Grid>

                                    <Grid xs={12} sm={4} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Purpose</th>
                                                    <th>Description</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
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
export default Purpose;