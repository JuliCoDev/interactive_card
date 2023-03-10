import { useContext } from "react";
import { FieldsContext } from "../context/FieldsContext";
import Label from "../styleComponents/Label";
const Field = ({ 
    children,
    nameField
}) =>{
    
    const Fields = useContext(FieldsContext);

    
    const {label, grid} = Fields.Fields[nameField];
    
    return (
        <div className={grid}>       
            <Label>{label}</Label>
            <div className="grid grid-cols-12 gap-2">
                {children}
            </div> 
        </div>
    )
        


    
    
}

export default Field;