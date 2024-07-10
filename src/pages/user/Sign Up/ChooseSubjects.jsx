import React from 'react';
import Subjects from '../../../constants/Subjects';
import './SignUp.css';

function ChooseSubjects({ onButtonClick }) {
  return (
    <div className='w-full mb-4'>
        <h1 className='sign_up_flow__page_title mt-5'>
            Choose your Favourite Subjects
        </h1>
        <h6 className='sign_up_flow__page_sub_title mt-2'>
            Select upto 5 options
        </h6>
        <div className='flex flex-wrap mt-10'>
            {
                Subjects.map( (subject, index) => (
                    <div key={index} style={ { width: "300px", height: "170px", backgroundColor: "#761236", margin: "6px", color: "#FFFFFF", borderRadius: "15%", position: "relative", display: "flex", flexDirection: "column" } }>
                        <input type="radio" style={ { position: "absolute", top: "15px", left: "20px", width: "20px", height: "20px", borderRadius: "50%", accentColor: "black" } } />
                        <h1 style={ { fontSize: "20px", textAlign: "center", marginTop: "75px" } }>
                            {
                                subject
                            }
                        </h1>
                    </div>
                ) )
            }
        </div>
        <button className='sign_up_flow__button' type='submit' onClick={onButtonClick}>
            Next
        </button>
    </div> 
  )
}

export default ChooseSubjects