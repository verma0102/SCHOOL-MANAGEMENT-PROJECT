import { Typography, Card, CardContent, Grid, MenuItem, Select, Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Simple = () => {
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
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div >

    )
}
export default Simple;