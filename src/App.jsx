import './App.css';
import { FieldsContext, FieldsCotextProvider } from './context/FieldsContext';
import { useContext, useState } from 'react'; 
import useValidateInputCard from './hooks/useValidateInputCard';
import Container from './styleComponents/Container';
import Form from './components/Form';
import Cards from './pages/Cards';

const FormFields = {
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

  cardNumber: {
      label: "CARD NUMBER",
      infoInputs :{
          cardNumber : {
              placeholder: "e.g. 1234 5678 9123 0000",
              grid: 'col-span-12', 
              value: '',    
              validations: {
                  required: true,
                  minLength: 16
              }                             
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
              }
          },
          year: {
              placeholder: "YY",
              grid: 'col-span-6',
              value: '',
              validations: {
                  required: true,
                  minValue: 23
              }
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
              }
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
    const [complete , setComplete ] = useState(false);

    


    return (
        <FieldsCotextProvider fields={FormFields}>
        <Container>

            <div className={containerCards}>
                <Cards/>
            </div>

            <div className={formContainer}>
            <Form />
            </div>

        </Container>
        </FieldsCotextProvider>
        
  )

}

