import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { useEffect,useState } from "react";


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];


const HomePage =(props) =>{
  console.log(props.meetups);
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

export async function getStaticProps (){
    
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
        revalidate:1
    }
}


export default HomePage;