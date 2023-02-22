export interface userModel{
  id?: string;
  fname:string;
    mname:string;
    lname:string;
    age:number;
    gender:string;
    hobby:{[k:string]:boolean},
    company:string;
}





export const Hobbies = [
    'music',
    'cricket',
    'chess',
    'read',
    'singing'
  ];