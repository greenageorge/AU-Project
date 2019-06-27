import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {IYear} from './IYear';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private url: string= "/assets/data/Select.json";
  
  constructor(private http: HttpClient) { }
  public getList():Observable<IYear[]>{
    return this.http.get<IYear[]>(this.url);
  }
}
