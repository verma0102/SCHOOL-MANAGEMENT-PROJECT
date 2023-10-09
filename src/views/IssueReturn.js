
import { CardContent, Card, Grid, Typography, TextField, Table } from "@mui/material";

// icon
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'




const IssueReturn = () => {

    return (
        <div className="content">
            <Card style={{ margin: "0 auto" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                    Members
                                </Typography>
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
                                            <th>Members Id</th>
                                            <th>Library Card No.</th>
                                            <th>Admission No</th>
                                            <th>Name</th>
                                            <th>Member Type</th>
                                            <th>Phone</th>
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
export default IssueReturn;