import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import InputPerson from "./InputPerson";
import InputLicens from "./InputLicens";
import Button from "react-bootstrap/Button";
import TableInfo from "./TableInfo";
import Form from 'react-bootstrap/Form';
import CutTableInfo from "./CutTableInfo";


const InputBlock = () => {
    //Вводные данные по персоналу.
    const [numEmp, setNumEmp] = useState(0);
    const [numRep, setNumRep] = useState(0);
    const [numMin, setNumMin] = useState(0);
    const [salaryAmount, setSalaryAmount] = useState(0);
    const [empAmount, setEmpAmount] = useState(0);

    //КОЛ-ВО ПРИОБРЕТАЕМЫХ ЛИЦЕНЗИЙ И СТОИМОСТЬ РАЗРАБОТКИ АЛГОРИТМОВ
    const [licensType, setLicensType] = useState(0);
    const [licens, setLicens] = useState(0);
    const [licensQuan, setLicensQuan] = useState(0);
    const [priceAddSoft, setPriceAddSoft] = useState(0);
    const [priceDevelop, setPriceDevelop] = useState(200000);
    const [perform, setPerform] = useState(2);
    const [price, setPrice] = useState(100000);

    //Данные для таблицы
    const [timeEmpl, setTimeEmpl] = useState(0);
    const [timeRobot, setTimeRobot] = useState(0);
    const [expenFirstYear, setExpenFirstYear] = useState(0);
    const [expenSecondYear, setExpenSecondYear] = useState(0);
    const [fteStaff, setFteStaff] = useState(0);
    const [fteRobot, setFteRobot] = useState(0);
    const [priceProcEmpl, setPriceProcEmpl] = useState(0);
    const [priceProcRobot, setPriceProcRobot] = useState(0);
    const [priceProcRobotSecond, setPriceProcRobotSecond] = useState(0);
    const [roiFirst, setRoiFirst] = useState(0);
    const [roiSecond, setRoiSecond] = useState(0);
    const [timePayback, setTimePayback] = useState(0);

    const [showTable, setShowTable] = useState(false);
    const [switchType, setSwitchType] = useState(false);
    const licensArr = ['Лицензия на 12 мес', 'Лицензия бессрочная'];
    const switchText = ['Полная версия таблицы', 'Обрезанная версия таблицы'];

    useEffect(() => {
        if (licensType === 0) {
            setLicens(300000);
        } else {
            setLicens(0);
        }
    }, [licensType]);

    const calculate = () => {
        const timeEmplC = parseInt(numMin) * 247 / 60 * parseInt(numRep);
        const timeRobotC = timeEmplC / perform;
        const fteStaffC = timeEmplC / 1972;
        const fteRobotC = timeRobotC / 8760;
        const priceProcEmplC = fteStaffC * parseInt(empAmount);
        const priceProcRobotC = Math.round((parseInt(licens) * parseInt(licensQuan) + parseInt(licens) + parseInt(priceDevelop) + parseInt(price)) * fteRobotC);
        const priceProcRobotSecondC = Math.round((parseInt(licens) + parseInt(price)) * fteRobotC);
        setTimeEmpl(timeEmplC);
        setTimeRobot(timeRobotC);
        setExpenFirstYear(parseInt(licens) * parseInt(licensQuan) + parseInt(priceDevelop) + parseInt(price));
        setExpenSecondYear(parseInt(licens) + parseInt(priceAddSoft) + parseInt(price));
        setFteStaff(fteStaffC.toFixed(2));
        setFteRobot(fteRobotC.toFixed(2));
        setPriceProcEmpl(Math.round(priceProcEmplC));
        setPriceProcRobot(priceProcRobotC);
        setPriceProcRobotSecond(priceProcRobotSecondC);
        setRoiFirst(((priceProcEmplC - priceProcRobotC) / priceProcRobotC * 100).toFixed(2));
        setRoiSecond(((priceProcEmplC - priceProcRobotSecondC) / priceProcRobotSecondC * 100).toFixed(2));
        setTimePayback((priceProcRobotC / (priceProcEmplC / 12)).toFixed(1));
        setShowTable(true);

    }
    return (
        <Row>
            <InputPerson numEmp={numEmp} setNumEmp={setNumEmp}
                         numRep={numRep} setNumRep={setNumRep}
                         numMin={numMin} setNumMin={setNumMin}
                         salaryAmount={salaryAmount} setSalaryAmount={setSalaryAmount}
                         empAmount={empAmount} setEmpAmount={setEmpAmount}/>
            <InputLicens licens={licens} setLicens={setLicens}
                         licensType={licensType} setLicensType={setLicensType}
                         licensQuan={licensQuan} setLicensQuan={setLicensQuan}
                         priceAddSoft={priceAddSoft} setPriceAddSoft={setPriceAddSoft}
                         priceDevelop={priceDevelop} setPriceDevelop={setPriceDevelop}
                         perform={perform} setPerform={setPerform}
                         price={price} setPrice={setPrice}
                         licensArr={licensArr}
            />
            <Form>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label={switchType ? switchText[0] : switchText[1]}
                    onClick={() => setSwitchType(!switchType)}
                />
            </Form>
            <Button variant="secondary" size="lg" className='mb-3' onClick={() => calculate()}>
                Рассчитать
            </Button>
            {switchType ?
                <TableInfo showTable={showTable} timeEmpl={timeEmpl}
                           timeRobot={timeRobot} expenFirstYear={expenFirstYear}
                           expenSecondYear={expenSecondYear} fteStaff={fteStaff}
                           fteRobot={fteRobot} priceProcEmpl={priceProcEmpl}
                           priceProcRobot={priceProcRobot} priceProcRobotSecond={priceProcRobotSecond}
                           roiFirst={roiFirst} roiSecond={roiSecond}
                           timePayback={timePayback}/>
                :
                <CutTableInfo showTable={showTable} timeEmpl={timeEmpl}
                              timeRobot={timeRobot} priceProcEmpl={priceProcEmpl}
                              priceProcRobot={priceProcRobot}/>}

        </Row>
    );
};

export default InputBlock;