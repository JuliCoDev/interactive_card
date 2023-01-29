import Card from "../../styleComponents/Card";


export default function CardBack({cvc}){       
    return(                 
        <Card className="bg-[url('./assets/bg-card-back.png')]">
            <div className="absolute w-full">
                <p className="relative text-white text-right top-[60px] right-[30px]">{cvc}</p>
            </div>
        </Card>    
    )

}


