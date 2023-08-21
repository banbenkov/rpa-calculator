import React from 'react';
import Table from "react-bootstrap/Table";
import textTable from "../texts/TextTable";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TableInfo = (props) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Укажите email для получение расширенного расчета стоимости и окупаемости вашего процесса
        </Tooltip>
    );
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
                <tr>
                    <td>{textTable.tabRow4Col1}</td>
                    <td>{props.priceProcRobotSecond}</td>
                    <td>{textTable.tabRow4Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow5Col1}</td>
                    <td>{props.expenFirstYear}</td>
                    <td>{textTable.tabRow5Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow6Col1}</td>
                    <td>{props.expenSecondYear}</td>
                    <td>{textTable.tabRow6Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow7Col1}</td>
                    <td>{props.fteStaff}</td>
                    <td>{textTable.tabRow7Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow8Col1}</td>
                    <td>{props.fteRobot}</td>
                    <td>{textTable.tabRow8Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow9Col1}</td>
                    <td>{props.roiFirst}%</td>
                    <td>{textTable.tabRow9Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow10Col1}</td>
                    <td>{props.roiSecond}%</td>
                    <td>{textTable.tabRow10Col2}</td>
                </tr>
                <tr>
                    <td>{textTable.tabRow11Col1}</td>
                    <td>{props.timePayback}</td>
                    <td>{textTable.tabRow11Col2}</td>
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
                                value={props.mail}
                                onChange={e => props.setMail(e.target.value)}
                            />
                        </FloatingLabel>
                        <Button variant="outline-secondary" id="button-addon2" onClick={() => props.sendData()}>
                            Отправить
                        </Button>
                    </InputGroup>
                </OverlayTrigger>
            </Col>
        </div>
    );
};

export default TableInfo;