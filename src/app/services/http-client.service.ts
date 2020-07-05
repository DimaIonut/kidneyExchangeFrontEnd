import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service'

export class FinalPair {
  constructor(
    public nameP1: string,
    public bloodP1: string,
    public nameD1: string,
    public bloodD1: string,

    public nameP2: string,
    public bloodP2: string,
    public nameD2: string,
    public bloodD2: string,

    public nameP3: string,
    public bloodP3: string,
    public nameD3: string,
    public bloodD3: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getFinalPairs() {
    return this.httpClient.get<FinalPair[]>("http://localhost:8080/start_find_compatibility");
  }
}
