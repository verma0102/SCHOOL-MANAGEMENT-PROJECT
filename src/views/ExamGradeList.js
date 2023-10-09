import React from "react";
import { Row, Col, Input, Card, Table } from 'reactstrap';
import { Typography, CardContent, Grid, Select, Button, MenuItem, TextField, Modal, Box, Stack } from "@mui/material";
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

// radio
import Radio from '@mui/material/Radio';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};


const ExamGradeList = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="content">
            <Row>
                <Card style={{
                    padding: "20px"
                }}>
                    <Row>
                        <Col><h3>Exam Grade List</h3></Col>
                        <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>  <Button variant="contained" onClick={handleOpen}>Add Exam</Button></Col>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Card style={{ margin: '0 auto' }}>
                                    <Typography gutterBottom variant="h4">
                                        Add Grade
                                    </Typography>
                                    <CardContent>

                                        <Grid container spacing={1}>


                                            <Grid xs={12} sm={12} item>
                                                Grade Title
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={12} item>
                                                Description
                                                <TextField
                                                    multiline
                                                    rows={2}
                                                    variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={3} item>
                                                Grade
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={3} item>
                                                Maximum Percentage
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={3} item>
                                                Minimum Percentage
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={3} item>
                                                Remark
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>
                                        </Grid>

                                        <Grid xs={12} style={{ marginTop: '10px' }} item>
                                            <Button variant="contained">Save</Button>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Modal>

                    </Row>
                    <Row>
                        <Col><Input type="search" placeholder="Search..." style={{ width: "300px" }} /></Col>
                        <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Grade Title</th>
                                <th>Description</th>
                                <th>Grade</th>
                                <th>Maximum Percentage</th>
                                <th>Minimum Percentage</th>
                                <th>Remark</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </Table>
                </Card>
                {/* </Col> */}
            </Row>
        </div>
    )
}

export default ExamGradeList;