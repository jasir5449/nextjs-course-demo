import MeetUpFormNew from '../../components/meetups/MeetUpFormNew';

import {useRouter}  from 'next/router';


function NewMeetupPage() {

    const router = useRouter(); 

  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    const response = await fetch('/api/new-meetup' , {
        method:'POST',
        body:JSON.stringify(enteredMeetupData),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const result= await response.json();
    router.push('/');
  }
  return  (<MeetUpFormNew onAddMeetup={addMeetupHandler} />)
      
}

export default NewMeetupPage;
