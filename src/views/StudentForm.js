import { Typography, Card, CardContent, Grid, TextField, Select, MenuItem, Button, Checkbox, Stack, FormGroup } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// According
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Padding } from "@mui/icons-material";


const StudentForm = () => {


    return (
        <div className="content">

            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4" align="center">
                                    STUDENT FORM
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Admission No :
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Roll No :
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Class:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="class-1">Class-1</MenuItem>
                                    <MenuItem value="class-2">Class-2</MenuItem>
                                    <MenuItem value="class-3">Class-3</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Section:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    <MenuItem value="C">C</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                First Name :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Last Name :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Gender:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Date of Birth:
                                <TextField type="date" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={2} item>
                                Category:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="bc-1">Bc-1</MenuItem>
                                    <MenuItem value="bc-2">Bc-2</MenuItem>
                                    <MenuItem value="obc">OBC</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Religion :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                Caste :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Mobile No :
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Email ID :
                                <TextField type="email" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Admission Date :
                                <TextField type="date" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Student Photo :
                                <TextField type="file" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Blood Group:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">c</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                House :
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="patna">Patna</MenuItem>
                                    <MenuItem value="delhi">Delhi</MenuItem>
                                    <MenuItem value="up">Up</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Height :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Weight :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={3} item>
                                Measurement Date :
                                <TextField type="date" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                <Button variant="contained" sx={{ marginTop: '20px', border: 'none' }} startIcon={<AddIcon />}
                                >Add Sibling</Button>
                            </Grid>

                            <Grid xs={12} item>
                                Medical Histroy :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                Transport Details
                            </Grid>
                            <Grid xs={12} sm={4} item>
                                Route List:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="noida">noida</MenuItem>
                                    <MenuItem value="delhi">delhi</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Pickup Point:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="app">App</MenuItem>
                                </Select>
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Fees Month:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select Month</MenuItem>
                                    <MenuItem value="jan">Jan</MenuItem>
                                    <MenuItem value="feb">Feb</MenuItem>
                                </Select>

                            </Grid>

                            <Grid xs={12} item>
                                Hostel Details
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                Hostel:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="first">First</MenuItem>
                                    <MenuItem value="second">Second</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Room no:
                                <Select variant="outlined" size="small" fullWidth required>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="220">220</MenuItem>
                                    <MenuItem value="225">225</MenuItem>
                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                Fees Details

                            </Grid>
                            <Grid xs={12} item>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{<AddIcon />}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>{<AddIcon />}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </Grid>

                            <Grid xs={12} item>
                                Parent Guardian Details :
                            </Grid>
                            <Grid xs={12} sm={3} item>
                                Father Name:
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                Father Phone:
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Father Occupation :
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Father Photo :
                                <TextField type="file" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                Mother Name:
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                Mother Phone:
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Mother Occupation :
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Mother Photo :
                                <TextField type="file" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>

                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group" >
                                        <Typography>If Guardian Is * </Typography>
                                        <FormControlLabel size="small" sx={{ height: 25, width: 80, paddingLeft: 1 }} value="father" control={<Radio size="small" sx={{ height: 40, width: 40 }} />} label="Father" />
                                        <FormControlLabel size="small" sx={{ height: 25, width: 80, paddingLeft: 1 }} value="Mother" control={<Radio size="small" sx={{ height: 40, width: 40 }} />} label="Mother" />
                                        <FormControlLabel size="small" sx={{ height: 25, width: 80, paddingLeft: 1 }} value="Other" control={<Radio size="small" sx={{ height: 40, width: 40 }} />} label="Other" />


                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Guardian Name *
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                Guardian Relection :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Guardian Email :
                                <TextField type="email" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Guardian Photo :
                                <TextField type="file" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={3} item>
                                Guardian Phone :
                                <TextField type="phone" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={3} item>
                                Guardian Occupation :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Guardian Address :
                                <TextField type="text" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Add More Details </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> Student Address Details:</Typography>
                                        <Stack direction="row" gap={1}>
                                            <Grid xs={12} item>
                                                <FormControlLabel control={<Checkbox />} label="If Guardian Address Is Current Address" />

                                                <Grid xs={12} item>
                                                    Current Address :
                                                    <TextField type="text" variant="outlined" size="small" fullWidth />
                                                </Grid>

                                            </Grid>


                                            <Grid xs={12} item>
                                                <FormControlLabel control={<Checkbox />} label="If Permament Address Is Current Address" />

                                                <Grid xs={12} item>
                                                    Permament Address :
                                                    <TextField type="text" variant="outlined" size="small" fullWidth />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid xs={12} item>
                                Miscellaneous Details :
                            </Grid>
                            <Grid xs={12} sm={4} item>
                                Bank Account Number :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>


                            <Grid xs={12} sm={4} item>
                                Bank Number:
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                IFSC code :
                                <TextField type="text" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                National Indtification Number:
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={4} item>
                                Local Indtification Number :
                                <TextField type="number" variant="outlined" size="small" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={4} style={{ marginTop: '30px' }} item>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group" >
                                        <Typography>RTE * </Typography>
                                        <FormControlLabel size="small" sx={{ height: 25, width: 80, paddingLeft: 1 }} value="yes" control={<Radio size="small" sx={{ height: 40, width: 40 }} />} label="yes" />
                                        <FormControlLabel size="small" sx={{ height: 25, width: 80, paddingLeft: 1 }} value="no" control={<Radio size="small" sx={{ height: 40, width: 40 }} />} label="no" />



                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Previous School Details :
                                <TextField type="text" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Note :
                                <TextField type="text" variant="outlined" fullWidth required />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}

export default StudentForm;