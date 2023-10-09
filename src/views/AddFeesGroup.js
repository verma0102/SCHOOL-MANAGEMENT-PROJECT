import { Row, Col, Input, Card, Table } from 'reactstrap';
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Button } from '@mui/material';

const AddFeesGroup = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>
                        <h3>Add Fees Group</h3>
                        <label>Name</label>
                        <Input type="text" />
                        <label>Description</label>
                        <Input type="textarea" cols="4" />
                        <Button style={{ marginTop: "10px", width: "100px" }} variant='contained'>Save</Button>
                    </Card>
                </Col>

                <Col md="8">
                    <Card style={{
                        padding
                            : "20px"
                    }}>
                        <h3> Fees Group List</h3>
                        <Row>
                            <Col><Input type="search" placeholder="Search..." style={{ width: "300px" }} /></Col>
                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>
                        </Row>
                        <Table>
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Description</th>
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

export default AddFeesGroup;