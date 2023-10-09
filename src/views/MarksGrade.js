import { Row, Col, Input, Card } from 'reactstrap';
import { Select, Table, Button } from "@mui/material";

import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const MarksGrade = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>
                        <h3>Add Marks Grade</h3>
                        <label>Exam Type</label>
                        <Select size="small" />
                        <label>Grade Name</label>
                        <Input type="text" />
                        <label>Percent Upto</label>
                        <Input type="text" />
                        <label>Percent From</label>
                        <Input type="text" />
                        <label>Grade Point</label>
                        <Input type="text" />
                        <label>Description</label>
                        <Input type="textarea" cols="4" />
                        <Button style={{ marginTop: "20px", width: "100px" }} variant='contained'>Save</Button>
                    </Card>
                </Col>

                <Col md="8">
                    <Card style={{
                        padding
                            : "20px"
                    }}>
                        <h3>Grade List</h3>
                        <Row>
                            <Col><Input type="search" placeholder="Search..." style={{ width: "300px" }} /></Col>
                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>
                        </Row>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Exam Type</th>
                                    <th>Grade Name</th>
                                    <th>Percent From/Upto</th>
                                    <th>Grade Point</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MarksGrade;