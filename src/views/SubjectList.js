import React from "react";


// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Input,
} from "reactstrap";

import {
    MenuItem,
    Pagination, Select, FormControl, InputLabel
} from "@mui/material";


const SubjectList = () => {
 
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Subject List</CardTitle>
                        </CardHeader>
                        <Col md="4">
                            <Input placeholder="Search...."
                                type="search" />
                        </Col>
                        <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label" >Subject</InputLabel>
                                                <Select size="small" label="Subject">
                                                    <MenuItem>English</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </th>
                                        <th>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Subject Code</InputLabel>
                                                <Select size="small" Subject>
                                                    <MenuItem>220</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </th>
                                        <th>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Subject Type</InputLabel>
                                                <Select size="small" Subject>
                                                    <MenuItem>Theory</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </th>
                                        <th>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Action</InputLabel>
                                                <Select size="small" label="Subject">
                                                    <MenuItem>Theory</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </th>
                                        {/* <i className="tim-icons icon-minimal-down" />
                                        <th>Subject Code</th>
                                        <th>Subject Type</th> */}
                                        {/* <th className="text-center">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {Data.map((d, i) => {
                                        <tr key={i}>
                                            <td>{d.Subject}</td>
                                        </tr>
                                    })} */}
                                    <tr>
                                        <td>English</td>
                                        <td>210</td>
                                        <td>Theory</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Hindi</td>
                                        <td>230</td>
                                        <td>Theory</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Mathematics</td>
                                        <td>110</td>
                                        <td>Practical</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                        <td>111</td>
                                        <td>Practical</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Social Studies</td>
                                        <td>212</td>
                                        <td>Practical</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>French</td>
                                        <td>231</td>
                                        <td>Theory</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Drawing</td>
                                        <td>200</td>
                                        <td>Practical</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Computer</td>
                                        <td>220</td>
                                        <td>Practical</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Elective 1</td>
                                        <td>101</td>
                                        <td>Theory</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Elective 2</td>
                                        <td>102</td>
                                        <td>Theory</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Elective 3</td>
                                        <td>103</td>
                                        <td>Theory</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                          <Pagination fullWidth count={10} />
                        </CardBody>

                    </Card>
                </Col>
             
            </Row>


        </div>
    )
}

export default SubjectList;