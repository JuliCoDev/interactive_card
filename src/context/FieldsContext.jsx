import { createContext, useEffect, useState } from "react";


export const FieldsContext = createContext({});

export const FieldsCotextProvider = (props) =>{

    const { fields } = props;

    const [inputValues, setInputValues] = useState({});

    const [fieldsValues, setFieldsValues ] = useState(fields);

    useEffect(() => {
        Inputs()
    },[fieldsValues]);


    const Inputs = () => {
        Object.keys(fieldsValues).map((field) =>{            
            Object.keys(fieldsValues[field].infoInputs).map((inputName) => {
                setInputValues((prevState) => {
                    return({
                        ...prevState , 
                        [inputName] : fieldsValues[field].infoInputs[inputName].value,
                    })
                })
            })
        })
    }

    

    return <FieldsContext.Provider value={{Fields: fieldsValues,  inputValues: inputValues, setFieldsValues}} {...props}/>
}


