import React from "react";
import { Typography, Card, CardContent, Grid, TextField, Button, Table, Modal, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

//icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '63%',
    left: '57%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};



const GradeList = () => {
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
                            <Grid xs={12} sm={11} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Exam Grade List
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
                                        <Card>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>
                                                        <Grid xs={12} sm={11} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h5">
                                                                Add Grade
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button variant="contained" size="small" onClick={handleClose} startIcon={<CloseIcon />}></Button>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Grade Title *
                                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Description
                                                            <TextField type="text" variant="outlined" size="small" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} item>

                                                            <Stack direction='row-reverse'>
                                                                <Button variant="contained" size="small" >Add More</Button>

                                                            </Stack>
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Grade *
                                                            <TextField type="number" size="small" variant="outlined" />
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Max Percentage *
                                                            <TextField type="number" size="small" variant="outlined" />
                                                        </Grid>
                                                        <Grid xs={12} sm={3} item>
                                                            Min Percentage *
                                                            <TextField type="number" size="small" variant="outlined" />
                                                        </Grid>
                                                        <Grid xs={12} sm={3} item>
                                                            Remark x
                                                            <TextField type="number" variant="outlined" />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse' spacing={5}>

                                                                <Button variant="contained" size="small">Save</Button>
                                                                <Button variant="contained" size="small" onClick={handleClose}>Close Modal</Button>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </CardContent>
                                        </Card>

                                    </Box>
                                </Modal>

                            </Grid>

                            <Grid xs={12} sm={9} item>
                                <TextField type="search" placeholder="Search..." size="small" variant="outlined" />

                            </Grid>
                            <Grid xs={12} sm={3} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Grade Title</th>
                                        <th>Description</th>
                                        <th>Grade</th>
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
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default GradeList;