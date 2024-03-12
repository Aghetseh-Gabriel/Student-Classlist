import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { MatDialog } from '@angular/material/dialog';
import { STUDENT_DATA } from '../../utils/data/student';
import { StudentFormComponent } from './student-form-component';
import { Student } from '../../types/Student';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog';
import { StudentService } from '../../services/student.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
    selector: 'app-student',
    standalone: true,
    template: `
    <div>
        <h3>Student</h3>
        <app-student-list
          [students] = "students"
          (onAction)="handleAction($event)"></app-student-list>
    </div>
  `,
    styles: [`
  
  `],
    imports: [CommonModule, StudentListComponent]
})
export class StudentComponent implements OnInit {
  title = 'client-angular';
  name = 'Tester';
  animal = 'test'
  students: Student[] = [];
  initStudent:Student = {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    program: ''
  };

  student: Student | null = null;
  //openDetail: DetailComponent | undefined;

  constructor(public dialog: MatDialog, private studentService: StudentService) {}

  ngOnInit() {
    // this.students = STUDENT_DATA;
    this.studentService.getAll()
      .subscribe({
        next: (val: any) => {
          const { data } = val;
          this.students = data;
        }
      })
  }

  openDialog(isEdit = false): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '600px',
      height: '500px',
      data: !isEdit ? {...this.initStudent} : this.student,

    }
    
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id === '') { 
          this.studentService.save(result)
            .subscribe({
              next: (val: any) => {
                this.students = [...this.students, val];
              },
              error: (err: any) => {
                console.log({err});
              }
            });
          
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
        case 'detail':
       // this.openDetail();
        break;
      default:
        ;

    }
  }

}