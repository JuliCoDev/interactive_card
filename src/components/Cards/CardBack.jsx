import Card from "../../styleComponents/Card";


export default function CardBack({cvc}){       
    return(                 
        <Card className="bg-[url('./assets/bg-card-back.png')]">
            <div className="">
                <p className="">{cvc}</p>
            </div>
        </Card>    
    )

}


