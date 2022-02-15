import React from 'react';
import useInput from '../../hooks/use-input';
import Card from '../ui/Card';


const isNotEmpty = value => value.trim()!=='';
const isEmail = value => value.includes('@');
const isLength = value =>value.length > 5 ;
const MeetupFormNew = (props) => {

  
  const {
    value:titleValue,
    isValid:titleFormValid,
    hasError: titleHasError,
    valueChangeHandler:titleChangeHandler,
    inputBlurHandler:titleBlurHandler,
    reset:resetTitle
   } = useInput(isNotEmpty);
  
  const {
    value:firstNameValue,
    isValid:firstNameFormValid,
    hasError: firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:resetFirstName
   } = useInput(isNotEmpty);

   const {
    value:lastNameValue,
    isValid:lastNameFormValid,
    hasError: lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastName
   } = useInput(isNotEmpty);
   const {
    value:emailValue,
    isValid:emailFormValid,
    hasError: emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmail
   } = useInput(isEmail);
   const {
    value:mobileValue,
    isValid:mobileFormValid,
    hasError: mobileHasError,
    valueChangeHandler:mobileChangeHandler,
    inputBlurHandler:mobileBlurHandler,
    reset:resetMobile
   }= useInput(isNotEmpty);


   const {
    value:addressValue,
    isValid:addressFormValid,
    hasError: addressHasError,
    valueChangeHandler:addressChangeHandler,
    inputBlurHandler:addressBlurHandler,
    reset:resetAddress
   }= useInput(isNotEmpty);
 
   const {
    value:imageValue,
    isValid:imageFormValid,
    hasError: imageHasError,
    valueChangeHandler:imageChangeHandler,
    inputBlurHandler:imageBlurHandler,
    reset:resetImage
   }= useInput(isNotEmpty);

   const {
    value:descValue,
    isValid:descFormValid,
    hasError: descHasError,
    valueChangeHandler:descChangeHandler,
    inputBlurHandler:descBlurHandler,
    reset:resetDesc
   }= useInput(isNotEmpty);
 

   let formValid = false;

   if(titleFormValid && firstNameFormValid && lastNameFormValid && emailFormValid && mobileFormValid && addressFormValid && imageFormValid && descFormValid){
     formValid=true;
   }


   const titleClass = titleHasError ? 'form-control invalid' :'form-control ';
   const firstNameClass = firstNameHasError ? 'form-control invalid' :'form-control ';
   const lastNameClass  = lastNameHasError ? 'form-control invalid' :'form-control ';
   const emailClass     = emailHasError ? 'form-control invalid' :'form-control ';
   const mobileClass  = mobileHasError ? 'form-control invalid' :'form-control ';
   const addressClass  = addressHasError ? 'form-control invalid' :'form-control ';
   const imageClass  = imageHasError ? 'form-control invalid' :'form-control ';
   const descClass  = descHasError ? 'form-control invalid' :'form-control ';



   const formSubmitHandler =(event) =>{
     event.preventDefault();

     if(!formValid){
       return;
     }
     const meetupData = {
      title: titleValue,
      firstname:firstNameValue,
      lastname:lastNameValue,
      email:emailValue,
      mobile:mobileValue,
      image: imageValue,
      address: addressValue,
      description: descValue,
    };

    props.onAddMeetup(meetupData);

     console.log(titleValue,firstNameValue,lastNameValue,emailValue,mobileValue,addressValue,imageValue,descValue);
     resetFirstName();
     resetLastName();
     resetEmail();
     resetMobile();
     resetTitle();
     resetAddress();
     resetImage();
     resetDesc();
   }

  return (
    <React.Fragment>

  <div className='form'>
  <Card>
    <form onSubmit={formSubmitHandler}>
    <h1 className='title-new'>
        <span className='title1'>Create New NEXT JS Meetup</span>
 
      </h1>

    <div className='control-group'>
        <div className={titleClass}>
          <label htmlFor='title'>Meetup Title</label>
          <input 
            type='text' 
            id='title'
            value={titleValue}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler} />
            {titleHasError && <p className="error-text">Please Enter Your Meetup Title</p>}
        </div>
      </div>

      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} />
            {firstNameHasError && <p className="error-text">Please Enter Your First Name</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='lname'>Last Name</label>
          <input 
            type='text' 
            id='lname'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text">Please Enter Your Last Name</p>}
         
        </div>
      </div>
      <div className='control-group'>
          <div className={emailClass}>
            <label htmlFor='email'>E-Mail Address</label>
            <input 
            type='text' 
            id='email' 
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
          {emailHasError && <p className="error-text">Please Enter Valid Email</p>}
          </div>
          <div className={mobileClass}>
            <label htmlFor='mobile'>Mobile Number</label>
            <input 
            type='number'
            id='mobile' 
            value={mobileValue}
            onChange={mobileChangeHandler}
            onBlur={mobileBlurHandler} />
            {mobileHasError && <p className="error-text">Please Enter Your Mobile Number</p>}
          </div>
      </div>
      <div className='control-group'>
        <div className={addressClass}>
          <label htmlFor='address'>Meetup Address</label>
          <input 
            type='text' 
            id='address'
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler} />
            {addressHasError && <p className="error-text">Please Enter Your Meetup Address</p>}
        </div>
      </div>
      <div className='control-group'>
        <div className={imageClass}>
          <label htmlFor='image'>Meetup Poster Url</label>
          <input 
            type='text' 
            id='image'
            value={imageValue}
            onChange={imageChangeHandler}
            onBlur={imageBlurHandler} />
            {imageHasError && <p className="error-text">Please Enter Your Meetup Poster URL</p>}
        </div>
      </div>
   
      <div className='control-group'>
        <div className={descClass}>
        <label htmlFor='description'>Meetup Description</label>
          <textarea
            id='description'
            required
            rows='5'
            onChange={descChangeHandler}
            onBlur={descBlurHandler} 
            value={descValue}
          >{descValue}</textarea>
            {descHasError && <p className="error-text">Please Enter Your Meetup Title</p>}
        </div>
      </div>


      
        
      <div className='form-actions'>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>

    </Card>
    </div>
    </React.Fragment>
  );
};

export default MeetupFormNew;
