import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { useEffect,useState } from "react";




const HomePage =(props) =>{
 
   return (<MeetupList meetups={props.meetups} />)
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
    
    // const response = await fetch('http://127.0.0.1:3000/api/new-meetup');
    // const result= await response.json();
    
  const client = await MongoClient.connect('mongodb+srv://jasir5449:Jasir2299@cluster0.4b5wc.mongodb.net/meetups');
  const db=  client.db();
  const meetupCollection = db.collection('meetups');
  const result = await meetupCollection.find().toArray();
  client.close();

  console.log(JSON.stringify(result));
    return {
        props:{
            meetups:JSON.parse(JSON.stringify(result))
        },
     
    }
}


export default HomePage;
