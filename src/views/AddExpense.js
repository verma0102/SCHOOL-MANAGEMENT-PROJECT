import { Typography, Card, CardContent, Grid, Select, MenuItem, TextField, Button, Table } from "@mui/material";
import { Col, Row } from "reactstrap";
import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Margin } from "@mui/icons-material";

const AddExpense = () => {
    return (
        <div className="content">
            <Row>
                <Col md={4}>
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent >
                            <form>
                                <Grid container spacing={1} >
                                    <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                        Add Expense
                                    </Typography>
                                    <Grid xs={12} item>
                                        Expense Head *
                                        <Select variant="outlined" size="small" fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value="expense">Expense</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Name *
                                        <Grid xs={12} item>
                                            <TextField type="text" variant="outlined" size="small" fullWidth required />
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>

                                        <Grid xs={12} item>
                                            <TextField type="number" placeholder=" Invoice Number *" variant="outlined" size="small" fullWidth required />
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12} item>
                                        Date
                                        <Grid xs={12} item>
                                            <TextField type="date" size="small" variant="outlined" fullWidth required />
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>

                                        <Grid xs={12} item>
                                            <TextField type="number" placeholder="Amount ($)" variant="outlined" size="small" fullWidth required />
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Attacht Document
                                        <Grid xs={12} item>
                                            <TextField type="file" variant="outlined" size="small" fullWidth required />
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Grid xs={12} item>
                                            <TextField type="text" placeholder="Description" variant="outlined" fullWidth required />
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Grid xs={12} sx={{ marginLeft: "0 auto" }} item>
                                            <Button variant="contained">Save</Button>
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
                                <Grid container spacing={2}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                            Expense List
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={8} item>
                                        <TextField type="text" placeholder="Search..." size="small" variant="outlined" />
                                    </Grid>



                                    <Grid xs={12} sm={4} item>
                                        <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                                    </Grid>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Invoice number</th>
                                                <th>Date</th>
                                                <th>Expense Head</th>
                                                <th>Amount ($)</th>
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
                            </form>
                        </CardContent>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}
export default AddExpense;