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
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};
const OnlineExam = () => {

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
                        <Col><h3>Division List</h3></Col>
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
                                        Exam
                                    </Typography>
                                    <CardContent>

                                        <Grid container spacing={1}>


                                            <Grid xs={12} sm={12} item>
                                                Exam Title
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={4} item>
                                                Exam From
                                                <TextField type="date" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={4} item>
                                                Exam To
                                                <TextField type="date" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={4} item>
                                                Auto Result Publish Date
                                                <TextField type="date" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <Grid xs={12} sm={3} item>
                                                Time Duration
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>
                                            <Grid xs={12} sm={3} item>
                                                Attempt
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>
                                            <Grid xs={12} sm={3} item>
                                                Passing Percentage
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>
                                            <Grid xs={12} sm={3} item>
                                                Answer Word Limit
                                                <TextField type="number" variant="outlined" size="small" fullWidth />
                                            </Grid>

                                            <FormControl>
                                                {/* <CheckBox
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group" > */}

                                                <FormControlLabel size="small" sx={{ height: 30, width: 95, paddingLeft: 1 }} value="Pending" control={<CheckBox size="small" sx={{ height: 40, width: 40 }} />} label="Pending" />
                                                <FormControlLabel size="small" sx={{ height: 30, width: 120, paddingLeft: 1 }} value="Disapprove" control={<CheckBox size="small" sx={{ height: 40, width: 60 }} />} label="Disapprove" />
                                                <FormControlLabel size="small" sx={{ height: 30, width: 90, paddingLeft: 1 }} value="Approve" control={<CheckBox size="small" sx={{ height: 40, width: 50 }} />} label="Approve" />
                                                {/* </CheckBox> */}
                                            </FormControl>
                                        </Grid>

                                        <Grid xs={12} sm={2} style={{ marginLeft: '680px' }} item>
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
                                <th>Exam</th>
                                <th>Quiz</th>
                                <th>Questions</th>
                                <th>Attempt</th>
                                <th>Exam from</th>
                                <th>Exam to</th>
                                <th>Duration</th>
                                <th>Exam Published</th>
                                <th>Result Published</th>
                                <th>Description</th>
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

export default OnlineExam;