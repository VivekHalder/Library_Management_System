import React from 'react';
import './SignUp.css';

function PersonalDetails({ onButtonClick }) {
    return (
        <div className='flex mb-4'>
            <div className='sign_up_flow__form'>
                <h2 className='sign_up_flow__page_title'>Personal Details</h2>
                <form className='personal_details__form'>
                    <label htmlFor="first_name" className='personal_details__form_label'>First Name</label>
                    <div>
                        <input type="text" id="first_name" name="first_name" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="last_name" className='personal_details__form_label'>Last Name</label>
                    <div>
                        <input id="last_name" name="last_name" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="email" className='personal_details__form_label'>Email</label>
                    <div>
                        <input id="email" name="email" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="phone_number" className='personal_details__form_label'>Phone Number (WhatsApp)</label>
                    <div>
                        <input id="phone_number" name="phone_number" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="address" className='personal_details__form_label'>Address</label>
                    <div>
                        <input id="address" name="address" className='personal_details__input' />
                    </div>
                </form>
                <div>
                    <button className='sign_up_flow__button' type='submit' onClick={onButtonClick}>
                        Next
                    </button>
                </div>
            </div>
            <div className='profile_image__form'>
                <div className='pt-5 flex flex-col justify-center items-center'>
                    <div className='profile_image__body'>

                    </div>
                    <h1 className='sign_up_flow__page_sub_title mt-5'>
                        Choose a profile picture
                    </h1>
                    <button className='sign_up_flow__button mt-2'>
                        Browse from Device
                    </button>
                    <h1 className='sign_up_flow__page_sub_title mt-2'>
                        or
                    </h1>
                    <h1  className='sign_up_flow__page_sub_title mt-2'>
                        Select an avatar
                    </h1>
                    <div className='flex mt-5 justify-between'>
                        {
                            [...Array(5)].map((_, index) => (
                                <div key={index} style={ { width: '70px', height: '70px', backgroundColor: 'gray', borderRadius: '50%', margin: '3px' } }>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails