import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PROGRAM_DATA } from '../../utils/data/program';
//import { StudentFormComponent } from './student-form-component';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog';
import { ProgramFormComponent } from './program-form.component';
import { ProgramListComponent } from "./program-list";
import { Program } from '../../types/Program';

@Component({
    selector: 'app-program',
    standalone: true,
    template: `
    <div>
        <h3>Student Program</h3>
        <app-program-list
          [students] = "students"
          (onAction)="handleAction($event)"></app-program-list>
    </div>
  `,
    styles: [`
  
  `],
    imports: [CommonModule, ProgramFormComponent, ProgramListComponent]
})
export class ProgramComponent implements OnInit {
  title = 'client-angular';
  name = 'Tester';
  animal = 'test'
  students: Program[] = [];
  initStudent:Program = {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    program: ''
  };

  student: Program | null = null;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.students = PROGRAM_DATA;
  }

  openDialog(isEdit = false): void {
    const dialogRef = this.dialog.open(ProgramFormComponent, {
      width: '50%',
      data: !isEdit ? {...this.initStudent} : this.student,

    }
    
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id === '') {
          const students = this.students
          const count = this.students.length;
          result.id = `${count + 1}`;
          students.push(result);
          this.students = [...students];
        } else {
          const student: any = this.students.find((obj) => obj.id === result.id);
          const i = this.students.indexOf(student);
          this.students[i] = result;
        }
      }
      
    });
  }
    
  openDeleteDialogs(id: any, enterAnimationDuration: string, exitAnimationDuration: string) {
    const deleteRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      data: id,
      enterAnimationDuration,
      exitAnimationDuration

    });

    deleteRef.componentInstance.onDelete.subscribe({
      next: (val: any) => {
        const students = this.students;
        this.students = students.filter((obj: any) => obj.id !== val);
      }
    })
  }
  handleAction(event: any) {
    switch(event.action) {
      case 'create':
        this.openDialog();
        break;
      case 'edit':
        this.student = this.students.find((obj) => obj.id === event.id) || null;
        this.openDialog(true);
        break;
     case 'delete':
          this.openDeleteDialogs(event.id, '700ms', '100ms');
        break;
      default:
        ;

    }
    
  }
}