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
import { Select, Radio, Button } from "@mui/material"

const ExpenseHead = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>

                        <CardTitle tag="h4">Add Expense Head</CardTitle>

                        <label>Expense Head</label>
                        <Input
                            type="text" />
                        <label>Description</label>
                        <Input
                            cols={4}
                            type="textarea" />
                        <Button style={{ marginTop: "10px", width: "120px" }} variant="contained">Save</Button>

                    </Card>
                </Col>
                <Col md="8">
                    <Card style={{ padding: "20px" }}>
                        <CardTitle tag="h4">Expense Head List</CardTitle>
                        <Row>
                            <Col md="4">
                                <Input type="search" placeholder="search"></Input>
                            </Col>

                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>

                        </Row>



                        <Table>
                            <thead>
                                <tr>
                                    <th> Expense Head </th>
                                    <th> Description </th>
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

export default ExpenseHead;