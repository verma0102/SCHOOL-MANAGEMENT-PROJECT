import React from "react";
import { Card, CardContent, Grid, Typography, Button, Select, MenuItem, Stack, Modal, Box } from "@mui/material";

import Add from "@mui/icons-material/Add";

const style = {
    position: 'absolute',
    top: '62%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const ClassTable = () => {
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
                            <Grid xs={12} sm={11} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Select Criteria
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Button onClick={handleOpen} variant="contained" startIcon={<Add />}>Add</Button>
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
                                                        <Grid xs={12} sm={11} item>
                                                            <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                                                Select Criteria
                                                            </Typography>
                                                        </Grid>

                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>x</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} size='small' item>
                                                            Class
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                                                <MenuItem value={12}>12<sup>th</sup></MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Section
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>



                                                        <Grid xs={12} sm={4} size='small' item>
                                                            Subject Group
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <MenuItem>Select</MenuItem>
                                                                <MenuItem value={1}>1</MenuItem>
                                                                <MenuItem value={2}>2</MenuItem>
                                                            </Select>
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

                            <Grid xs={12} sm={6} size='small' item>
                                Class
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value={10}>10<sup>th</sup></MenuItem>
                                    <MenuItem value={12}>12<sup>th</sup></MenuItem>
                                </Select>
                            </Grid>


                            <Grid xs={12} sm={6} size='small' item>
                                Section
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>
                                </Select>
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
        </div>
    )
}
export default ClassTable;