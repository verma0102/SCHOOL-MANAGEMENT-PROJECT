import React from "react";
import { Card, CardContent, Grid, Select, MenuItem, TextField, Typography, Button, Stack, Table, Box, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
//Acordian

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Search } from "@mui/icons-material";


const style = {
    position: 'absolute',
    top: '57%',
    left: '52%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const StaffDirectory = () => {

    const [open, setOpen] = React.useState(false);
    const [openStaff, setOpenStaff] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleStaffOpen = () => {
        setOpenStaff(true)
    }
    const handleClosestaff = () => {
        setOpenStaff(false)
    }

    const handleModalOpen = () => {
        setOpenModal(true);
    }


    const handleClosemodal = () => {
        setOpenModal(false);
    }

    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm={10} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Select criteria
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button onClick={handleOpen} variant='contained' size='small' startIcon={<AddIcon />}>Add Staff</Button>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <Box sx={{ ...style, width: 900 }}>
                                        <Card style={{ margin: "0 auto" }}>
                                            <CardContent>
                                                <form>
                                                    <Grid container spacing={1}>
                                                        <Grid xs={12} sm={7} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Basic Information
                                                            </Typography>
                                                        </Grid>



                                                        <Grid xs={12} sm={2} item>

                                                            <Button onClick={handleClose} variant="contained" size='small'>X </Button>

                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            <Button onClick={handleStaffOpen} variant='contained' size='small' startIcon={<AddIcon />}>Import Staff</Button>

                                                            {<Modal
                                                                open={openStaff}
                                                                onClose={handleClosestaff}
                                                                aria-labelledby="child-modal-title"
                                                                aria-describedby="child-modal-description"
                                                            >
                                                                <Box sx={{ ...style, width: 900 }}>

                                                                    <Grid xs={12} item>
                                                                        <Accordion>
                                                                            <AccordionSummary
                                                                                expandIcon={<ExpandMoreIcon />}
                                                                                aria-controls="panel1a-content"
                                                                                id="panel1a-header"
                                                                            >
                                                                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">Add More Details</Typography>
                                                                            </AccordionSummary>
                                                                            <AccordionDetails>
                                                                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">PayRoll</Typography>
                                                                                <Card style={{ margin: '0 auto' }}>
                                                                                    <CardContent>
                                                                                        <form>
                                                                                            <Grid container spacing={1}>
                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    EPF NO
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Basic Sallery
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>


                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Qualification
                                                                                                    <Select variant="outlined" size='small' fullWidth>
                                                                                                        <MenuItem>Select</MenuItem>
                                                                                                        <MenuItem value='first'>FirstNumber</MenuItem>
                                                                                                        <MenuItem value='Second'>SecondNumber</MenuItem>
                                                                                                    </Select>
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Work shift
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Work Location
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} item>
                                                                                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h5">PayRoll</Typography>
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={8} item>
                                                                                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                                                        Leaves
                                                                                                    </Typography>
                                                                                                </Grid>


                                                                                                <Grid xs={12} sm={2} item>

                                                                                                    <Button onClick={handleClosestaff} variant="contained" size='small'>X</Button>

                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={2} item>
                                                                                                    <Button onClick={handleModalOpen} variant="contained" size='small'> Open Modal</Button>

                                                                                                    {<Modal
                                                                                                        open={openModal}
                                                                                                        onClose={handleClosemodal}
                                                                                                        aria-labelledby="child-modal-title"
                                                                                                        aria-describedby="child-modal-description"
                                                                                                    >
                                                                                                        <Box sx={{ ...style, width: 900 }}>
                                                                                                            <Card style={{ margin: '0 auto' }}>
                                                                                                                <CardContent>
                                                                                                                    <form>
                                                                                                                        <Grid container spacing={1}>

                                                                                                                            <Grid xs={12} item>
                                                                                                                                <Stack direction='row-reverse' >
                                                                                                                                    <Button onClick={handleClosemodal} variant="contained" size='small'>X</Button>
                                                                                                                                </Stack>
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} sm={6} item>
                                                                                                                                IFCE CODE
                                                                                                                                <TextField type='number' variant="outlined" size='small' fullWidth />
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} sm={6} item>
                                                                                                                                Bank Branch Name
                                                                                                                                <TextField type='text' variant="outlined" size='small' fullWidth />
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} sm={6} item>
                                                                                                                                Facbook URL
                                                                                                                                <TextField type='text' variant="outlined" size='small' fullWidth />
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} sm={6} item>
                                                                                                                                Twitter URL
                                                                                                                                <TextField type='text' variant="outlined" size='small' fullWidth />
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} sm={6} item>
                                                                                                                                Linkedin URL
                                                                                                                                <TextField type='text' variant="outlined" size='small' fullWidth />
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} sm={6} item>
                                                                                                                                Instgram URL
                                                                                                                                <TextField type='text' variant="outlined" size='small' fullWidth />
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} item>
                                                                                                                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">Upload Document</Typography>
                                                                                                                            </Grid>

                                                                                                                            <Grid xs={12} item>


                                                                                                                                <Table>
                                                                                                                                    <thead>
                                                                                                                                        <tr>
                                                                                                                                            <th>#</th>
                                                                                                                                            <th>Title</th>
                                                                                                                                            <th>Document</th>


                                                                                                                                        </tr>
                                                                                                                                    </thead>
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td></td>

                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </Table>

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
                                                                                                    </Modal>}
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Medical Leaves
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Causel Leaves
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    material Leaves
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} item>
                                                                                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h5">Bank Account Details</Typography>
                                                                                                </Grid>
                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Account Title
                                                                                                    <TextField type="text" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Bank Account Number
                                                                                                    <TextField type='text' variant="outlined" size='small' fullWidth />
                                                                                                </Grid>


                                                                                                <Grid xs={12} sm={4} item>
                                                                                                    Bank Name
                                                                                                    <TextField type="number" variant="outlined" size='small' fullWidth />
                                                                                                </Grid>

                                                                                            </Grid>
                                                                                        </form>
                                                                                    </CardContent>

                                                                                </Card>
                                                                            </AccordionDetails>
                                                                        </Accordion>
                                                                    </Grid>
                                                                </Box>
                                                            </Modal>}

                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Staff ID
                                                            <TextField type="text" size='small' variant="outlined" />
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Role
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='admin'>Admin 1</MenuItem>
                                                                <MenuItem value='admin2'>Admin 2</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Desination
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='aman'>Aman</MenuItem>
                                                                <MenuItem value='vishal'>Vishal</MenuItem>
                                                            </Select>
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Department
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='admin'>Admin-1</MenuItem>
                                                                <MenuItem value='admin2'>Admin-2</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            First Name
                                                            <TextField type="text" variant="outlined" size='small' />
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Last Name
                                                            <TextField type="text" variant="outlined" size='small' />
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Father Name
                                                            <TextField type="text" variant="outlined" size='small' />
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Mother Name
                                                            <TextField type="text" variant="outlined" size='small' />
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Email ( Login UserName) *
                                                            <TextField type="email" variant="outlined" size='small' />

                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Gender
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='Male'>Male</MenuItem>
                                                                <MenuItem value='admin2'>Female</MenuItem>
                                                            </Select>
                                                        </Grid>




                                                        <Grid xs={12} sm={3} item>
                                                            Date of Birth
                                                            <TextField type="number" variant="outlined" size='small' placeholder="Date of Birth" />

                                                        </Grid>



                                                        <Grid xs={12} sm={3} item>
                                                            Date of Joining
                                                            <TextField type="number" variant="outlined" size='small' placeholder="date oining " />

                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Phone
                                                            <TextField type="number" variant="outlined" size='small' />
                                                        </Grid>


                                                        <Grid xs={12} sm={3} item>
                                                            Emergency Contact No
                                                            <TextField type="text" variant="outlined" size='small' />
                                                        </Grid>



                                                        <Grid xs={12} sm={3} item>
                                                            Martital status
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='Marred'>Marred</MenuItem>
                                                                <MenuItem value='Unmarred'>Unmarred</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Photo
                                                            <TextField type="file" variant="outlined" size='small' />
                                                        </Grid>


                                                        <Grid xs={12} sm={6} item>
                                                            Address
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Permanent Address
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Qualification
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                                                <MenuItem value={12}>12<sup>th</sup></MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Work Experience
                                                            <TextField type="number" size='small' variant="outlined" fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} sm={6} item>
                                                            Work Lcation
                                                            <TextField type="number" size='small' variant="outlined" fullWidth />
                                                        </Grid>



                                                    </Grid>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Modal>

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
                                Search by Keyword
                                <TextField type="text" variant="outlined" size='small' placeholder="Staff By staff Id ,Name,Roll" fullWidth />
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse' >
                                    <Button variant="contained" size='small' startIcon={<Search />}>Search</Button>
                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Card views</th>
                                            <th>List views</th>
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
export default StaffDirectory;