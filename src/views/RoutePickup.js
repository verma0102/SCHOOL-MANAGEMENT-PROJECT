import React from "react";
import { Typography, Card, CardContent, Grid, Button, TextField, Table, Modal, Box, Stack, Select, MenuItem } from "@mui/material";
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
    top: '70%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
};

const RoutePickup = () => {

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
                                    Route Pickup Point
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
                                                                Add
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>X</Button>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Route List *
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>


                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse'>
                                                                <Button variant="contained" size='small'>Add more</Button>
                                                            </Stack>

                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Pickup Point *
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>



                                                        <Grid xs={12} sm={4} item>
                                                            Distance
                                                            <TextField variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={2} item>
                                                            Pickup Point
                                                            <TextField variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={2} item>
                                                            Monthly Fees ($)
                                                            <TextField variant="outlined" size='small' fullWidth />
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

                                            <th>Route</th>
                                            <th>Pickup Point</th>
                                            <th>Monthly Fees ($)</th>
                                            <th>Distance (Km) </th>
                                            <th>Pickup Time</th>
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
export default RoutePickup;