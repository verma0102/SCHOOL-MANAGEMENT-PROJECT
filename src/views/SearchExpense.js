import { Card, CardContent, Grid, MenuItem, Select, Button, Typography, Stack, TextField, Table } from "@mui/material";

//icon
import { VscFiles } from 'react-icons/vsc';
import { PiFileX } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFileExcel2Line } from 'react-icons/ri';


const SearchExpense = () => {
    return (
        <div className="content">
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant='h4'>
                                    Select Criteria
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Search Type *
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value='abc'>abc</MenuItem>
                                    <MenuItem value='xyz'>xyz</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                Search *
                                <Select variant="outlined" size='small' fullWidth>
                                    <MenuItem>Search</MenuItem>
                                    <MenuItem value='abc'>Google</MenuItem>
                                    <MenuItem value='xyz'>Instagram</MenuItem>

                                </Select>
                            </Grid>

                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button variant='contained' size='small'>Save</Button>
                                </Stack>
                            </Grid>

                            <Grid xs={12} item>
                                <Typography sx={{ color: 'black' }} gutterBottom variant="h4">
                                    Expense
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={10} item>
                                <TextField variant="outlined" size='small' placeholder="Search..." />
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </Grid>


                            <Grid xs={12} item>
                                <Table border='2px'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Invoice Number</th>
                                            <th>Expense Head</th>
                                            <th>Date</th>
                                            <th>Amount ($) </th>


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
export default SearchExpense;