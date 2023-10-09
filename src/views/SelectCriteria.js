import React from "react";
import { Row, Col, Input, Card, Table } from 'reactstrap';
import { Typography, CardContent, Grid, Select, Button, MenuItem, TextField, Modal, Box, Stack } from "@mui/material";


import SearchIcon from '@mui/icons-material/Search';
import AddRows from "./AddRows";


const SelectCriteria = () => {
    return (
        <div className="content">
            <Row>

                <Card style={{ margin: '0 auto' }}>
                    <Typography gutterBottom variant="h4">
                        Select Criteria
                    </Typography>
                    <CardContent>

                        <Grid container spacing={1}>

                            <Grid xs={12} sm={4} item>
                                Class
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="10">10<sup>th</sup></MenuItem>
                                    <MenuItem value="12">12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>
                            <Grid xs={12} sm={4} item>
                                Section
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="10">10<sup>th</sup></MenuItem>
                                    <MenuItem value="12">12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                SubjectGroup
                                <Select variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="10">10<sup>th</sup></MenuItem>
                                    <MenuItem value="12">12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} style={{ marginTop: '10px' }} item>
                                <Button variant="contained" startIcon={<SearchIcon />}>Search</Button>
                            </Grid>


                            <Grid xs={12} item>
                                <Table bordered={true}>
                                    <thead>
                                        <tr>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                        </tr>
                                    </tbody>
                                </Table>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Row>

            <AddRows />
        </div>

    )
}

export default SelectCriteria;