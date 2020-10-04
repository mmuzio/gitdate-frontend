import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubgittitModel } from './subgittit.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubgittitService {
  constructor(private http: HttpClient) {}

  getAllSubgittits(): Observable<Array<SubgittitModel>> {
    return this.http.get<Array<SubgittitModel>>(
      'http://localhost:8080/api/subgittit'
    );
  }

  createSubgittit(subgittitModel: SubgittitModel): Observable<SubgittitModel> {
    return this.http.post<SubgittitModel>(
      'http://localhost:8080/api/subgittit',
      subgittitModel
    );
  }
}
