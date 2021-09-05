import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
const httpoptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class ServerrequestService {
  private miservidorLocal = "https://localhost:5000/";
  private miservidor = "https://optimusdev.herokuapp.com/";
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
  SendData(datosFormulario){
    return this.http
    .post(this.miservidor + "optimusdev/customer", datosFormulario, httpoptions)
    .pipe(catchError(this.handleError("Enviar Datos carajo")));
  }
}
