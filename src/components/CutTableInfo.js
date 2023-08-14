import React from 'react';
import Tooltip from "react-bootstrap/Tooltip";
import Table from "react-bootstrap/Table";
import textTable from "../texts/TextTable";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CutTableInfo = (props) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Укажите email для получение расширенного расчета стоимости и окупаемости вашего процесса
        </Tooltip> );

    return (
        <div hidden={!props.showTable}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th colSpan={2}>Сравнение</th>
                    <th>Пояснения</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{textTable.tabRow1Col1}</td>
                    <td>{props.timeEmpl}</td>
                    <td>{textTable.tabRow1Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow2Col1}</td>
                    <td>{props.timeRobot}</td>
                    <td>{textTable.tabRow2Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow3Col1}</td>
                    <td>{props.priceProcEmpl}</td>
                    <td>{textTable.tabRow3Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow12Col1}</td>
                    <td>{props.priceProcRobot}</td>
                    <td>{textTable.tabRow4Col2}</td>
                </tr>
                </tbody>
            </Table>
            <Col sm={4}>
                <OverlayTrigger
                    placement="right"
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}
                >
                    <InputGroup className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                        >
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </FloatingLabel>
                        <Button variant="outline-secondary" id="button-addon2">
                            Отправить
                        </Button>
                    </InputGroup>
                </OverlayTrigger>
            </Col>
        </div>
    );
};

export default CutTableInfo;