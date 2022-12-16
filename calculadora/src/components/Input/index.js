import {Inputcontainer} from './styles';


const Input= ({value}) => {
    return (
      <Inputcontainer>
        <input disabled value={value}/>
      </Inputcontainer>

    );
  }
  
  export default Input;