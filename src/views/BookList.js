import React from "react";
import { CardContent, Card, Grid, Typography, Button, TextField, Table, Modal, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'


const style = {
    position: 'absolute',
    top: '54%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const BookList = () => {
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
                                    BookList
                                </Typography>
                            </Grid>



                            <Grid xs={12} sm={2} item>
                                <Button onClick={handleOpen} variant='contained' size='small' startIcon={<AddIcon />}>AddBook</Button>
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
                                                        <Grid xs={12} sm={8} item>
                                                            <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                                                Add Book
                                                            </Typography>
                                                        </Grid>


                                                        <Grid xs={12} sm={2} item>
                                                            <Button onClick={handleClose} variant="contained" size='small'>X</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={2} item>
                                                            <Button variant='contained' size='small' startIcon={<AddIcon />}>ImportBook</Button>
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Book Title *
                                                            <TextField type="text" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Book Number
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} sm={6} item>
                                                            ISBN Number
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Publiser
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Author
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Subject
                                                            <TextField type="text" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} sm={6} item>
                                                            Rack Number
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Qty
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Book price
                                                            <TextField type="number" variant="outlined" size='small' fullWidth />
                                                        </Grid>

                                                        <Grid xs={12} sm={6} item>
                                                            Post Date
                                                            <TextField type="date" variant="outlined" size='small' fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} sm={6} item>
                                                            Description
                                                            <TextField type="text" variant="outlined" fullWidth />
                                                        </Grid>


                                                        <Grid xs={12} item>
                                                            <Stack direction='row-reverse'>
                                                                <Button variant="contained" size='small'>Save</Button>
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
                                <Table border='1'>
                                    <thead>
                                        <tr>
                                            <th>BookTitle</th>
                                            <th>Description</th>
                                            <th>Book Number</th>
                                            <th>ISBN Number</th>
                                            <th>Publiser</th>
                                            <th>Author</th>
                                            <th>Subject</th>
                                            <th>Rack Number</th>
                                            <th>Qty</th>
                                            <th>Available</th>
                                            <th>Book price</th>
                                            <th>Post Date</th>
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
export default BookList;