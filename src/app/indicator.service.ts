import { Injectable } from '@angular/core';
import { Indicator } from './indicator';
//import { INDICATORS } from './mock-indicators';
import { Observable, of, interval } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  private log(message: string){
    this.messageService.add(`IndicatorService: ${message}`);
  }

  private indicatorsUrl = 'api/indicators'; //URL to web api

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastucture
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning by returning an empty result
      return of(result as T);
    };
  }

  getIndicators(): Observable<Indicator[]> {
    // TODO: send the message _after_ fetching the indicators
    //this.messageService.add('IndicatorService: fetched indicators');
    //return of(INDICATORS);
    console.log("Get value of indicators");
    return this.http.get<Indicator[]>(this.indicatorsUrl)
      .pipe(
        //tap(indicators => this.log('fetched indicators')),
        catchError(this.handleError('getIndicators',[]))
      );
  }

  getIndicator(id: string): Observable<Indicator>{
    const url = `${this.indicatorsUrl}/${id}`;
  	//this.messageService.add(`IndicatorService: fetched indicator id=${id}`);
  	return this.http.get<Indicator>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Indicator>(`getIndicator id =${id}`))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }
 
}
