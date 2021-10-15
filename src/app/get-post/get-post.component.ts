import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ApiService } from '../app.service';

@Component({
  selector: 'app-get-post',
  // templateUrl: './get-post.component.html',
  template: `<p>get-post works!</p>

    <p></p>
    <input [(ngModel)]="id" />
    <button (click)="getData()">Get Post</button>
    <div>data: {{ data | json }}</div>
    <p></p>
    <p></p>
    <button onClick="window.location.reload();">Refresh</button>
    <p></p>`,

  styleUrls: ['./get-post.component.css'],
})
export class GetPostComponent {
  // @Input() name: string;
  constructor(
    //private appService: AppService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {}
  id: number;
  data: any = { data: 'init data' };
  getData() {
    this.data = this.http
      .get('http://jsonplaceholder.typicode.com/posts/' + this.id)
      .subscribe((next) => (this.data = next));
    // this.data = this.http.get(
    //   'http://jsonplaceholder.typicode.com/posts/' + this.id
    // );
  }

  ngOnChanges() {
    console.log(`PostngOnChanges`);
  }

  ngDoCheck() {
    console.log('PostngCheck');
  }

  ngAfterContentInit() {
    console.log('PostngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('PostngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('PostngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('PostngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('PostngOnDestroy');
  }
}
