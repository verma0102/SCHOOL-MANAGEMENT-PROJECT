import React, { useState, useEffect } from 'react';
import PostalTable from './PostalTable';

import { Card, Row, Col, CardHeader, CardBody, FormGroup, Form, Input, CardFooter } from "reactstrap";
import { Button } from '@mui/material';


const PostalDispatch = () => {
    const [data, setData] = useState({ title: "", reference: "", address: "", note: "" });
    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = () => {
        console.log("data", data);

        let rcd = {
            title: data.title,
            reference: data.reference,
            address: data.address,
            note: data.note
        }
        console.log("data1", rcd);
        setRecords([...records, rcd])
    }
    console.log(records);




    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Do something with the selected file, such as upload it to a server or process it.
        console.log(file);
    }


    // useEffect(() => {
    //     console.log(`Formatted value is ${fmtValue}`)
    // }, [fmtValue])

    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card>
                        <CardHeader>
                            <h3 className="title">Postal Dispatch Form</h3>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>To title</label>
                                            <Input
                                                type="text"
                                                value={data.title}
                                                placeholder="To Title"
                                                name="title"
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <FormGroup>
                                            <label> Reference</label>
                                            <Input
                                                placeholder="Reference"
                                                type="text"
                                                name="reference"
                                                value={data.reference}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md="12">
                                        <FormGroup>
                                            <label>Address</label>
                                            <Input

                                                placeholder="Address"
                                                rows="4"
                                                type="textarea"
                                                name="address"
                                                value={data.address}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md="12">
                                        <FormGroup>
                                            <label>Note</label>
                                            <Input
                                                placeholder="Note"
                                                rows="4"
                                                type="textarea"
                                                name="note"
                                                value={data.note}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md="12">
                                        <FormGroup>
                                            <label>From title</label>
                                            <Input
                                                type="text"
                                                placeholder="From Title"
                                            />
                                        </FormGroup>
                                    </Col>
                                    {/* 
                                    <Col md="12">
                                        <FormGroup>
                                            <label> Date</label>
                                            <Input
                                                placeholder="28/07/23"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="12">
                                        <FormGroup>
                                            <label> Attach Document </label>
                                            <Input
                                                placeholder="Document"
                                                type="text"
                                            />
                                        </FormGroup> 
                                    </Col>*/}
                                    {/* <Col md="12">
                                        <FormGroup>
                                            <label>Date</label>
                                            <DatePicker
                                                value={value}
                                                onChange={(v, f) => handleDChange(v, f)} />
                                        </FormGroup>
                                    </Col> */}


                                    <Col md="12">
                                        <FormGroup>
                                            <label>Date</label>
                                            <Input
                                                type="date"

                                            />
                                        </FormGroup>
                                    </Col>


                                    <Col md="12">
                                        <FormGroup>
                                            <label> Attach Document </label>
                                            <Input
                                                placeholder="Document"
                                                type="file"

                                                onChange={handleFileChange}

                                            />
                                            <Button variant='contained' size='small'>
                                                Upload File
                                            </Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" variant='contained' onClick={handleSubmit}>
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="8">
                    <PostalTable records={records} />
                </Col>
            </Row>
        </div>

    )
}

export default PostalDispatch;