import React from "react";
import { Typography, Card, CardContent, Grid, Button, TextField, Stack, Table, Pagination, Box, Modal, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
//icon
import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Margin } from "@mui/icons-material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '55%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',

    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
};

const OnlineList = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={10} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">
                                    Online Exam List
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={2} item>
                                <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>Add Exam</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                >
                                    <Box sx={{ ...style, width: 1000 }}>

                                        <Card style={{ margin: '0 auto' }}>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>
                                                        <Grid xs={12} sm={11} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h6">
                                                                Exam
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>X</Button>
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Quiz" />
                                                            </FormGroup>
                                                            <Typography>
                                                                In Quiz result will be.........
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            Exam title *
                                                            <TextField type='text' variant="outlined" size="small" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Exam Form
                                                            <TextField type='file' variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} sm={4} item>
                                                            Exam To
                                                            <TextField type='file' variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} sm={4} item>
                                                            Auto Result Publish Date
                                                            <TextField type='file' variant="outlined" size="small" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Time Duration
                                                            <TextField type='number' variant="outlined" size="small" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Attempt
                                                            <TextField type='text' variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} sm={3} item>
                                                            Passing Percentage *
                                                            <TextField type='text' variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} sm={3} item>
                                                            Answer Word Limit
                                                            <TextField type='number' variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Stack direction='row'>
                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Published Exam" />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Published Result" />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Nagetive marketing" />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Display Marks Exam" />
                                                            </FormGroup>


                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label="Random Question Order " />
                                                            </FormGroup>

                                                        </Stack>

                                                        <Grid xs={12} item>
                                                            Description *
                                                            <TextField type='text' variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>

                                                            <Stack direction='row-reverse'>
                                                                <Button onClick={handleClose} variant="contained" size='small' >CLOSE MODAL</Button>

                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Modal>

                            </Grid>


                            <Grid xs={12} sm={2} item>
                                <Typography>
                                    Upcoming Exams
                                </Typography>
                            </Grid>


                            <Grid xs={12} sm={2} item>
                                <Typography>
                                    Upcoming Exams
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={9} item>
                                <TextField type="search" variant="outlined" size='small' placeholder="Search..." />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Exam</th>
                                        <th>Quiz</th>
                                        <th>Questions</th>
                                        <th>Attempt</th>
                                        <th>Exam Form</th>
                                        <th>Exam To</th>
                                        <th>Duration</th>
                                        <th>Exam Published</th>
                                        <th>Result Published</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Stack>
                                <Pagination count={5} shape="rounded" variant="outlined" color="primary" />
                            </Stack>



                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default OnlineList;