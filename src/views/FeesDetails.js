import { Typography, Card, CardContent, Grid, Table } from "@mui/material";

const FeesDetails = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Typography sx={{ color: "black" }} gutterBottom variant="h4">
                                Overview
                            </Typography>
                            <Grid xs={12} item>
                                Fees Details
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Branch</th>
                                            <th>Current Session</th>
                                            <th>Total Students</th>
                                            <th>Total Fees</th>
                                            <th>Total Paid Fees</th>
                                            <th>Total Balance Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Grid>


                            <Grid xs={12} item>
                                Transport Fees Details
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Branch</th>
                                            <th>Current Session</th>
                                            <th>Total Students</th>
                                            <th>Total Fees</th>
                                            <th>Total Paid Fees</th>
                                            <th>Total Balance Fees</th>
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
export default FeesDetails;