import { default as InputContainer} from "../styleComponents/Input"
import ErrorInput from "../styleComponents/ErrorInput";
import Label from "../styleComponents/Label";





export default function Input(props) {  
    const { name , placeholder, validations, grid} = props;
    
    return(
        <div className={grid}>
            <InputContainer 
                name={name}
                placeholder={placeholder} 
                onBlur={validations}             
            />                 
        </div>
    )    
}