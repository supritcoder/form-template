import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  
  function handelClick(){
    navigate("/template1")
  }



  const handleTemplateSelect = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  

  return (
    <Stack gap={3}>
      <div className="p-2"></div>
     <div className="p-3">
  <Container className="d-flex justify-content-between">
    <Row>
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="primary" size='sm'>Search Invoice</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
      <Button variant="primary" size='sm'>Search Invoice For Project</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
      <Button variant="primary" size='sm'>Search Invoice For Client</Button>
      </ButtonGroup>
    </ButtonToolbar>
      
    </Row>
  </Container>
</div>
 <div className="p-2"><Container className="d-flex justify-content-center">
      <Card>
        <Card.Body>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Invoice No</th>
                <th>Client No</th>
                <th>Project No</th>
                <th>Billing Type</th>
                <th>Invoice Amount</th>
                <th>Professional Service Value</th>
                <th>Admin Surcharge</th>
                <th>Expenses</th>
                <th>Discount</th>
                <th>Write-off</th>
                <th>Select Template</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1291</td>
                <td>2312123</td>
                <td>657423</td>
                <td>T&M</td>
                <td>10,000</td>
                <td>15,000</td>
                <td>600</td>
                <td>500</td>
                <td>1600</td>
                <td>3500</td>
                <td onClick={handleTemplateSelect}><Button variant="info" size='sm'>Select Template</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>1291</td>
                <td>2312123</td>
                <td>657423</td>
                <td>T&M</td>
                <td>10,000</td>
                <td>15,000</td>
                <td>600</td>
                <td>500</td>
                <td>1600</td>
                <td>3500</td>
                <td onClick={handleTemplateSelect}><Button variant="info" size='sm'>Select Template</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>1291</td>
                <td>2312123</td>
                <td>657423</td>
                <td>T&M</td>
                <td>10,000</td>
                <td>15,000</td>
                <td>600</td>
                <td>500</td>
                <td>1600</td>
                <td>3500</td>
                <td onClick={handleTemplateSelect}><Button variant="info" size='sm'>Select Template</Button></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="link" onClick={handelClick}>Template 1</Button>
             
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
    </Stack>

    
  );
}

export default LandingPage;
