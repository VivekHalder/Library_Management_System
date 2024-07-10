import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import StudentDetails from './StudentDetails';
import ChooseSubjects from './ChooseSubjects';
import MultiStepProgressBar from '../../../components/MultiStepProgressBar/MultiStepProgressBar';

function SignUp() {
  const [page, setPage] = useState("pageOne");

  const nextPage = (page) => {
    setPage(page);
  }

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageOne");
        break;
      case "2":
        setPage("pageTwo");
        break;
      case "3":
        setPage("pageThree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };
  
  return (
      <div className='flex flex-col justify-end'>
        <h2 style={ { marginRight: '89px' } } className='sign_up_flow__title ml-auto mb-5'>Let's get started</h2>
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} className='mr-0'/>
        {
          {
            pageOne: <PersonalDetails onButtonClick={nextPage}/>,
            pageTwo: <StudentDetails onButtonClick={nextPage}/>,
            pageThree: <ChooseSubjects onButtonClick={nextPage}/>
          }[page]
        }
    </div>
  )
}

export default SignUp