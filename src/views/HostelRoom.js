import { Card, CardContent, Grid, Stack, Table, TextField, Typography, Button, Select, MenuItem } from "@mui/material";
import { Col, Row } from "reactstrap";
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const HostalRoom = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: "0 auto" }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>

                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Add Hostel Room
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Room Number / Name *
                                        <TextField variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Hostel *
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='a'>A</MenuItem>
                                            <MenuItem value='b'>B</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Room Type *
                                        <Select variant="outlined" size='small' fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value='a'>A</MenuItem>
                                            <MenuItem value='b'>B</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Number of Bed *
                                        <TextField variant="outlined" size='small' fullWidth />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Cost Per Bed *
                                        <TextField variant="outlined" size='small' fullWidth />
                                    </Grid>


                                    <Grid xs={12} item>
                                        Description
                                        <TextField variant="outlined" fullWidth />
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
                    <Card margin='auto 0'>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Hostel Room List
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
                                                    <th>Room Number / Name</th>
                                                    <th>Hostel</th>
                                                    <th>Room Type</th>
                                                    <th>Number of Bed</th>
                                                    <th>Cost Per Bed</th>
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
export default HostalRoom;