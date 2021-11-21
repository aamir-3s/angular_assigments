import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AssigmentService {


  private siblingMsgDataSource:any=localStorage;
  

  constructor(private http: HttpClient) { }
  /*
   * @return {Observable<string>} : siblingMsg
   */
  public getMessage() {
    return this.siblingMsgDataSource.getIte();
  }
  /*
   * @param {string} message : siblingMsg
   */
  public updateMessage(message: string): void {
    this.siblingMsgDataSource.setItem(message);
  }

  // get data by id
  getDataByID(id:number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    const url="http://127.0.0.1:3000/api/v1/assigment/getAssigmentData/"+id;
    return this.http.post(url,{ headers:headers }).pipe(  
      //catchError(this.handleError)  
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
