import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../model/todo.interface';
import { todos } from '../../const/todo.data';
import { title } from 'process';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../service/service';
@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.scss']
})
export class Todo2Component implements OnInit {

  todoData : Itodos[] = todos;

  IsinEditMode !: boolean 
  editId !: number

  constructor(private _snackbar : SnackbarService) { }
 
  addTodo(inputRef: HTMLInputElement, selectRef: HTMLSelectElement){
    if(inputRef.value && selectRef.value ){
    const newObj: Itodos = {
      id: Date.now(),
      task: inputRef.value,
      completed: false
    };

    this.todoData.unshift(newObj);

    inputRef.value = "";
    selectRef.value = "";

    this._snackbar.snackbar("Todo Added Successfully")
  }else{
    this._snackbar.snackbar("Fill all fields...")

  }
  }

  editTodo(todo:Itodos, inputRef: HTMLInputElement, selectRef: HTMLSelectElement){
    this.IsinEditMode = true
    this.editId = todo.id;
    inputRef.value = todo.task;
    selectRef.value = todo.completed ? 'true' : 'false'
  }

  updateTodo(inputRef: HTMLInputElement, selectRef: HTMLSelectElement){
    if(inputRef.value && selectRef.value ){
    let updateId = this.editId;
    let updateObj : Itodos = {
      id : updateId,
      task: inputRef.value,
      completed: selectRef.value === 'true'
    }

    let getIndex = this.todoData.findIndex(i => i.id === updateId);

    this.todoData[getIndex] = updateObj
    inputRef.value = "";
    selectRef.value = "";

    this.IsinEditMode = false;

      this._snackbar.snackbar("Todo Update Successfully")
  }else{
    this._snackbar.snackbar("Fill All Fields...")
  }
}

  removeTodo(id:number){
    let getConfirm = confirm('You want to Remove It !')
    if(getConfirm){
    const getIndex = this.todoData.findIndex(i => i.id === id);
    this.todoData.splice(getIndex, 1)

      this._snackbar.snackbar("Todo Delete Successfully")
  }
  }

  ngOnInit(): void {
  }

}
