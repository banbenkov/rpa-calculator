import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const InputPerson = ({numEmp, setNumEmp, numRep, setNumRep, numMin, setNumMin, salaryAmount, setSalaryAmount, empAmount, setEmpAmount}) => {
    return (
        <Col>
            <div className="header-input mb-1 p-2 pb-4"><h6>ВВОДНЫЕ ДАННЫЕ ПО ПЕРСОНАЛУ</h6></div>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon1">
                    Количество сотрудников задействованных в процессе
                </InputGroup.Text>
                <Form.Control type='number' value={numEmp} onChange={e => setNumEmp(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Количество повторений процесса за день (на одного сотрудника)
                </InputGroup.Text>
                <Form.Control type='number' value={numRep} onChange={e => setNumRep(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Количество минут потраченное сотрудником на один процесс
                </InputGroup.Text>
                <Form.Control type='number' value={numMin} onChange={e => setNumMin(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Сумма оклада сотрудника, руб
                </InputGroup.Text>
                <Form.Control type='number' value={salaryAmount} onChange={e => setSalaryAmount(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Стоимость одного сотрудника в год (оклад, НДФЛ, Соц.отчисления), руб
                </InputGroup.Text>
                <Form.Control type='number' value={empAmount} onChange={e => setEmpAmount(e.target.value)}/>
            </InputGroup>
        </Col>
    );
};

export default InputPerson;