import React from "react";
import { Card, CardContent, Grid, MenuItem, Select, Stack, Typography, Button, Table, Modal, Box, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';



const style = {
    position: 'absolute',
    top: '63%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Homework = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className="content">
            <Card style={{ margin: "0 auto" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Select Criteria
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={3} item>
                                Class
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Section
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Subject Group
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='one'>One</MenuItem>
                                    <MenuItem value='two'>Two</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Subject
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='phy'>Physics</MenuItem>
                                    <MenuItem value='math'>Math</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant='contained' size='small' startIcon={<SearchIcon />}>Search</Button>
                                </Stack>
                            </Grid>

                            <Grid xs={12} sm={11} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Homework List
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Button onClick={handleOpen} variant="contained" size='small' startIcon={<AddIcon />}>Add</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                >
                                    <Box sx={{ ...style, width: 900 }}>
                                        <Card style={{ margin: '0 auto' }}>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>
                                                        <Grid xs={12} sm={11} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Add Homework
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>X</Button>
                                                        </Grid>


                                                        <Grid xs={12} sm={4} item>
                                                            Class
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                                                <MenuItem value={12}>12<sup>th</sup></MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Section
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Subject Group
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='one'>One</MenuItem>
                                                                <MenuItem value='two'>Two</MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Subject
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='phy'>Physics</MenuItem>
                                                                <MenuItem value='math'>Math</MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Homework Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>

                                                            Submission Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>

                                                            Max Mark
                                                            <TextField type="text" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} sm={4} item>

                                                            Attach Document
                                                            <TextField type="file" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} item>

                                                            Description
                                                            <TextField type="text" variant="outlined" fullWidth />
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
                                    </Box>
                                </Modal>

                            </Grid>




                            <Grid xs={12} item>
                                <Stack direction='row' gap={10}>
                                    <Typography sx={{ color: 'black' }} gutterBottom variant="p">
                                        Upcoming Homework
                                    </Typography>

                                    <Typography sx={{ color: 'black' }} gutterBottom variant="p">
                                        Closed Homework
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>SubjectGroup</th>
                                            <th>Subject</th>
                                            <th>Homework Date</th>
                                            <th>Submission Date</th>
                                            <th>Evaluation Date</th>
                                            <th>Create By</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Homework;