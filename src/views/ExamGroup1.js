import React from "react";
import { Row, Col, Input, Card, Table } from 'reactstrap';
import { Typography, CardContent, Grid, Select, Button, MenuItem, TextField, Modal, Box, Stack } from "@mui/material";


const ExamGruop1 = () => {
    return (
        <div className="content">

            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={4} item>
                                ExamGroup
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Exam
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Hindi">Hindi</MenuItem>
                                    <MenuItem value="Physics">Physics</MenuItem>

                                </Select>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Session
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="a">2017-2018</MenuItem>
                                    <MenuItem value="b">2018-2019</MenuItem>
                                    <MenuItem value="c">2019-2020</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Class
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Section
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>

                                </Select>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Marksheet Template
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>

                                </Select>
                            </Grid>


                            <Grid xs={12} item>
                                <Stack direction='row-reverse' gap={5}>
                                    <Button variant="contained">Search </Button>

                                    <Button variant="contained" >Bulk Download</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </div>

    )
}

export default ExamGruop1;