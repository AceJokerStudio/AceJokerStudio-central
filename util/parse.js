export function jsonconvert(object) {

   const item = JSON.parse(JSON.stringify(object));
   return item;
}