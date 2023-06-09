import clientPromise from "./mongodb";
import { jsonconvert } from './../../util/parse';



let client;
let db;
let application;

async function init() {
   if (db) return;

   try {
      client = await clientPromise;
      db = await client.db('corporate');
      application = await db.collection('application');

   } catch (error) {
      throw new Error('mongo db initialization has failed');
   }

}

(async () => {

   await init();

})();


export async function getApplicationData() {

   try {
      if (!db) {
         await init();
      }

      const res = await application.find({}, { projection: { privacypolicy: 0 } }).toArray();

      return JSON.parse(JSON.stringify(res));

   } catch (error) {

      console.log(error);
   }


}



export async function getApplicationTitles() {

   try {
      if (!db) {
         await init();
      }

      const res = await application.find({}, { projection: { title: 1, _id: 0 } }).toArray();

      return JSON.parse(JSON.stringify(res));


   } catch (error) {

      console.log(error);
   }


}


export async function getApplicationPrivacyPolicy(title) {

   try {
      if (!db) {
         await init();
      }

      const res = await application.find({ title: title }, { projection: { privacypolicy: 1, _id: 0 } }).toArray();




      return JSON.parse(JSON.stringify(res));


   } catch (error) {

      console.log(error);
   }


}






