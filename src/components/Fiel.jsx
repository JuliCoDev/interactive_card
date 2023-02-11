import ErrorInput from "../styleComponents/ErrorInput"
import Label from "../styleComponents/Label";

const Field = ({label, grid, children}) =>{
    
    return(
        <div className={grid}>
            <Label>{label}</Label>
            <div className="grid grid-cols-12 gap-2">
                {children}            
            </div>            
        </div>
    )
}

export default Field;