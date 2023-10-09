import React from "react";
import { Typography, Card, CardContent, Grid, Button, TextField, Table, Modal, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
//icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
// checkbox

const style = {
    position: 'absolute',
    top: '59%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
};

const Vehicles = () => {

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
                                    Vehicles List
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
                                    <Box sx={{ ...style, width: 1000 }}>
                                        <Card style={{ margin: "0 auto" }}>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>

                                                        <Grid xs={12} sm={11} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Add Vehicle
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>X</Button>
                                                        </Grid>
                                                        <Grid xs={12} sm={4} item>
                                                            Vehicle Number *
                                                            <TextField type="number" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Vehicle Model
                                                            <TextField type="text" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Year Made
                                                            <TextField type="date" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Registraction Number
                                                            <TextField type="number" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Chasic Number
                                                            <TextField type="number" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Max Seating Capacity
                                                            <TextField type="text" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Driver Name
                                                            <TextField type="text" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Driver License
                                                            <TextField type="text" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Driver Contact
                                                            <TextField type="text" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Vehicle Photo
                                                            <TextField type="file" size="small" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Note
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

                            <Grid xs={12} sm={10} item>
                                <TextField type="search" variant="outlined" size="small" placeholder="Search..." />
                            </Grid>


                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>


                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>

                                            <th>Vehicle Number</th>
                                            <th>Vehicle Model</th>
                                            <th>Year Model</th>
                                            <th>Registraction Number</th>
                                            <th>Chasic Number</th>
                                            <th>Max Seating Capacity</th>
                                            <th>Driver Name</th>
                                            <th>Driver License</th>
                                            <th>Driver Contact</th>
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
export default Vehicles;