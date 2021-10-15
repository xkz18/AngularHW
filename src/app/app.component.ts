import { Component, OnInit } from '@angular/core';
import { ApiService } from './app.service';
import { Person } from './person';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Test System';
  people:Person[];
  person = new Person();
  
  constructor(private apiService:ApiService) {}
 
  ngOnInit() {
    this.refreshPeople()
    console.log(`ngOnInit`);
  }
 
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }
 
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }


  ngOnChanges() {
    console.log(`ngOnChanges`);
  }
  

  ngDoCheck() {
    console.log("ngDoCheck")
  }
  
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  

}


