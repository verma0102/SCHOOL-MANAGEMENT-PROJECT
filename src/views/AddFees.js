import { Typography, Card, CardContent, Grid, TextField, Button, Table } from "@mui/material";
import { Row, Col } from "reactstrap";
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const AddFees = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                        Add Fees Type
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        Name *
                                        <TextField type="text" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Fees Code *
                                        <TextField type="number" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Description
                                        <TextField type="text" variant="outlined" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Button variant="contained">Save</Button>
                                    </Grid>


                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card container spacing={1}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                        Fees Type List
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>


                                    <Grid xs={12} sm={8} item>

                                        <TextField type="Search" placeholder="Search" variant="outlined" size="small" />
                                    </Grid>


                                    <Grid xs={12} sm={4} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Fees Code</th>
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
export default AddFees;