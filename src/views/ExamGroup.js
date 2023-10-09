import {
    Card,
    CardTitle,
    Table,
    Row,
    Col,
    Input

} from "reactstrap";
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Select, Radio } from "@mui/material"
import { Button } from '@mui/material';

const ExamGroup = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>

                        <CardTitle tag="h3">Add Exam Group</CardTitle>

                        <label>Name</label>
                        <Input
                            type="text" />
                        <label>Exam Type</label>
                        <Select size="small" />
                        <label>Description</label>
                        <Input
                            cols={4}
                            type="textarea" />
                        <Button style={{ width: "100px", marginTop: '10px' }} variant="contained">Save</Button>

                    </Card>
                </Col>
                <Col md="8">
                    <Card style={{ padding: "20px" }}>
                        <CardTitle tag="h4">Exam Group List</CardTitle>
                        <Row>
                            <Col md="4">
                                <Input type="search" placeholder="search"></Input>
                            </Col>

                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>

                        </Row>



                        <Table>
                            <thead>
                                <tr>
                                    <th> Name </th>
                                    <th> No. of Exams</th>
                                    <th> Exam Type </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default ExamGroup;