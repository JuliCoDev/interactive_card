import { default as InputContainer} from "../styleComponents/Input"
import ErrorInput from "../styleComponents/ErrorInput";
import Label from "../styleComponents/Label";





export default function Input(props) {  
    const { typeField , label, infoInputs, grid, validateInput, errors} = props;
  
    return(
        <div className={grid}>
            <Label >{label}</Label>      
            <div className="grid grid-cols-12 gap-2">
                {Object.keys(infoInputs).map((key) => {
                    
                    const { name, placeholder, grid} = infoInputs[key];                                        
                    
                    return(
                        <div className={grid} key={name}>
                            <InputContainer 
                                name={name}
                                placeholder={placeholder}                                                            
                                className={`${grid} ${errors[typeField]?.[name]?.style}`}      
                                onBlur={validateInput}             
                            />
                        </div>
                    )
                })} 
            </div>  
            {!errors[typeField]?.isValid &&  
                <ErrorInput>
                    {errors[typeField]?.message}
                </ErrorInput>                  
            }                    
        </div>
    )    
}