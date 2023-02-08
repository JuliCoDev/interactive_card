import { default as InputContainer} from "../styleComponents/Input"

import Label from "../styleComponents/Label";

interface InputInfo{
    name: string
    type: string
    placeholder: string
    length?: number
    grid: string,
}

interface Props {
    label: string
    inputs: InputInfo[]
    grid: string
    change: any
    validate: any     
    errors: any   
}

export default function Input(props: Props) {

    const {label , inputs, grid, change, validate, errors} = props;

    return(
        <div className={grid}>
            <Label >{label}</Label>      
            <div className="grid grid-cols-12 gap-2">
                {inputs.map((input) => {
                    const { name, type, placeholder, length, grid} = input;
                    return(
                        <div className={grid} key={name}>
                            <InputContainer 
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                maxLength={length}                                
                                className={`${grid} ${errors[name]?.style}`}      
                                onChange={change} 
                                onBlur={validate}                         
                            />
                        </div>
                    )
                })}                    
            </div>                               
        </div>
    )    
}