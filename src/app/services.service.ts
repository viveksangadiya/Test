import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { userModel } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  isUserExist(userId: string){
    return localStorage.getItem(userId) != null;
  }
  getData(userId:  string): userModel | undefined {
    try {
      const user = JSON.parse(
        localStorage.getItem(userId) ?? ''
      ) as userModel;
      return user;
    } catch (error) {
      return undefined;
    }
  }
  setData(dataId:any,data:any){
    localStorage.setItem(dataId,JSON.stringify(data));

  }
}
