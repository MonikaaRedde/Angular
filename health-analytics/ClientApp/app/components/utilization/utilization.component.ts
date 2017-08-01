import { Component } from '@angular/core';

@Component({
    selector: 'utilization',
    templateUrl: './utilization.component.html'
})
export class UtilizationComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
