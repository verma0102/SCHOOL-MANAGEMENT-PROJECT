import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row, Col } from "reactstrap";
import { Typography, TextField, Grid, Button, Card, CardContent } from '@mui/material';


const rows = [
    { name: "Pappu", Age: 21, Address: "Noida sec-16", City: "Up" },
    { name: "Ajay", Age: 22, Address: "Noida sec-18", City: "up" },
    { name: "Vinay", Age: 25, Address: "South East Delhi", City: "Delhi" },
    { name: "Bipul", Age: 24, Address: "Gopalganj", City: "Gopalganj" },
]

const CallLog = () => {
    console.log(rows);
    return (
        <div className='content'>
            <Row>
                <Col md="7">
                    <Card style={{ margin: '0 auto', padding: '20px 5px' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4" align="center">
                                            ADD PHONE CALL LOG
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} sm={4} item>
                                        Name
                                        <TextField variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={4} item>
                                        Phone *
                                        <TextField variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={4} item>
                                        Date *
                                        <TextField variant="outlined" size="small" fullWidth required />
                                    </Grid>


                                    <Grid xs={12} sm={6} item>
                                        Description:
                                        <TextField variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        Note:
                                        <TextField variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        Note
                                        <TextField variant="outlined" fullWidth required />
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>


                </Col>
                <Col md="5">
                    <TableContainer sx={{ mt: 5 }} component={Paper}>
                        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell>Name</TableCell>
                                    <TableCell align="right"> Age</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">City</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows?.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="right" scope="row">{item?.name}</TableCell>
                                        <TableCell align="right">{item?.Age}</TableCell>
                                        <TableCell align="right">{item?.Address}</TableCell>
                                        <TableCell align="right">{item?.City}</TableCell>

                                    </TableRow>
                                ))}



                            </TableBody>
                        </Table>
                    </TableContainer></Col>
            </Row>

        </div>
    );
}
export default CallLog;