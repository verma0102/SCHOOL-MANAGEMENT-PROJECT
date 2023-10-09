import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Card, CardContent, Grid, Typography, Button, TextField, Modal, Box, FormGroup, FormControlLabel, Checkbox, Table, Select, MenuItem, Stack } from "@mui/material";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const style = {
    position: 'absolute',
    top: '64%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const AssessmentList = () => {
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
                                <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                    Assessment List
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={1} item>
                                <Button onClick={handleOpen} variant="contained" size='small' startIcon={<AddIcon />} >Add</Button>
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
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Add Assessment
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained">X</Button>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Assessment
                                                            <TextField type="text" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Assessment Description
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse'>
                                                                <Button variant="contained" size='small'>Add More</Button>
                                                            </Stack>

                                                        </Grid>

                                                        <Grid xs={12} sm={2} item>
                                                            Assessment Type *
                                                            <TextField type="text" size='small' variant="outlined" />
                                                        </Grid>

                                                        <Grid xs={12} sm={2} item>
                                                            Code
                                                            <TextField type="number" size='small' variant="outlined" />
                                                        </Grid>
                                                        <Grid xs={12} sm={2} item>
                                                            Maximum Marks
                                                            <TextField type="text" size='small' variant="outlined" />
                                                        </Grid>

                                                        <Grid xs={12} sm={2} item>
                                                            Pass percentage
                                                            <TextField type="text" size='small' variant="outlined" />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Description
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} item>

                                                            <Stack direction='row-reverse' >
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

                            <Grid xs={12} sm={10} item>
                                <TextField type="search" variant="outlined" size='small' placeholder="Search" />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Assessment</th>
                                            <th>Assessment Description</th>
                                            <th>Assessment Type</th>
                                            <th>Action</th>


                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div >
    )
}
export default AssessmentList;