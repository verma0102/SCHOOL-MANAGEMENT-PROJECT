import { Typography, Card, CardContent, Grid, TextField, Select, MenuItem, Pagination } from "@mui/material";
const Criteria = () => {
    return (

        <div className="content">

            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Select Criteria :
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                Class:-
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem>Class</MenuItem>
                                    <MenuItem value="class1">Class1</MenuItem>
                                    <MenuItem value="class2">Class2</MenuItem>
                                    <MenuItem value="class3">Class3</MenuItem>
                                    <MenuItem value="class4">Class4</MenuItem>
                                    <MenuItem value="class5">Class5</MenuItem>
                                </Select>

                            </Grid>
                            <Grid xs={12} sm={6} item>
                                Section:-
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>
                                    <MenuItem value="d">D</MenuItem>
                                    <MenuItem value="e">E</MenuItem>
                                </Select>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>

    )
}
export default Criteria;


