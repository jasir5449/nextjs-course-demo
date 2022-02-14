import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import {MongoClient,ObjectId} from 'mongodb';



// const DUMMY_MEETUPS = [
//     {
//       id: 'm1',
//       title: 'A First Meetup',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Some address 5, 12345 Some City',
//       description: 'This is a first meetup!'
//     },
//     {
//       id: 'm2',
//       title: 'A Second Meetup',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Some address 10, 12345 Some City',
//       description: 'This is a second meetup!'
//     }
//   ];

const MeetupDetailPage = (props) =>{
 
  

   return (
       <MeetupDetail
       
        title= {props.meetups.title}
        image={props.meetups.image}
        address= {props.meetups.address}
        description= {props.meetups.description} />
   )
}


export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://jasir5449:Jasir2299@cluster0.4b5wc.mongodb.net/meetups');
    const db=  client.db();
    const meetupCollection = db.collection('meetups');
    const singleMeetupId = await meetupCollection.find({},{_id:1}).toArray();
    client.close();

    const paths = singleMeetupId.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
      }));

    return {
        paths,
        fallback: false
    };
  }

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://jasir5449:Jasir2299@cluster0.4b5wc.mongodb.net/meetups');
    const db=  client.db();
    const meetupCollection = db.collection('meetups');
    const selectedMeetup = await meetupCollection.findOne({
        _id: ObjectId(meetupId),
      });
    client.close();


    return {
        props:{
            meetups:{
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
              },
        }
    }
}

export default MeetupDetailPage;

