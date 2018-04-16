import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  project: {};
  projects = [
    {
      title: 'Project name 1',
      shortDescription: 'Short description 1',
      mainPhotoUrl: '../assets/images/project1.svg',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    },
    {
      title: 'Project name 2',
      shortDescription: 'Short description 2',
      mainPhotoUrl: '',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    },
    {
      title: 'Project name 3',
      shortDescription: 'Short description 3',
      mainPhotoUrl: '',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    },
    {
      title: 'Project name 4',
      shortDescription: 'Short description 4',
      mainPhotoUrl: '',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    },
    {
      title: 'Project name 5',
      shortDescription: 'Short description 5',
      mainPhotoUrl: '',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    },
    {
      title: 'Project name 6',
      shortDescription: 'Short description 6',
      mainPhotoUrl: '',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    },
    {
      title: 'Project name 7',
      shortDescription: 'Short description 7',
      mainPhotoUrl: '',
      fullDescription:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor aut voluptatum, inventore veniam ipsa quidem beatae at mollitia accusantium. '
    }
  ];

  chosenProject(project) {
    this.project = project;
  }
  constructor() {}

  ngOnInit() {
    // const _this = this;
    // const highlight = function() {
    //   console.log('works');
    //   const a = document.querySelector('div.project');
    //   console.log(a);
    // };
    // const selectProject = function(trigger) {
    //   console.log('sp works');
    //   _this.project = _this.projects[0];
    //   trigger();
    // };
    // selectProject(highlight);
    // if (!this.project) {
      this.project = this.projects[0];
      // if (this.project) {
      //   console.log(document.querySelector('div.project'));
      // }
      setTimeout(function () {
        document.querySelector('div.project').classList.add('chosenProject');
      }, 200);
      // console.log(document.querySelector('div.project'));
      // console.log(chosen);
      // if (chosen.length) {
      //   chosen[0].classList.add('chosenProject');
      //   console.log(chosen[0].classList);
      // }
    // }
  }
}
