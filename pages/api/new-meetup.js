
import {MongoClient} from 'mongodb'

const handler = async (req,res) =>{

    const client = await MongoClient.connect('mongodb+srv://jasir5449:Jasir2299@cluster0.4b5wc.mongodb.net/meetups');
    const db=  client.db();
    const meetupCollection = db.collection('meetups');
    

    if(req.method ==='POST'){
      const data = req.body;
      const result = await meetupCollection.insertOne(data);
      client.close();
      res.status(201).json({message:'Meetups data inserted Succefully'})
     }
    else if(req.method ==='GET'){
      const result = await meetupCollection.find().toArray();
      client.close();
      res.status(201).json({data:result})
    } 
}
export default handler;