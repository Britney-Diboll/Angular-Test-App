import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'angular-test-app';
    classMembers: string[] = [];
    showTitle: boolean = true;
    myModel: object = {FirstName: 'Britney'};

    constructor() { }

    ngOnInit() {
        this.setClassMembers();
        this.showTitle = false;
        debugger;
    }

    doSomething() {
        console.log('Doing something!');
    }

    setClassMembers() {
        this.classMembers = ['My', 'Zac', 'Zach' ];
    }
}
