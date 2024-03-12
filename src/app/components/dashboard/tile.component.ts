import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule} from "@angular/material/card";
@Component ({
    selector: 'app-welcome-tile',
    standalone: true,
    imports: [CommonModule, MatCardModule],
    template: `
    <mat-card class="tile" (click)="handleClick()">
        <div class="count">{{count}}</div>
        <br />
        <div>{{title}}</div>
    </mat-card>
   
    `,
    styles: [`
    .tile {
        background-color: #83B7C2;
        text-align: center !important;
        padding: 24px !important;
        margin: 19px;
    }
    .count {
    font-size: 40px;
    font-weight:bold;
    }
    `]
})
export class TileComponent {
@Input()title: string ='';
@Input()count: string = '';
@Output() onAction = new EventEmitter<void>();

handleClick(){
    this.onAction.emit();
}
}