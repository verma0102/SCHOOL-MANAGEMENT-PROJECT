import { Card, CardContent, Checkbox, TextField, Table, FormControlLabel, FormGroup, Grid, MenuItem, Select, Stack, Typography, Button } from '@mui/material';
import { Col, Row } from "reactstrap";

//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const AssignVehicle = () => {
    return (
        <div className="content">
            <Row>
                <Col md={5}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                            Assign Vehicle on Routes
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Routes *
                                        <Select variant='outlined' size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='a'>A</MenuItem>
                                            <MenuItem value='b'>B</MenuItem>

                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Vehicle *
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label='VH4584' />
                                            <FormControlLabel required control={<Checkbox />} label='VH5645' />
                                            <FormControlLabel required control={<Checkbox />} label='VH1001' />

                                        </FormGroup>
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
                <Col md={7}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                            Vehicle Route List
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={8} item>
                                        <TextField type="search" variant="outlined" size='small' placeholder="Search" />
                                    </Grid>

                                    <Grid xs={12} sm={4} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Route</th>
                                                    <th>Vehicle</th>

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
export default AssignVehicle;