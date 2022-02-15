import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment, useEffect,useState } from "react";
import Banner from '../components/banner/Banner';
import Image from 'next/image';




const HomePage =(props) =>{

    const handleOnBannerBtnClick =()=>{
        console.log('clicked');
    }
    

    return (
        <Fragment>
         
                <Banner  buttonText='View Meetups Near by' handleOnClick={handleOnBannerBtnClick}/> 
                <div className='heroImage'>
                    <Image
                        src="/static/hero-image.png"
                        width={700}
                        height={400}
                        alt="hero image"
                    />
                    </div>
                    <div className='sectionWrapper'>
                        <h2 className='heading2'>Latest Meetups</h2>
                         {props.meetups.length === 0 &&  <center><Image
                        src="/static/no-result.png"
                        width={500}
                        height={300}
                        alt="hero image"
                    /></center>}
                         <MeetupList meetups={props.meetups} />
                       
                    </div>  

         

        </Fragment>
       
    )
}


// export async function getServerSideProps(context) {
//     //console.log(context);
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// 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 };

export async function getServerSideProps (){
    
  const client = await MongoClient.connect('mongodb+srv://jasir5449:Jasir2299@cluster0.4b5wc.mongodb.net/meetups');
  const db=  client.db();
  const meetupCollection = db.collection('meetups');
  const result = await meetupCollection.find().toArray();
  client.close();

    return {
        props:{
            meetups:JSON.parse(JSON.stringify(result))
        }
    }
}


export default HomePage;