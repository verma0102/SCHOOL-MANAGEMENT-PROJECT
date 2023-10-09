import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row, Col } from "reactstrap";
import { Typography, TextField, Grid, Button, Card, CardContent, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

const rows = [
    { name: "Ajay", Age: 25, Address: "chhapra", City: "Chhapra" },
    { name: "Ajay", Age: 22, Address: "Mashrakh", City: "Chhapra" },
    { name: "Vinay", Age: 25, Address: "Gopalganj", City: "Gopalganj" },
    { name: "Bipul", Age: 24, Address: "Noida", City: "Siwan" },
]

const AddComplain = () => {
    console.log(rows);


    return (
        <div className='content'>
            <Row>
                <Col md="12">
                    <Card style={{ margin: '0 auto', padding: '20px 5px' }}>
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <Typography sx={{ color: 'black' }} gutterBottom variant="h4" align="center">
                                            ADD COMPLAIN FORM NAME
                                        </Typography>
                                    </Grid>
                                    <Grid xs={8} sm={6} item>
                                        COMPLAIN TYPE DROPDOWN :

                                        <Select label="text" size="small" variant="outlined" fullWidth >
                                            <MenuItem>COMPLAIN TYPE DROPDOWN</MenuItem>
                                            <MenuItem value="laptop">Hp laptop</MenuItem>
                                            <MenuItem value="pc">Pc</MenuItem>

                                        </Select>
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        SOURCE DROP-DOWN :

                                        <Select label="text" variant="outlined" size="small" fullWidth >
                                            <MenuItem> SOURCE DROP-DOWN</MenuItem>
                                            <MenuItem value="ups">UPS</MenuItem>
                                            <MenuItem value="hdd">HDD</MenuItem>

                                        </Select>

                                    </Grid>
                                    <Grid xs={12} item>
                                        COMPLAIN BY TEXT-BOX :
                                        <TextField type='text' variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        PHONE TEXT-BOX :
                                        <TextField type='number' variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        DATE TEXT-BOX :
                                        <TextField type="date" variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        DESCRIPTION :
                                        <TextField type='text' variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        NOTE:
                                        <TextField type='text' variant="outlined" size="small" fullWidth required />
                                    </Grid>


                                    <Grid xs={12} sm={6} item>
                                        ACTION TAKEN TEXT-BOX:
                                        <TextField type='text' variant="outlined" size="small" fullWidth required />
                                    </Grid>


                                    <Grid xs={12} sm={6} item>
                                        ASSIGNED TEXT-BOX:
                                        <TextField type='text' variant="outlined" size="small" fullWidth required />
                                    </Grid>

                                    <Grid xs={12} item>
                                        ATTACHED DOCUMENT UPLOAD FILE:
                                        <TextField type='file' variant="outlined" size="small" fullWidth required />
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>


                </Col>
                <Col md="8">   <TableContainer sx={{ mt: 5 }} component={Paper}>
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
                </TableContainer>
                </Col>
            </Row>
        </div >

    );
}
export default AddComplain;