import { Component } from '@angular/core';
import { Student, studentsList } from './models/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-list';

  // o atributo students é um Array do tipo Student, definido no arquivo modelo.
  students!: Student[];

  constructor () {
    /* Atribuo então this.students que será utilizado para preencher os dados na tela
     Recebe o valor de "studentsList" uma constate com valores pré-definidos também no arquivo de modelo
     Poderia ser mais elegante e studentsList vir dentro de um observable pelo service, assim poderia
     utilizar do pipe async. */
    this.students = studentsList;
  }
}