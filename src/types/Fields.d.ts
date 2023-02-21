export interface FieldData {
    [name: string]: {
        label : string
        infoInputs : {
            [name: string] : {
                placeholder : string
                grid: string
                value: string
                validations? : object
                format? : object
                maxLength? : number                
            }
        }
        grid : string
    }
}


export interface FieldError {
    
}
