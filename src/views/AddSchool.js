import { Typography, Card, CardContent, Grid, Button, TextField, Select, MenuItem, Stack, Pagination } from "@mui/material";
import { Col, Row } from "reactstrap";


const AddSchool = () => {
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
                                            Add School House
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} item>
                                        Name *
                                        <TextField type="text" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <Grid xs={12} item>
                                            Description
                                            <TextField type="text" variant="outlined" fullWidth required />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Stack direction='row-reverse'>
                                            <Button variant="contained" size='small'>Save</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>

                </Col>
                <Col md={8}>

                    <Card>
                        <CardContent>
                            <form>
                                <Grid spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                            Student House List
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} sm={4} sx={{ mb: 1 }} item >
                                        <TextField type="search" variant="outlined" placeholder="Search..." size="small" />
                                    </Grid>
                                    <Stack direction="row" gap={1}>

                                        <Select variant="outlined" size="small" fullWidth>

                                            <MenuItem>Class</MenuItem>
                                            <MenuItem value="red">Red</MenuItem>
                                            <MenuItem value="blue">Blue</MenuItem>
                                            <MenuItem value="green">Green</MenuItem>

                                        </Select>

                                        <Select variant="outlined" size="small" fullWidth>

                                        </Select>

                                        <Select variant="outlined" size="small" fullWidth>
                                            House Id
                                            <MenuItem>House ID</MenuItem>
                                            <MenuItem value="one">1</MenuItem>
                                            <MenuItem value="two">2</MenuItem>
                                            <MenuItem value="three">3</MenuItem>

                                        </Select>

                                    </Stack>

                                    <Grid xs={12} sm={4} sx={{ m: 2 }} item>
                                        <Pagination count={5} variant="outlined" shape="rounded" />
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
export default AddSchool;