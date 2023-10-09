import { CardContent, Card, Grid, Typography, Table } from "@mui/material";
//icon

import { AiOutlineFilePdf } from 'react-icons/ai'


const ExamSchedule = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }} >
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Exam Schedule
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={11} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h5">
                                    Quarterly Examination ( September -2023 )
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <AiOutlineFilePdf size={30} />
                            </Grid>

                            <Grid xs={12} item>
                                <Table border="1">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Date</th>
                                            <th>StartTime</th>
                                            <th>Duration (minutes)</th>
                                            <th>Room No.</th>

                                        </tr>
                                    </thead>
                                </Table>
                            </Grid>


                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default ExamSchedule;