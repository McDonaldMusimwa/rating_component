import useState from 'react'
import thankyou from '../../Assets/thankyou.svg'
import './Modal.css'


function Modal({openModal,setOpenModal,rating}) {
    
    return <>{openModal?
        <div className='Modal'>

            <img src={thankyou} alt="" />
            <div className='ratting'><span>You Selected {rating} out 5</span></div>
            <div className='thank-you'>
                <span>Thank You!</span>
                <span>We appreciate you taking time to give a {rating}.
                    If you ever need more support, dont hesitate to 
                </span>
                <span>get in touch!</span>



            </div>

        </div>: null}</>;



    
};

export default Modal;