import React from "react";

import { Typography, Card, CardContent, Grid, Button, TextField, Table, Modal, Box, Select, MenuItem, Stack } from "@mui/material";
//icon

import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const style = {
    position: 'absolute',
    top: '61%',
    left: '57%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const AddCome = () => {
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
                                <Typography style={{ color: 'black' }} gutterBottom variant="h5">
                                    Leaves
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={2} item>
                                <Button variant="contained" size="small" onClick={handleOpen} >Apply Leaves</Button>
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
                                                            <Typography style={{ color: 'black' }} gutterBottom variant="h5">
                                                                AddLeavs
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button variant="contained" size='small' onClick={handleClose}>x</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Apply Date *
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />

                                                        </Grid>
                                                        <Grid xs={12} sm={6} item>
                                                            Available Leave
                                                            <Select size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>                                                         <MenuItem value="a">1</MenuItem>                                                         <MenuItem value='b'>2</MenuItem>
                                                                <MenuItem value='c'>3</MenuItem>


                                                            </Select>                                                </Grid>                                                 <Grid xs={12} sm={6} item>
                                                            Leave From Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Leave To Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            Reason
                                                            <TextField type='text' variant="outlined" fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            Attacht Document
                                                            <TextField type="file" variant="outlined" size='small' fullWidth />
                                                        </Grid>
                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse' spacing={3}>
                                                                <Button variant="contained" size='small'>Save</Button>
                                                                <Button variant="contained" onClick={handleClose} size='small'>Modal Close </Button>
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
                                <TextField type="text" variant="outlined" placeholder="Search" size='small' />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Staff</th>
                                            <th>Leave Type</th>
                                            <th>Leave Date</th>
                                            <th>Days</th>
                                            <th>Apply Date</th>
                                            <th>Status</th>
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
export default AddCome;





