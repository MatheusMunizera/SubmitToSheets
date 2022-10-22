import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-submit-to-sheets',
  templateUrl: './submit-to-sheets.component.html',
  styleUrls: ['./submit-to-sheets.component.css']
})
export class SubmitToSheetsComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    this.meta.addTags([
      {name:'description', content:`'SubmitToSheets' is a study project, as reactive forms that scrap data from 4devs website then send to sheets through sheetsapi`},
      {name:'author', content:'Munizera'},
      {name:'keywords', content:'submit-to-sheets, Submit to sheets, Sheetsapi,Munizera,Matheus Muniz Dantas, Portfolio, Angular, Backend, Frontend, Scrapping, NestJS'}
    ]);
    this.title.setTitle('SubmitToSheets')
  
  }

  ngOnInit(): void {
  }

}
