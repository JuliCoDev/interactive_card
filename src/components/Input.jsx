import { default as InputContainer} from "../styleComponents/Input"
import ErrorInput from "../styleComponents/ErrorInput";
import Label from "../styleComponents/Label";





export default function Input(props) {  
    const { setCardValues, name , placeholder, validations, grid , errors} = props;
    console.log(errors[name]?.style)
    return(
        <div className={grid}>
            <InputContainer 
                name={name}
                placeholder={placeholder} 
                onBlur={validations}          
                onChange={setCardValues}
                className={errors[name]?.style}   
            />                 
        </div>
    )    
}