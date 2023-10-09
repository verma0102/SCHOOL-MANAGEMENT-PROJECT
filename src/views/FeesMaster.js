import { Row, Col, Input, Card, Table } from 'reactstrap';
import { HiOutlinePencil, HiOutlineX } from 'react-icons/hi'
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'
import { Select, Radio } from "@mui/material"
import { Button } from '@mui/material';
const FeesMaster = () => {
    return (
        <div className='content'>
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>
                        <h3>Add Fees Master: 2023-24</h3>
                        <label>Fees Group</label>
                        <Select></Select>
                        <label>Fees type</label>
                        <Select></Select>
                        <label>Due Date</label>
                        <Input></Input>
                        <label>Amount</label>
                        <Input></Input>
                        <label>Fine Tip</label>
                        <Radio>None</Radio>


                        <Button style={{ marginTop: "20px", width: "100px" }} variant='contained'>Save</Button>
                    </Card>
                </Col>

                <Col md="8">
                    <Card style={{
                        padding
                            : "20px"
                    }}>
                        <h3> Category List </h3>
                        <Row>
                            <Col><Input type="search" placeholder="Search..." style={{ width: "300px" }} /></Col>
                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>
                        </Row>



                        <Table>
                            <thead>
                                <tr>
                                    <th> Category </th>
                                    <th> Category Id </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>General</td>
                                    <td>1</td>
                                    <td><HiOutlinePencil size={20} /><HiOutlineX size={20} /></td>
                                </tr>
                                <tr>
                                    <td>OBC</td>
                                    <td>2</td>
                                    <td><HiOutlinePencil size={20} /><HiOutlineX size={20} /></td>
                                </tr>
                                <tr>
                                    <td>Special</td>
                                    <td>3</td>
                                    <td><HiOutlinePencil size={20} /><HiOutlineX size={20} /></td>
                                </tr>
                                <tr>
                                    <td>Physically Challenged</td>
                                    <td>4</td>
                                    <td><HiOutlinePencil size={20} /><HiOutlineX size={20} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>


            </Row>
        </div>
    )
}

export default FeesMaster;