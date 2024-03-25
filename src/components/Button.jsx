import Dice from '../img/icon-dice.svg'

const Button = () => {

    const myEvent = () => {
        console.log('Click!')
    }

    return(
        <>
            <div className='button-container' onClick={() => myEvent()}>
                <img className='button' src={Dice} alt="Dice" />
            </div>
        </>
    )
}

export default Button