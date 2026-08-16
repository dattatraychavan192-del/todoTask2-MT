import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn : "root"
})
export class SnackbarService {

    constructor(private _snackbar : MatSnackBar){
    }


    snackbar(meesage : string){
        this._snackbar.open(meesage,'close',{
            duration : 3000,
            horizontalPosition : "center",
            verticalPosition : 'top'
        })
    }

    ngOnInit(){
        
    }

}