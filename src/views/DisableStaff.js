import { Typography, Card, CardContent, Grid, MenuItem, Select, Button, Table, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { LuFileSpreadsheet } from 'react-icons/lu'

const DisableStaff = () => {
    return (

        <div className="content">

            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Select Criteria
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={5} item>
                                Role
                                <Select variant="outlined" size="small" fullWidth>
                                    <menuItem>Select</menuItem>
                                    <MenuItem value='technical'>Technical head</MenuItem>
                                    <MenuItem value='facuilty'>Facuilty</MenuItem>
                                </Select>
                            </Grid>
                            <Grid xs={12} sm={5} item>
                                Search by KeyWord
                                <Select variant="outlined" size="small" fullWidth>
                                    <menuItem>Search By staff ID Name,Role etc</menuItem>
                                    <MenuItem value='staff id'>Staff id</MenuItem>
                                    <MenuItem value='name'>Name</MenuItem>
                                    <MenuItem value='role'>Role</MenuItem>
                                </Select>
                            </Grid>
                            <Grid xs={12} sm={2} item>
                                <Button variant="contained" startIcon={<SearchIcon />} sx={{ marginTop: '19px' }}>Search</Button>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row' gap={10}>

                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h5">
                                        <LuFileSpreadsheet size={25} />
                                        Card Views
                                    </Typography>

                                    <Typography sx={{ color: 'black' }} gutterBottom variant="h5">
                                        <LuFileSpreadsheet size={25} />
                                        List Views
                                    </Typography>
                                </Stack>

                            </Grid>
                            <Grid xs={12} item>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Staff Id</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Department</th>
                                            <th>Designation</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
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
export default DisableStaff;