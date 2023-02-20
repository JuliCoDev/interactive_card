import { default as InputContainer} from "../styleComponents/Input"
import ErrorInput from "../styleComponents/ErrorInput";


export default function Input({
    inputs, 
    error,
    nameField,
    change,
    validateInput,
    format
}) {  
    return( 
        <>
           { Object.keys(inputs).map(nameInput => {
                const {placeholder, grid, maxLength} = inputs[nameInput];            
                return(
                    <div className={grid}>
                        <InputContainer 
                            name={nameInput}
                            placeholder={placeholder} 
                            className={`${error?.infoInputs?.[nameInput]?.style}`}
                            onChange={(e) => change(e, nameField)}
                            onBlur={validateInput} 
                            value={format?.[nameInput]}
                            maxLength={maxLength}
                        />                 
                    </div>
                   
                )
            })}

            
        </>
    )  
}