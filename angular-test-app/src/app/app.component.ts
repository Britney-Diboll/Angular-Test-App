import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
    name: 'kebabCase'
})

export class KebabCasePipe implements PipeTransform {
    transform(value: string): string {
       return value.toLowerCase().replace(/ /g, '-'); 
    }
}

@Component({
    selector: 'app-root',
    // imports: [KebabCasePipe],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'angular-test-app';
    classMembers: string[] = [];
    showTitle: boolean = true;
    myModel: any = {};
    kebab: string = 'this is my string';

    constructor() { }

    ngOnInit() {
        this.setClassMembers();
        this.showTitle = false;
    }

    doSomething() {
        console.log('Doing something!');
    }

    setClassMembers() {
        this.classMembers = ['My', 'Zac', 'Zach'];
    }

    validateName(event: any) : void {
        // let res = event.target.value;
        // if (res.length < 2) {
        //     alert('Name must be greater than 2 characters, please try again.');
        // } else {
        //     alert('Name is valid!');
        // }

        // OR

        if (this.myModel.FirstName.length < 2) {
            alert('Name must be greater than 2 characters, please try again.');
        } else {
            alert('Name is valid!');
        }
    }



    classFunction() : string{
        // debugger;
        if (this.myModel.FirstName?.length < 2) {
            return 'bd-color-red';
        } else {
            return 'bd-color-green ';
        }
    }


}
