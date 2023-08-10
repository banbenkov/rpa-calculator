import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";

const InputLicens = (props) => {
    return (
        <Col>
            <div className="header-input mb-1 p-2"><h6>КОЛ-ВО ПРИОБРЕТАЕМЫХ ЛИЦЕНЗИЙ И СТОИМОСТЬ РАЗРАБОТКИ АЛГОРИТМОВ</h6></div>
            <InputGroup className="mb-1">
                <DropdownButton
                    variant="outline-secondary"
                    title={props.licensArr[props.licensType]}
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item onClick={() => props.setLicensType(0)}>Лицензия на 12 мес</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.setLicensType(1)}>Лицензия бессрочная</Dropdown.Item>
                </DropdownButton>
                <Form.Control value={props.licens} onChange={e => props.setLicens(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Кол-во лицензий
                </InputGroup.Text>
                <Form.Control value={props.licensQuan} onChange={e => props.setLicensQuan(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Стоимость дополнительного ПО
                </InputGroup.Text>
                <Form.Control value={props.priceAddSoft} onChange={e => props.setPriceAddSoft(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Стоимость разработки и тестирования алгоритма для Робота, руб
                </InputGroup.Text>
                <Form.Control value={props.priceDevelop} onChange={e => props.setPriceDevelop(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Коэффициент быстродействия робота относительно человека x
                </InputGroup.Text>
                <Form.Control value={props.perform} onChange={e => props.setPerform(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="basic-addon3">
                    Стоимость поддержки в год, в год
                </InputGroup.Text>
                <Form.Control value={props.price} onChange={e => props.setPrice(e.target.value)}/>
            </InputGroup>
        </Col>
    );
};

export default InputLicens;