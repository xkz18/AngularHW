

import { Component, OnInit } from '@angular/core';

export interface Project {
  id: string;
  name: number;
}
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  title = 'clock-greets';
  time: Date | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;

  public pendingValue: number | undefined;

  public projects: Project[] = [
    { id: 'p1', name: new Date().getHours() },
    { id: 'p2', name: new Date().getMinutes() },
    { id: 'p3', name: new Date().getSeconds() },
    // { id: 'p4', name: new Date().getHours() > 12 ? 'PM' : 'AM' },
  ];

  public selectedProject: Project | null | undefined;

  constructor() {
    // this.timer = setInterval(() => {

    //   this.projects[0].name = new Date().getHours();
    //   this.projects[1].name = new Date().getMinutes();
    //   this.projects[2].name = new Date().getSeconds();
    // }, 1000);

    this.pendingValue = undefined;
  }

  ngOnInit() {
    this.updateTime();
  }

  public edit(project: Project): void {
    this.pendingValue = project.name;
    this.selectedProject = project;
  }

  public cancel(): void {
    this.selectedProject = null;
  }

  public processChanges(): void {
    if (this.pendingValue !== this.selectedProject!.name) {
      this.selectedProject!.name = this.pendingValue!;
    }

    this.selectedProject = null;
  }

  timer = null;
  stopTime() {
    // @ts-ignore
    clearInterval(this.timer);
  }

  updateTime() {
    // @ts-ignore

    this.timer = setInterval(() => {
      this.projects[2].name++;
      if (this.projects[2].name == 60) {
        this.projects[2].name = 0;
        this.projects[1].name++;
      }
      if (this.projects[1].name == 60) {
        this.projects[1].name = 0;
        this.projects[0].name++;
      }
      if (this.projects[0].name == 24) {
        this.projects[0].name = 0;
      }
      // if (this.projects[0].name > 12) {
      //   this.projects[4].name = this.projects[4].name == 'AM' ? 'PM' : 'AM';
      //   this.projects[0].name = this.projects[0].name - 12;
      // }
    }, 1000);
  }
}
