import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
 
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
  ngOnChanges() {
    console.log(`1-ngOnChanges`);
  }
  

  ngDoCheck() {
    console.log("1-ngDoCheck")
  }
  
  ngAfterContentInit() {
    console.log("1-ngAfterContentInit");
  }
  
  ngAfterContentChecked() {
    console.log("1-ngAfterContentChecked");
  }
  
  ngAfterViewInit() {
    console.log("1-ngAfterViewInit");
  }
  
  ngAfterViewChecked() {
    console.log("1-ngAfterViewChecked");
  }
  
  ngOnDestroy() {
    console.log("1-ngOnDestroy");
  }
  

}