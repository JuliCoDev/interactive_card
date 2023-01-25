import Card from "../../styleComponents/Card";


export default function CardBack({cvc}){       
    return(                 
        <Card className="bg-[url('./assets/bg-card-back.png')]  left-10 top-12">
            <div className="font-medium text-sm">
                <p className="absolute top-[44%] right-[40px]">{cvc}</p>
            </div>
        </Card>    
    )

}


