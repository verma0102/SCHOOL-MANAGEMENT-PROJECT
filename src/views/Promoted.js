import { Typography, Card, CardContent, Grid, Select, MenuItem, Button, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from "@mui/material";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, Admission) {
    return { name, Admission };
}

const rows = [
    createData('Cupcake', 305, 67, 4.3),

];


const Promoted = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography style={{ color: 'black' }} gutterBottom variant="h4">
                                    Select Criteria
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                Class *
                                <Select size='small' fullWidth>
                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Section *
                                <Select size='small' fullWidth>
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography style={{ color: 'black' }} gutterBottom variant="h5">
                                    Promoted Students in Next Session
                                </Typography>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Promoted In Session *
                                <Select size='small' fullWidth>
                                    <MenuItem>Session</MenuItem>
                                    <MenuItem value={17}>2017-18</MenuItem>
                                    <MenuItem value={18}>2018-19</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Class *
                                <Select size='small' fullWidth>
                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Section *
                                <Select size='small' fullWidth>
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Button variant="contained" size='small'>Search</Button>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography style={{ color: 'black' }} gutterBottom variant="h5" >
                                    Student List
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Id</TableCell>
                                                <TableCell align="right">Admission No</TableCell>
                                                <TableCell align="right">StudentName</TableCell>
                                                <TableCell align="right">FatherName</TableCell>
                                                <TableCell align="right">Date of Birth</TableCell>
                                                <TableCell align="right">Current Result</TableCell>
                                                <TableCell align="right">Next Session Status</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >


                                                    <TableCell align="right">
                                                        <FormGroup>
                                                            <FormControlLabel required control={<Checkbox />} />

                                                        </FormGroup>
                                                    </TableCell>
                                                    <TableCell align="right">{row.Admission}</TableCell>
                                                    <TableCell align="right">{row.Pappu}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>

                                                    <TableCell align="right">
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group" >

                                                            <FormControlLabel size="small" sx={{ height: 20, width: 70, paddingLeft: 1 }} value="Pass" control={<Radio size="small" sx={{ height: 20, width: 70 }} />} label="Pass" />

                                                            <FormControlLabel size="small" sx={{ height: 20, width: 70, paddingLeft: 1 }} value="Fail" control={<Radio size="small" sx={{ height: 20, width: 70 }} />} label="Fail" />
                                                        </RadioGroup>

                                                    </TableCell>

                                                    <TableCell align="right">   <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group" >

                                                        <FormControlLabel size="small" sx={{ height: 20, width: 90 }} value="Continue" control={<Radio size="small" sx={{ height: 20, width: 90 }} />} label="Continue" />

                                                        <FormControlLabel size="small" sx={{ height: 25, width: 80, paddingLeft: 1 }} value="Leave" control={<Radio size="small" sx={{ height: 40, width: 60 }} />} label="Leave" />
                                                    </RadioGroup></TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid xs={12} item>
                                <Button variant="contained" size='small'>Promoted</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Promoted;