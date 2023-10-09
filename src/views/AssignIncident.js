import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Card, CardContent, Grid, Typography, Button, TextField, Modal, Box, FormGroup, FormControlLabel, Checkbox, Table } from "@mui/material";
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const style = {
    position: 'absolute',
    top: '69%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const AssignIncident = () => {
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
                                    Incident List
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
                                                                Add Incident
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained">X</Button>
                                                        </Grid>


                                                        <Grid xs={12} item>
                                                            Title *
                                                            <TextField type="text" variant='outlined' size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Point *
                                                            <TextField type="text" variant='outlined' size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            <FormGroup>
                                                                <FormControlLabel required control={<Checkbox />} label='Is this Negative Incident' />
                                                            </FormGroup>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Description
                                                            <TextField type="text" variant="outlined" fullWidth />
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
                                            <th>Title</th>
                                            <th>Point</th>
                                            <th>Description</th>
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
export default AssignIncident;