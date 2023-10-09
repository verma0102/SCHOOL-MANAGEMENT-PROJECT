import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Typography, Card, CardContent, Grid, Button, Select, MenuItem, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
// import { DataGrid } from '@mui/x-data-grid';
//icon

import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Margin } from "@mui/icons-material";



const style = {
    position: 'absolute',
    top: '65%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',


    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
};



const SchoolModel = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'q id', headerName: 'Q. ID', width: 100 },
        { field: 'subject', headerName: 'Subject', width: 100 },
        { field: 'Question type', headerName: 'Question type', width: 100 },
        {
            field: 'level',
            headerName: 'Level',
            type: 'number',
            width: 120,
        },

        {
            field: 'question',
            headerName: 'question',
            type: 'number',
            width: 160,
        },

        {
            field: 'Created by',
            headerName: 'Create by',
            type: 'number',
            width: 200,
        },
        {
            field: 'Action',
            headerName: 'Action',
            description: 'This column.',
            sortable: false,
            width: 260,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        // { id: 1, subjec: '', Level: '', Question: '' },


    ];
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                    Select Criteria
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button size="small" onClick={handleOpen} variant="contained" startIcon={<AddIcon />} >Add Question</Button>


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
                                                        <Grid xs={12} sm={10} item>
                                                            <Typography sx={{ color: "black" }} gutterBottom variant='h4'>
                                                                Question
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} sm={2} item>
                                                            <Button onClick={handleClose} variant='contained'>ModelClose</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Subject *
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Subject</MenuItem>
                                                                <MenuItem value="phy">PHYSIC</MenuItem>
                                                                <MenuItem value="math">MATHEMATICS</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Question Type
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Question Type</MenuItem>
                                                                <MenuItem value="omr">OMR</MenuItem>
                                                                <MenuItem value="Coding">Coding</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={3} item>
                                                            Question Level
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Question Level</MenuItem>
                                                                <MenuItem value="omr">OMR</MenuItem>
                                                                <MenuItem value="Coding">Coding</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Class *
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Class</MenuItem>
                                                                <MenuItem value="one">One</MenuItem>
                                                                <MenuItem value="two">Two</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Section *
                                                            <Select variant="outlined" size="small" fullWidth>
                                                                <MenuItem>Section</MenuItem>
                                                                <MenuItem value="a">A</MenuItem>
                                                                <MenuItem value="b">B</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} item>
                                                            Question
                                                            <TextField type='text' variant='outlined' fullWidth />
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

                            <Grid xs={12} sm={2} item>
                                <Button size="small" variant="contained" startIcon={<AddIcon />}>Import</Button>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button size="small" variant="contained" startIcon={<DeleteIcon />}>Bulk Delete</Button>
                            </Grid>



                            <Grid xs={12} sm={2} item>
                                Class *
                                <Select variant="outlined" size="small" fullWidth>
                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value="one">One</MenuItem>
                                    <MenuItem value="two">Two</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Section *
                                <Select variant="outlined" size="small" fullWidth>
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Subject *
                                <Select variant="outlined" size="small" fullWidth>
                                    <MenuItem>Subject</MenuItem>
                                    <MenuItem value="phy">PHYSIC</MenuItem>
                                    <MenuItem value="math">MATHEMATICS</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Question Type
                                <Select variant="outlined" size="small" fullWidth>
                                    <MenuItem>Question Type</MenuItem>
                                    <MenuItem value="omr">OMR</MenuItem>
                                    <MenuItem value="Coding">Coding</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Question Level
                                <Select variant="outlined" size="small" fullWidth>
                                    <MenuItem>Question Level</MenuItem>
                                    <MenuItem value="omr">OMR</MenuItem>
                                    <MenuItem value="Coding">Coding</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Created By
                                <Select variant="outlined" size="small" fullWidth>
                                    <MenuItem>Created By</MenuItem>
                                    <MenuItem value="mui">Mui</MenuItem>
                                    <MenuItem value="react">React</MenuItem>
                                </Select>
                            </Grid>


                            <Grid xs={12} sm={9} item>
                                <Button variant="contained" startIcon={<SearchIcon />}>Search</Button>
                            </Grid>
                            <Grid xs={12} sm={3} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>


                            <Grid xs={12} style={{ marginTop: '70px' }} item>
                                <div style={{ height: 200, width: '100%' }}>
                                    {/* <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: { page: 0, pageSize: 5 },
                                            },
                                        }}
                                        pageSizeOptions={[5, 10]}
                                        checkboxSelection
                                    /> */}
                                </div>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default SchoolModel;