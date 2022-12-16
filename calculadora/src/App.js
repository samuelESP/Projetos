import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';



const App= () => {
  const [currentNumber, setCurrentNumber] =useState('...');

  const [firstNumber, setFirstNumber] = useState('...');

  const [operation, setOperation] = useState('');




  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev == '...' ? '' : prev}${number}`)
  }


  const handleClear = () =>{
    setCurrentNumber('...');
    setFirstNumber('...');
    setOperation('');
  }

  
  const handleSumNumber = () => {
    if(firstNumber === '...'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('...');
      setOperation("+");
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("")
    }
  }


  const handleReduceNumber = () => {
    if(firstNumber === '...'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('...');
      setOperation("-");
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("")
    }
  }


  const handleMultipleNumber = () => {
    if(firstNumber === '...'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('...');
      setOperation("X");
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("")
    }
  }


  const handleDivisionNumber = () => {
    if(firstNumber === '...'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('...');
      setOperation("/");
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("")
    }
  }



  const handleEquals = () => {
    if(firstNumber != '...' && operation != '' && currentNumber != '...'){
      switch(operation){
        case'+':
          handleSumNumber();
          break;
        case'-':
          handleReduceNumber();
          break;
        case'X':
          handleMultipleNumber();
          break;
        case'/':
          handleDivisionNumber();
          break;

        default: break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='X' onClick={handleMultipleNumber}/>
          <Button label='/' onClick={handleDivisionNumber}/>
          <Button label='C'onClick={handleClear}/>
          <Button label='0' onClick={() => handleAddNumber('0')}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='-' onClick={handleReduceNumber}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='+' onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='=' onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
