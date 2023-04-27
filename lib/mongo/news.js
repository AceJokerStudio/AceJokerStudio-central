import clientPromise from "./mongodb";
import { jsonconvert } from '../../util/parse';



let client;
let db;
let news;

async function init() {
   if (db) return;

   try {
      client = await clientPromise;
      db = await client.db('corporate');
      news = await db.collection('news');

   } catch (error) {
      throw new Error('mongo db initialization has failed');
   }

}

(async () => {

   await init();

})();


export async function getNewsData() {

   try {
      if (!db) {
         await init();
      }

      const res = await news.find({}).toArray();
      return jsonconvert(res);


   } catch (error) {

      console.log(error);
   }


}




