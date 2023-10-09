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

const ObservationList = () => {
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
                                    Assign Observation List
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
                                                                Add Observation List
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained">X</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Observation *
                                                            <Select variant="outlined" size="small" fullWidth >
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value={10}>10</MenuItem>
                                                                <MenuItem value={12}>12</MenuItem>

                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Term *
                                                            <Select variant="outlined" size="small" fullWidth >
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value="a">one</MenuItem>
                                                                <MenuItem value="b">two</MenuItem>

                                                            </Select>
                                                        </Grid>


                                                        <Grid xs={12} item>
                                                            Description
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse'>
                                                                <Button variant="contained">Save</Button>
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
                                            <th>Observation</th>
                                            <th>Term</th>
                                            <th>Code</th>
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
export default ObservationList;