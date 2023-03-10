import './App.css';
import { FieldsCotextProvider } from './context/FieldsContext';
import { useState } from 'react'; 
import Container from './styleComponents/Container';
import Form from './components/Form';
import Cards from './pages/Cards';
import Complete from './pages/Complete';
import { FieldData } from './types/Fields';

const FormFields : FieldData= {
  cardholderName: {
      label: "CARD HOLDER NAME NUMBER",
      infoInputs :{
          cardholderName: {                                         
              placeholder: "e.g. Jane Appleseed",
              grid: 'col-span-12',     
              value: '',  
              validations: {
                  required: true
              } 
          }
      },
      grid : 'col-span-12',    
  },

  cardInteractiveNumber: {
      label: "CARD NUMBER",
      infoInputs :{
          cardInteractiveNumber : {
              placeholder: "e.g. 1234 5678 9123 0000",
              grid: 'col-span-12', 
              value: '',    
              validations: {
                required: true,
                minLength: 16
              },
              format :{
                "cardInteractiveNumber" : true
              },
              maxLength:19                             
          }
      },
      grid : 'col-span-12',    
  },
  
  cardDate: {
      label : "EXP. DATE",
      infoInputs : {
          month: {
              placeholder: "MM",
              grid: 'col-span-6',
              value: '',
              validations: {
                  required: true,
                  minLength: 2,                     
                  maxValue: 12
              },
              format :{
                "onlyNumbers" : true
              },
              maxLength:2
          },
          year: {
              placeholder: "YY",
              grid: 'col-span-6',
              value: '',
              validations: {
                  required: true,
                  minValue: 23
              },
              format :{
                "onlyNumbers" : true
              },
              maxLength:2
          }
      },
      grid : 'col-span-6',
  },
  
  cvc: {
      label: "CVC",
      infoInputs : {
          cvc: {             
              placeholder: "e.g. 123",
              grid: 'col-span-12',
              value: '',  
              validations: {
                  required: true,
                  minLength: 3
              },
              format :{
                "onlyNumbers" : true
              },
              maxLength:3
          }
      },
      grid : 'col-span-6',   
  }
}

const containerCards = `
    absolute 
    w-full
    lg:w-1/2
    lg:static
`;

const formContainer=`
    absolute 
    top-[350px] 
    w-full
    lg:w-1/2
    lg:static

`;


export default function App() {

    const [complete , setComplete ] = useState<boolean>(false);
    
    
    if(!complete){
        return (
            <FieldsCotextProvider fields={FormFields}>
                <Container>
    
                    <div className={containerCards}>
                        <Cards/>
                    </div>
    
                    <div className={formContainer}>
                        <Form 
                            setComplete={setComplete}
                        />
                    </div>
    
                </Container>
            </FieldsCotextProvider>
            
      )
    }
    return(
        <div className="absolute bottom-[20%] w-full lg:right-[10%] lg:w-1/2 lg:bottom-[30%]">
            <Complete setComplete={setComplete} />
        </div>
    )

}

