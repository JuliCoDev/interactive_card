import Input from "../styleComponents/Input";
import Label from "../styleComponents/Label";
import Button from "../styleComponents/Button";


export default function Dashboard(){
    
    return(
        <form className="w-4/5 m-auto mt-4">
            <Label htmlFor="cardholderName">CARDHOLDER NAME</Label>
            <Input 
                name="cardholderName" 
                placeholder="e.g Jane Appleseed" 
                type="text"              
            />

            <Label htmlFor="cardNumber">CARD NUMBER</Label>
            <Input 
                nameInput="cardNumber" 
                placeholder="e.g. 1234 5678 9123 0000"
                type="text"   
                maxLength={19}                           
            />
            
            <div className="flex justify-between ">               
                <div className="w-2/4 ">
                    <Label className="block">EXP. DATE</Label>
                    <div className="flex justify-between">
                        <div className="inline-block w-2/4 box-border pr-2" >
                            <Input 
                                name="month" 
                                placeholder="MM" 
                                type="text"
                                maxLength={2}     
                                   

                            />
                        </div>
                        <div className="inline-block w-2/4" >
                            <Input 
                                name="year" 
                                placeholder="YY" 
                                type="text"    
                                maxLength={2} 
                            />
                        </div>
                    </div>
                </div>

                <div className="w-2/4 box-border pl-2 ">
                    <Label className="block">Cvc</Label>
                    <Input 
                        name="cvc" 
                        placeholder="e.g. 123" 
                        type="text"    
                        maxLength={2} 
                    />
                </div>
            </div>
            <div>
                <Button type="submit"> 
                    Confirm
                </Button>
            </div>
        </form>
    )
}