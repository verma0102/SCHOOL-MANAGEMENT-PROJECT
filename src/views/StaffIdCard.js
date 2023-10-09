import {Input, Label, Row ,Col,Table} from "reactstrap";

const StaffIdCard = () => {
return(
    <div className="content">
    <Row>
        <Col md = "4"><Input type="search" placeholder="search...." /></Col>
        </Row>
        <Row>
   <Col md="4">
   <Label for="exampleSelectMulti">Id Card Title</Label>
    <Input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input>
   </Col>
   <Col md="4">
   <Label for="exampleSelectMulti">Background Image</Label>
    <Input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input>
   </Col>
   <Col md="4">
   <Label for="exampleSelectMulti">Design Type</Label>
    <Input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input>
   </Col>
    </Row>

    <Table>
        <thead>
            <tr>
                <th>Id Card Title</th>
                <th>Background Image</th>
                <th>Design type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sample Staff Id Card</td>
                <td>Image 1</td>
                <td>Horizontal</td>
            </tr>
            <tr>
                <td>Sample Staff ID Card Vertical</td>
                <td>Image 2</td>
                <td>Vertical</td>
            </tr>
        </tbody>
    </Table>
    </div>
)
}

export default StaffIdCard;