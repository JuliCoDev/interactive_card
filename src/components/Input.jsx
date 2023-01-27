import { default as InputContainer} from "../styleComponents/Input"
import useFormatInputCard from "../hooks/useFormatInputCard";
import ErrorInput from "../styleComponents/ErrorInput";


export default function Input({
    name,
    placeholder,
    cardValues,
    setCardValues,
    maxLength,
    vaidateInput,
    validationInput
}) {

    //Format input
    const {
        formatCardInput,
        changeFormatOnlyNumbers,
        changeFormatCardNumber,
    } = useFormatInputCard(cardValues);
    
    const handleChange   = (e) =>{
        setCardValues({
            ...cardValues,
            [e.target.name] : e.target.value
        })   
        
        if([e.target.name] == "cardNumber"){
            changeFormatCardNumber("cardNumber" , e.target.value);  
        }else if([e.target.name] !== "cardholderName"){
            changeFormatOnlyNumbers([e.target.name] , e.target.value)
          
        }
    }


    return(
        <div>
            <InputContainer 
                onChange={(e) => handleChange(e)} 
                name={name} 
                placeholder={placeholder} 
                type="text" 
                onBlur={(e) => vaidateInput(e.target.value)}     
                className={validationInput[name].style}
                value={(name == "cardholderName") ? cardValues[name] : formatCardInput[name]}       
                maxLength={maxLength}
                
            />
            {!validationInput[name].isValid && 
                <ErrorInput>
                    {validationInput[name].message}
                </ErrorInput>                  
            }
        </div>
    )   
}