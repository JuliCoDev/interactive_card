import { default as InputContainer} from "../styleComponents/Input"
import ErrorInput from "../styleComponents/ErrorInput";


export default function Input({
    inputs, 
    error,
    nameField,
    change,
    validateInput,
}) {  
    
    return( 
        Object.keys(inputs).map(nameInput => {
            const {placeholder, grid} = inputs[nameInput];
            return(
                <div className={grid}>
                    <InputContainer 
                        name={nameInput}
                        placeholder={placeholder} 
                        className={`${error?.[nameInput]?.style}`}
                        onChange={(e) => change(e, nameField)}
                        onBlur={validateInput}                        
                    />                 
                </div>
            )
        })
    )  
}