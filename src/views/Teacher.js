import { Typography, Card, CardContent, Grid, TextField, Select, MenuItem, Pagination } from "@mui/material";
const Teacher = () => {
    return (

        <div className="content">
            <Typography gutterBottom variant="h4">
                Class Teacher List
            </Typography>
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField lable="text" variant="outlined" size="small" placeholder="Search" required />
                            </Grid>

                            <Grid xs={12} sm={4} item>
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
                            <Grid xs={12} sm={4} item>
                                Section:-
                                <Select label="text" variant="outlined" size="small" fullWidth >
                                    <MenuItem>Section</MenuItem>
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>
                                    <MenuItem value="d">D</MenuItem>
                                    <MenuItem value="e">E</MenuItem>
                                </Select>
                            </Grid>
                            <Grid xs={12} sm={4} item>
                                Class Teacher:-
                                <Select label="text" variant="outlined" size="small" fullWidth  >
                                    <MenuItem>Class Teacher</MenuItem>
                                    <MenuItem value="shivam">SHIVAM VERMA</MenuItem>
                                    <MenuItem value="raju">RAJU KUSHWAHA</MenuItem>
                                    <MenuItem value="dipak">DIPAK VERMA</MenuItem>
                                    <MenuItem value="vinay">VINAY SHARMA</MenuItem>
                                    <MenuItem value="abhishek">ABHISHEK SHARMA</MenuItem>
                                </Select>
                            </Grid>
                            <Grid xs={12} item>
                                <Pagination count={5} variant="outlined" color="primary" />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>



        </div>

    )
}
export default Teacher;


