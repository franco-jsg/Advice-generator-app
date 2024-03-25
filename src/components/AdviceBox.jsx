import Divider from '../img/pattern-divider-desktop.svg'

const AdviceBox = ({advice}) => {
    return(
        <>
            <div className='advice-container'>
                <h4>{advice.id}</h4>
                <q>{advice.advice}</q>
                <img src={Divider} alt="Divider" />
            </div>
        </>
    )
}

export default AdviceBox