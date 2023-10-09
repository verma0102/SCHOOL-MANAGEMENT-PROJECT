import { Typography, Grid, Card, CardContent, TextField, Table } from "@mui/material";


import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const TeacherRating = () => {
    return (
        <div className="content">

            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Teachers Rating List
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={10} item>
                                <TextField type="text" size="small" placeholder="Search..." />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>

                            <Grid xs={12} item>


                                <Table>
                                    <thead>
                                        <tr>

                                            <th>Staff Id</th>
                                            <th>Name</th>
                                            <th>Rating</th>
                                            <th>Comment</th>
                                            <th>Status</th>
                                            <th>Student Name</th>
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
export default TeacherRating;