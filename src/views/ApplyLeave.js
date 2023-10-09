import React from 'react';
import { Card, CardContent, Grid, Typography, Button, TextField, Table, Modal, Box, Select, MenuItem, Stack } from '@mui/material';
//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const style = {
    position: 'absolute',
    top: '62%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


const ApplyLeave = () => {
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
                                <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                    Leave
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={2} item>
                                <Button onClick={handleOpen} variant='contained'>Apply Leave</Button>

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
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                                                Add Details
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1}>
                                                            <Button onClick={handleClose} variant='contained' size='small'>X</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Apply Date
                                                            <TextField type='date' variant='outlined' size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Available Leave
                                                            <Select variant='outlined' size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='leave'>Leave</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Leave from Date
                                                            <TextField type='date' variant='outlined' size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Leave To Date
                                                            <TextField type='date' variant='outlined' size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Reason
                                                            <TextField type='text' variant='outlined' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Attach Document
                                                            <TextField type='file' variant='outlined' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse'>
                                                                <Button variant='contained'>Save</Button>
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
                                <TextField type='search' variant='outlined' size='small' placeholder='Search...' />
                            </Grid>


                            <Grid xs={12} sm={2} item>

                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />

                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Staff ID</th>
                                            <th>Leave Type</th>
                                            <th>Leave Date</th>
                                            <th>Days</th>
                                            <th>Apply Date</th>
                                            <th>Status</th>
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
export default ApplyLeave;