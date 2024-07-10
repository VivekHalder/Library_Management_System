import React from 'react';
import './SignUp.css';

function StudentDetails({ onButtonClick }) {
    return (
        <div className='flex justify-between'>
            <div className='student_details__form'>
                <h2 className='sign_up_flow__page_title'>Student Details</h2>
                <form className='personal_details__form'>
                    <label htmlFor="department" className='personal_details__form_label'>Department</label>
                    <div>
                        <input type="text" id="department" name="department" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="date_of_joining" className='personal_details__form_label'>Date of Joining</label>
                    <div>
                        <input type="text" id="date_of_joining" name="date_of_joining" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="library_card_number" className='personal_details__form_label'>Library Card Number</label>
                    <div>
                        <input type="text" id="library_card_number" name="library_card_number" className='personal_details__input' />
                    </div>
                    <br />
                    <label htmlFor="roll_number" className='personal_details__form_label'>Phone Number (WhatsApp)</label>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input text="text" id="roll_number" name="roll_number" className='personal_details__input' />
                    </div>
                </form>
                <div>
                    <button className='sign_up_flow__button' type='submit' onClick={onButtonClick}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails