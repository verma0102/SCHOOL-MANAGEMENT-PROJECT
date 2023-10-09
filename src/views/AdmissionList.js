

import { Row,Col,Card,CardHeader,Input,CardTitle,Table } from "reactstrap";

import { FormControl, InputLabel,Select,MenuItem } from "@mui/material";

const { CardBody } = require("reactstrap")

const AdmissionList = () => {
return(
    <div className="content">
        <Card>
      
        <Row>
                <Col md="12">
                    <Card>
                    <CardTitle tag="h4">Select Criteria</CardTitle>
                            <Table  responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                                                <Select label="Class">
                                                    <MenuItem>English</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </th>
                                        <th>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                                <Select label="Subject">
                                                    <MenuItem>220</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </th>
                                        <th>
                                            <FormControl fullWidth>
                                              
                                               <Input type="text"
                                               placeholder="Search by Student Name, Roll No, Enroll Number" ></Input>
                                            </FormControl>
                                        </th>
                                  
                                    </tr>
                                </thead>
                                </Table>
                             
                              </Card>
                                </Col>
                                </Row>
                                

                                
                                <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Subject List</CardTitle>
                        </CardHeader>
                        <Col md="4">
                            <Input placeholder="Search...."
                                type="search" />
                        </Col>
                        </Card>

<Card>
<Table>
    <thead>
        <tr>
            <th> Admission No </th>
            <th> Student Name </th>
            <th> Class </th>
            <th> Father Name </th>
            <th> Disable Reason</th>
            <th> Gender </th>
            <th> Mobile Number </th>
            <th> Action </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>560671</td>
            <td>Jany Martin</td>
            <td>Class 4(A)</td>
            <td>Gary Martin</td>
            <td>11/17/2017</td>
            <td>Female</td>
            <td>890876787</td>
            <td></td>
            </tr>
            </tbody>
        </Table>
    </Card>
    </Card>
    </div>
)
}

export default AdmissionList;