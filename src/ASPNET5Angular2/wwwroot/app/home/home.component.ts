import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../services/foodDataService';
import { SignalRService } from '../services/signalRService';
import { FoodComponent } from '../food/foodcomponent';
import { ChatComponent } from '../chat/chatComponent';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [CORE_DIRECTIVES, FoodComponent, ChatComponent]
})

export class HomeComponent {

    public message: string;

    constructor() {
        this.message = "Hello from HomeComponent constructor";
    }
}
