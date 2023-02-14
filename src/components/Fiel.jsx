import ErrorInput from "../styleComponents/ErrorInput"
import Label from "../styleComponents/Label";

const Field = ({ 
    field, 
    nameField,
    children, 
    errors}) =>{
    
    const {grid, label} = field     
    
    return (
        <div className={`${grid}`}>
            <Label>{label}</Label>
            <div className="grid grid-cols-12 gap-2">
                {children}

                <div className="col-span-12">
                    {!errors[nameField]?.isValidType &&
                        <ErrorInput>
                            {errors[nameField]?.message}
                        </ErrorInput>
                    }
                </div>

            </div>
        </div>
    )
        


    
    
}

export default Field;