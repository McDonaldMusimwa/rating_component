import './Rating.css'
import { useState } from 'react'
import Modal from '../Modal/Modal'

function Rating(props){
    const [rating,setRating]=useState(null)
    const [openModal,setOpenModal]=useState(false)

    const shoMoDal =()=>{
     props.setRating(rating)
        
    }
    return(
        <div className='Rating'>
            <button onClick={()=>{return(setRating(1))}}>1</button>
            <button onClick={()=>{return(setRating(2))}}>2</button>
            <button onClick={()=>{return(setRating(3))}}>3</button>
            <button onClick={()=>{return(setRating(4))}}>4</button>
            <button onClick={()=>{return(setRating(5))}}>5</button>
            <button className='submit'  onClick={shoMoDal} >Submit</button>
            <Modal openModal={openModal} setOpenModal={setOpenModal}/>
            

        </div>
    )
}

export default Rating