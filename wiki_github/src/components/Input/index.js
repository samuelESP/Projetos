import { InputContainer } from './styles';



function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
        <label>usuario/repositorio</label>
    </InputContainer>
  )
}

export default Input
