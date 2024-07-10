import React from 'react';
import './SignUp.css';

function PersonalDetails({ onButtonClick }) {
    return (
        <div className='mb-4'>
            <div style={{ marginTop: '80px', marginLeft: '50px' }}>
                <h2 className='sign_up_flow__page_title'>Personal Details</h2>
                <form className='personal_details__form'>
                    <label htmlFor="first_name" className='personal_details__form_label'>First Name</label>
                    <div>
                        <input type="text" id="first_name" name="first_name" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="last_name" className='personal_details__form_label'>Last Name</label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input id="last_name" name="last_name" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="email" className='personal_details__form_label'>Email</label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input id="email" name="email" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="phone_number" className='personal_details__form_label'>Phone Number (WhatsApp)</label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input id="phone_number" name="phone_number" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="address" className='personal_details__form_label'>Address</label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input id="address" name="address" className='personal_details__input' />
                    </div>
                </form>
                <div>
                    <button className='sign_up_flow__button' type='submit' onClick={onButtonClick}>
                        Next
                    </button>
                </div>
            </div>
            <div style={{ marginLeft: '50px', display: 'flex', flexDirection: 'column', marginRight: '70px' }}>
                <div className='pt-5 flex flex-col justify-center items-center'>
                    <div style={ { height: '300px', width: '300px', borderRadius: '50%', backgroundColor: 'black' } }>

                    </div>
                    <h1 style={ { color: '#761236', fontSize: '20px', paddingTop: '18px' } }>
                        Choose a profile picture
                    </h1>
                    <button className='sign_up_flow__button mt-2'>
                        Browse from Device
                    </button>
                    <br />
                    <h1  style={ { color: '#761236', fontSize: '20px' } }>
                        or
                    </h1>
                    <br />
                    <h1  style={ { color: '#761236', fontSize: '20px' } }>
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