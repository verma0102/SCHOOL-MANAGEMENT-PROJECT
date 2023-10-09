import React from "react";
import { Card, TextField, CardContent, Grid, Typography, Button, Table, Modal, Box, Select, MenuItem, Stack } from "@mui/material";

//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const style = {
    position: 'absolute',
    top: '58%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const ApproveLeave = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
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
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Approve Leave Request
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button onClick={handleOpen} variant='contained' size='small'>Add Leave Request</Button>
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
                                                        <Grid xs={12} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Add Details
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} sm={6} item>
                                                            Role
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='admin'>Admin 1</MenuItem>
                                                                <MenuItem value='admin2'>Admin 2</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Name
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='aman'>Aman</MenuItem>
                                                                <MenuItem value='aditay'>Aditay</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Apple Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Leave Type
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='open'>Open</MenuItem>
                                                                <MenuItem value='close'>Close</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Leave from  Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Leave To Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} sm={6} item>
                                                            Reason
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Note
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Attach Document
                                                            <TextField type="file" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Status
                                                            <FormControl>

                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                >
                                                                    <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                                                                    <FormControlLabel value="Approved" control={<Radio />} label="Approved" />
                                                                    <FormControlLabel value="Disapproved" control={<Radio />} label="Disapproved" />

                                                                </RadioGroup>
                                                            </FormControl>
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
                                <TextField type="search" variant="outlined" size='small' placeholder="Search..." />
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

                                            <th>Staus</th>
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
export default ApproveLeave;