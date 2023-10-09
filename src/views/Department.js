import { Card, CardContent, Grid, TextField, Typography, Button, Table, Stack } from "@mui/material";
import { Col, Row, } from "reactstrap";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const Department = () => {
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
                                            Add Department
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Name *
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
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Department List
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
                                                    <th>Name</th>

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
export default Department;