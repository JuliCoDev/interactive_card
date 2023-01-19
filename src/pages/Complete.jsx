import CheckLogo from '../assets/icon-complete.svg';
import Button from '../styleComponents/Button';

export default function Complete() {

    return(
        <div className='w-4/5 m-auto'>
            <div className='text-center leading-[4rem] mb-6' >
                <img className='mx-auto my-8' src={CheckLogo} alt="CheckLogo" />
                <h2 className='text-2xl'>THANK YOU!</h2>
                <p className='text-dark-grayish'>We have added your card details</p>
            </div>
            <div>
                <Button>
                    Continue
                </Button>
            </div>
        </div>
    )
}