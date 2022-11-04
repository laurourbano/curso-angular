import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: String = "Lauro";
  job: String = "Programador";
  dataAtual: Date = new Date();
  ano = this.dataAtual.getFullYear();
  anoNascimento: Number = 1985;
  idade: Number =  Number(this.ano) - Number(this.anoNascimento);
  hobbies: Array<String> = ['assistir', 'comer', 'estudar', 'jogar'];
  carro = {
    marca: "Renault",
    nome: "Kwid",
    ano: 2020,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
