import React from "react";
import { Typography, Card, CardContent, Grid, Button, TextField, Table, Modal, Box, Select, MenuItem } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
//icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
// checkbox

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const style = {
    position: 'absolute',
    top: '60%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
};

const ExamList = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={11} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Exam List
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={1} item>
                                <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>Add</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                >
                                    <Box sx={{ ...style, width: 900 }}>
                                        <Card style={{ margin: "0 auto" }}>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>

                                                        <Grid xs={12} sm={11} item>



                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Add Exam
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>X</Button>


                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            Exam Name *
                                                            <TextField type="text" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Publish" />
                                                            </FormGroup>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Description
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Term *
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value="a">A</MenuItem>
                                                                <MenuItem value="b">B</MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Class
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Class</MenuItem>
                                                                <MenuItem value="one">One</MenuItem>
                                                                <MenuItem value="two">Two</MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Section
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Section</MenuItem>
                                                                <MenuItem value="a">A</MenuItem>
                                                                <MenuItem value="b">B</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid xs={12} sm={4} item>
                                                            Assessment
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Assessment</MenuItem>
                                                                <MenuItem value="a">Assessment 1</MenuItem>
                                                                <MenuItem value="b">Assessment 2</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Section
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Grade *</MenuItem>
                                                                <MenuItem value="a">A</MenuItem>
                                                                <MenuItem value="b">B</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            <Button variant="contained">Save</Button>
                                                        </Grid>

                                                    </Grid>
                                                </form>
                                            </CardContent>
                                        </Card>

                                    </Box>
                                </Modal>
                            </Grid>

                            <Grid xs={12} sm={9} item>
                                <TextField type="search" variant="outlined" size="small" placeholder="Search..." />
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Exam Name</th>
                                            <th>Class (Sections)</th>
                                            <th>Term</th>
                                            <th>Subject Included</th>
                                            <th>Exam Published</th>
                                            <th>Published Results</th>
                                            <th>Description</th>
                                            <th>Created At</th>
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
        </div>
    )
}
export default ExamList;