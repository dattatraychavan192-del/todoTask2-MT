import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItodoArr } from '../../model/todo1.interface';
import { todosArr } from '../../const/todo1.data';
import { SnackbarService } from '../../service/service';

@Component({
  selector: 'app-todo1-two-way',
  templateUrl: './todo1-two-way.component.html',
  styleUrls: ['./todo1-two-way.component.scss']
})
export class Todo1TwoWayComponent implements OnInit {

@ViewChild('inputRef')inputRef !: ElementRef;
@ViewChild('standeredRef')standeredRef !: ElementRef;
@ViewChild('selectRef')selectRef !: ElementRef;

  
  todoData1: ItodoArr[] = todosArr;
  IsinEditMode !: boolean

  editId !: number;
  constructor(private _snackbar : SnackbarService) { }

  ngOnInit(): void {
  }

  addTodo(){
    if(this.inputRef.nativeElement.value && this.standeredRef.nativeElement.value){
    const newObj : ItodoArr ={
      id : Date.now(),
      task : this.inputRef.nativeElement.value,
      priority : this.standeredRef.nativeElement.value,
      completed : this.selectRef.nativeElement.value
    }
    
    this.todoData1.unshift(newObj)

      this.inputRef.nativeElement.value = "";
    this.standeredRef.nativeElement.value = "";
    this.selectRef.nativeElement.value = "";

    this._snackbar.snackbar("New todo Add Successfully...")
  }else{
    this._snackbar.snackbar("Fill all Fields...")
  }
  }

    
editTodo(data : ItodoArr){
  this.IsinEditMode = true;
  this.inputRef.nativeElement.value = data.task
  this.standeredRef.nativeElement.value = data.priority
  this.selectRef.nativeElement.value = data.completed
}

  updateTodo(){
    if(this.inputRef.nativeElement.value && this.standeredRef.nativeElement.value && this.selectRef){
    let updateId = this.editId
    const updateObj : ItodoArr ={
      id : updateId,
      task : this.inputRef.nativeElement.value,
      priority : this.standeredRef.nativeElement.value,
      completed : this.selectRef.nativeElement.value
    }
    
    const getIndex = this.todoData1.findIndex(ele => ele.id === updateId)

    this.todoData1[getIndex]= updateObj;

    this.inputRef.nativeElement.value = "";
    this.standeredRef.nativeElement.value = "";
    this.selectRef.nativeElement.value = "";

    this.IsinEditMode= false;
  }else{
    this._snackbar.snackbar("Fill All Fields...")
  }
}

  removeTodo(id: number){
    let getConfirm = confirm('You want to Remove It !')
    if(getConfirm){
      let getIndex = this.todoData1.findIndex(ele => ele.id === id)
       this.todoData1.splice(getIndex, 1) 
    }
  }
}
