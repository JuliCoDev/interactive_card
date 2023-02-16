

const form = `
    w-[80%] 
    m-auto
    md:w-[60%]    
    lg:max-w-[380px]
    xl:ml-[100px]
    
`;

const Form = ({children, handleSubmit}) =>{

    return(        
        <form className={form} onSubmit={handleSubmit}>
            {children}
        </form>    
    )
}

export default Form;