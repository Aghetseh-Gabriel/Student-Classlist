import { Component } from "@angular/core";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import {MatDividerModule} from '@angular/material/divider';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatButtonModule} from '@angular/material/button';
import { ThemePalette } from "@angular/material/core";


export interface Task {
  name: string;
  completed: string;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
    selector: 'detail',
    standalone: true,
    imports: [MatCheckboxModule, FormsModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, JsonPipe, MatIconModule, MatButtonModule, MatTooltipModule, MatDividerModule, MatIconModule],
    template: `
            <div>
                <h4> Student Details </h4>
            </div>
            <h4>Programs:</h4>
            <div style="background-color: #F2F0F0;">
            <button mat-raised-button color="primary" style="margin-left: 1100px; margin-top: 20px;">Update</button>
               <section class="example-section"> 
                    <p><mat-checkbox formControlName="webdesign">Web Design</mat-checkbox></p>
                    <p><mat-checkbox formControlName="frontendengineer">Front-End Engineer</mat-checkbox></p>
                    <p><mat-checkbox formControlName="backendengineer">Back-End Engineer</mat-checkbox></p>
                </section>
            </div>
            <div style="background-color: #F2F0F0;">
            <button mat-raised-button color="primary" style="margin-left: 1100px; margin-top: 20px;">Update</button>
               <section class="example-section"> 
                    <p><mat-checkbox formControlName="webdesign">Web Design</mat-checkbox></p>
                    <p><mat-checkbox formControlName="frontendengineer">Front-End Engineer</mat-checkbox></p>
                    <p><mat-checkbox formControlName="backendengineer">Back-End Engineer</mat-checkbox></p>
                </section>
            </div>
<!-- <section class="example-section" [formGroup]="toppings">
  <h4>You chose:</h4>
  {{toppings.value | json}}
</section> -->


    `,
    styles: [`
 
    .example-section {
  margin: 12px 0;
}

.example-margin {
  margin: 0 12px;
}

ul {
  list-style-type: none;
  margin-top: 4px;
}

    `],
})
export class DetailComponent {
handleClick: any;
element: any;

    /* toppings = this._formBuilder.group({
        webdesign: false,
        frontendengineer: false,
        backendengineer: false,
    }); 

    constructor(private _formBuilder: FormBuilder) { }
    */

  
}