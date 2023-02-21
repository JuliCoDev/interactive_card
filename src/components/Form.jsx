import { useContext, useEffect } from "react";
import { FieldsContext } from "../context/FieldsContext";
import Field from "./Field";
import Input from "./Input";
import useValidateInputCard from "../hooks/useValidateInputCard";
import ErrorInput from "../styleComponents/ErrorInput";
import useFormatInputCard from "../hooks/useFormatInputCard";
import Button from "../styleComponents/Button";

const form = `
    w-[80%] 
    m-auto
    md:w-[60%]    -+
    lg:max-w-[380px]
    xl:ml-[100px]
    
`;
 
const Form = ({
    setComplete,   
}) =>{
    
    const contextField = useContext(FieldsContext);

    const {Fields , setFieldsValues} = contextField;
    
    //Validate input
    const {
        errors,         
        setErros 
    } = useValidateInputCard();

   
    const handleSubmit = (e) => {
        e.preventDefault();

        Object.keys(Fields).map((nameField) => {                      
            setErros(nameField , Fields[nameField]?.infoInputs)
        })

        if(Object.entries(errors).length !== 0){
            const errorFields =Object.keys(errors).some((error) => {  
                          
                return !errors[error]?.isValidType
            })
            
            
            if(!errorFields){
                setComplete(true)
            }
    
        }

    }

    const {
        formatCardInputs,
        setFormat
    } = useFormatInputCard();


    const handleValidate = (nameField) =>   {
        setErros(nameField , Fields[nameField]?.infoInputs)
    }


        
    const handleChange = (e, nameField) =>{  
        const {format} = Fields[nameField]?.infoInputs?.[e.target.name];
        if(format){
            
           setFormat(e.target.name,format ,  e.target.value);
        }


        let dataUpdate = {
            ...Fields,

            [nameField] : {
                ...Fields[nameField],
                
                infoInputs :{
                    ...Fields[nameField].infoInputs,
                    [e.target.name] : { 
                        ...Fields[nameField].infoInputs[e.target.name],                   
                        value : e.target.value
                    }
                }
            }
        }

        setFieldsValues(dataUpdate);

    }

    

    return(        
        <form className={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-2"> 
                {Object.keys(Fields).map((nameField) => {
                    const {infoInputs} = Fields[nameField];
                    return(
                        <Field nameField={nameField}>
                            <Input 
                                inputs={infoInputs} 
                                validateInput={() => handleValidate(nameField)} 
                                error={errors[nameField]}  
                                change={handleChange}        
                                nameField={nameField} 
                                format={formatCardInputs}                               
                            />  
                            <div className="col-span-12">
                                {!errors?.[nameField]?.isValidType &&
                                    <ErrorInput>
                                        {errors?.[nameField]?.message}
                                    </ErrorInput>
                                }
                            </div>
                        </Field>
                    )
                })
                }
            </div>            
            <Button type="submit"> 
                Confirm
            </Button>
        </form>    
    )
}

export default Form;