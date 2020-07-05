import { Component, OnInit } from '@angular/core';
import { HttpClientService, FinalPair } from '../services/http-client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  public finalPairs: FinalPair[];

  public isWaitServer: boolean = false;

  constructor(
    private httpClientService: HttpClientService,
    public loginValidationBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  handleResponse(response) {

    this.finalPairs = response;
  }

  getFinalPairs() {
    this.isWaitServer = true;
    this.httpClientService.getFinalPairs().subscribe(
      response => {
        this.handleResponse(response)
        this.loginValidationBar.open("Succes!", "OK", {
          panelClass: ['green-snackbar']
        });
        this.isWaitServer = false;
      },
      error => {
        this.loginValidationBar.open("Cererea nu s-a efectuat cu succes!", "OK", {
          panelClass: ['green-snackbar']
        });
        this.isWaitServer = false;
      }
    );
  }
}
