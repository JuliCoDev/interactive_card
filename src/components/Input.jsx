import { default as InputContainer} from "../styleComponents/Input"
import ErrorInput from "../styleComponents/ErrorInput";


export default function Input(props) {  
    const { setCardValues, name , placeholder, validations, grid , errors} = props;
    
    
    return( 
        <div className={grid} onBlur={validations}>
            <InputContainer 
                name={name}
                placeholder={placeholder}                           
                onChange={setCardValues}
                className={errors?.[name]?.style}   
                
            />                 
        </div>
    )    
}