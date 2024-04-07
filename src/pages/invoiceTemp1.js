import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Sidebar from "./sidenav/sidenav";
import { FaCog } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './invoiceTemp1.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function InvoiceTemp1() {
  const [tableData, setTableData] = useState([]);
  const [focusedContainer, setFocusedContainer] = useState(null);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleSidebar = (className) => {
    setIsOpen(!isOpen);

  };



  const handleContainerFocus = (containerId) => {
    setFocusedContainer(containerId);
  };

  const handleContainerBlur = () => {
    setFocusedContainer(null);
  };

  const addRow = () => {
    const newRow = {
      id: tableData.length + 1,
      description: "",
      qty: 0,
      unitPrice: 0,
      amount: 0,
    };
    setTableData([...tableData, newRow]);
  };

  const handleTableDataChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  const deleteIndex = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };


  return (
    <div style={{ minHeight: "100vh" }}>
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: '#3D3D370' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Properties</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <Tabs>
            <TabList>
              <Tab>GENERAL</Tab>
              <Tab>OPTIONS</Tab>
              <Tab>ADVANCED</Tab>
            </TabList>

            <TabPanel>
              <Form.Label>Field Label</Form.Label>
              <Form.Control type="text" />
              <hr></hr>
              <Form.Label>Label Alignment</Form.Label>
              <br />
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">RIGHT</Button>
                <Button variant="secondary">TOP</Button>
              </ButtonGroup>
              <br />
              <hr></hr>
              <Form.Label>Required</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
              />
              <hr></hr>
              <Form.Label>Duplicate Field</Form.Label>
              <br />
              <Button variant="secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
              </svg> Duplicate</Button>
              <hr></hr>
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
            <TabPanel>
            <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" />
              <hr></hr>
              <Form.Label>Hover Text</Form.Label>
              
              <Form.Control
                as="textarea"
                style={{ height: '100px' }}
              />
              <hr></hr>
              <Form.Label>Default Value</Form.Label>
              <Form.Control type="text" />
              <hr></hr>
              <Form.Label>Read Only</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
              />
              <hr></hr>
              <Form.Label>Hide</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
              />
              <hr></hr>
            

              
            </TabPanel>
          </Tabs>


        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>

      <Container className="d-flex justify-content-center" >
        <Card style={{ width: "67%" }}>
          <Card.Body style={{ padding: "2rem" }}>
            <h1 className="text-center">INVOICE</h1>
            <hr></hr>

            <Form>

              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 1 ? "#D3D3D370" : "transparent",
                  padding: "1em",
                  position: "relative",
                }}
                onFocus={() => handleContainerFocus(1)}

              >
                {focusedContainer === 1 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}

                  />
                )}
                <Row className="mb-3" id="sec-1">
                  <Form.Group as={Col}>
                    <Form.Label>Invoice No</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Client Number</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>
                </Row>
              </Container>


              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 2 ? "#D3D3D370" : "transparent",
                  padding: "1em",
                  position: "relative",
                }}
                onFocus={() => handleContainerFocus(2)}

              >
                {focusedContainer === 2 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}
                  />
                )}
                <Row className="mb-3">
                  <strong>Name</strong>
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>
                </Row>
              </Container>


              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 3 ? "#D3D3D370" : "transparent",
                  padding: "1em",
                  position: "relative",
                }}
                onFocus={() => handleContainerFocus(3)}

              >
                {focusedContainer === 3 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}
                  />
                )}
                <Row>
                  <strong>Address</strong>
                  <Col sm={6}>
                    <Form.Label>Address Line</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Col>
                  <Col sm={6}></Col>
                  <Col sm={6}>
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Col>
                  <Col sm={6}></Col>
                  <Col sm={3}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Col>
                  <Col sm={3}>
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Col>
                  <Col sm={6}></Col>
                  <Col sm={3}>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Col>
                </Row>
              </Container>


              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 4 ? "#D3D3D370" : "transparent",
                  padding: "1.2em",
                  position: "relative",
                }}
                onFocus={() => handleContainerFocus(4)}

              >
                {focusedContainer === 4 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}

                  />
                )}
                <Row>
                  <strong>Email</strong>
                  <Col sm={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" size="sm" />
                  </Col>
                  <Col sm={6}></Col>
                </Row>
              </Container>


              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 5 ? "#D3D3D370" : "transparent",
                  padding: "1.2em",
                  position: "relative",
                }}
                onClick={() => handleContainerFocus(5)}
              >
                {focusedContainer === 5 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}
                  />
                )}
                <Row>
                  <strong>Phone Number</strong>
                  <Col sm={6}>
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Col>
                  <Col sm={6}></Col>
                </Row>
              </Container>


              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 6 ? "#D3D3D370" : "transparent",
                  padding: "1em",
                  position: "relative",
                }}
                onFocus={() => handleContainerFocus(6)}

              >
                {focusedContainer === 6 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}
                  />
                )}
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Professional services fee</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Admin Surcharge</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Discount</Form.Label>
                    <Form.Control type="text" size="sm" />
                  </Form.Group>
                </Row>
              </Container>

              <Container
                style={{
                  backgroundColor:
                    focusedContainer === 7 ? "#D3D3D370" : "transparent",
                  padding: "1em",
                  position: "relative",
                }}
                onFocus={() => handleContainerFocus(7)}

              >
                {focusedContainer === 7 && (
                  <FaCog
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleShow}
                  />
                )}
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th>Amount</th>
                      <th>
                        <Button size="sm" variant="secondary" onClick={addRow}>
                          Add item
                        </Button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.id}</td>
                        <td>
                          <input
                            type="text"
                            value={row.description}
                            onChange={(e) =>
                              handleTableDataChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.qty}
                            onChange={(e) =>
                              handleTableDataChange(
                                index,
                                "qty",
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.unitPrice}
                            onChange={(e) =>
                              handleTableDataChange(
                                index,
                                "unitPrice",
                                parseFloat(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td>{row.qty * row.unitPrice}</td>
                        <td>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={(e) => deleteIndex(index)}
                            active
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>

              <Container>
                <Row className="mb-3">
                  <Form.Group as={Col} className="text-end">
                    <img
                      src="/dummySign.jpeg"
                      alt="Dummy Signature"
                      style={{ maxWidth: "20%", height: "auto" }}
                    />
                  </Form.Group>
                </Row>
              </Container>

              <Container>
                <Row>
                  <Col sm={10}></Col>
                  <Col sm={2}>Signature</Col>
                </Row>
              </Container>

              <Row className="text-center">
                <Col sm={5}></Col>
                <Col sm={2}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>

                <Col sm={5}></Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default InvoiceTemp1;
