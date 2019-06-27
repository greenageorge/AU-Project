import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IYear } from './IYear';
import { IReport } from './selection/IReport';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private url: string = "/assets/data/Select.json";

  constructor(private http: HttpClient) { }
  public getList(): Observable<IYear[]> {
    return this.http.get<IYear[]>(this.url);
  }
  public getReport(testId: string): Observable<IReport[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let params = new HttpParams()
      .set('selectedyear', "1999")
      .set('selectedbatch', "Batch")
      .set('selectedtest', "Test");

    // JSON.stringify(sas);
    let url = 'avjvchvcdvc/acghdyc/' + testId;

    return this.http.post<IReport[]>(url, params.toString(), httpOptions);

  }


}
