import { Typography, Card, Table, CardContent, Grid, TextField, Select, MenuItem, Button } from "@mui/material";
import { Col, Row } from "reactstrap";
const AddMark = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                        Add Mark Grade
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        Exam Type *
                                        <Select variant="outlined" size="small" fullWidth>
                                            <MenuItem>Select</MenuItem>
                                            <MenuItem value="a">A</MenuItem>
                                            <MenuItem value="b">B</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid xs={12} item>
                                        Grade Name *
                                        <TextField type="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Perchant Upto
                                        <TextField type="text" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                    <Grid xs={12} item>
                                        Perchant form *
                                        <TextField type="text" variant="outlined" size="small" fullWidth />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Description
                                        <TextField type="text" variant="outlined" fullWidth />
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
                    <Card style={{ margin: '0 auto' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                        Grade List
                                    </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Exam Type</th>
                                                    <th>Grade Name</th>
                                                    <th>Perchant form / Upto </th>
                                                    <th>Grade Point</th>
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
export default AddMark;