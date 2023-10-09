import React from "react";
import { CardContent, Card, Grid, Typography, TextField, Table, Button, Modal, Box, Select, MenuItem, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const style = {
    position: 'absolute',
    top: '69%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const IssueItem = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="content">
            <Card style={{ margin: "0 auto" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={10} item>
                                <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                    Issue Item List
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Button onClick={handleOpen} variant='contained' startIcon={<AddIcon />}>Issue Item</Button>
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
                                                            <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                                                Issue Item List
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={12} sm={1} item>
                                                            <Button onClick={handleClose} variant="contained">X</Button>

                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            UserType *
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <menuItem>Select</menuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Issue To
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <menuItem>Select</menuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Issue By
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <menuItem>Select</menuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Date *
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Return Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Note
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Item Category
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <menuItem>Select</menuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid xs={12} sm={4} item>
                                                            Item
                                                            <Select variant="outlined" size='small' fullWidth>
                                                                <menuItem>Select</menuItem>
                                                                <MenuItem value='a'>A</MenuItem>
                                                                <MenuItem value='b'>B</MenuItem>
                                                            </Select>
                                                        </Grid>


                                                        <Grid xs={12} sm={4} item>
                                                            Quiantity
                                                            <TextField type="text" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse'>
                                                                <Button variant="contained">Submit</Button>
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

                                <TextField type="Search" placeholder="Search..." variant="outlined" size="small" />
                            </Grid>


                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Note</th>
                                            <th>Item Category</th>
                                            <th>Issue-Return</th>
                                            <th>Issue To</th>
                                            <th>Issued By</th>
                                            <th>Quiantity</th>
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
export default IssueItem;