import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../services/commandes.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

export class ApiComponent implements OnInit {
  array:any =[];
  cmd: any={
    id:'',
    name:'',
    price:''
  };
  addOrput=false;
  constructor(private commande:CommandesService) { }

  ngOnInit(): void {
    this.getCommande();
  }

  getCommande() {

    this.commande.getAll()
    .subscribe((data: any) =>{
      this.array = data;
    })
  }

  deleteCommande(id: any){
    this.commande.delete(id).subscribe(
      () => {this.array = this.array.filter( (toutCommande: { id: any; }) => toutCommande.id != id)
      })
  }

  postCommande(){
    this.commande.post(this.cmd)
    .subscribe(
      (toutCommande: any)=>{
          this.array = [toutCommande, ...this.array];
          this.videInputs();
    })
    
  }
  //VIDER LES INPUTS
  videInputs(){
    this.cmd = {
      id:'',
      name:'',
      price:''
    }
  }
  //edit commande
  editCommand(toutCommande:any){
    this.cmd = toutCommande;
    this.addOrput=true; 
  }

  //mofifier commande
  putCommande(){
    this.commande.updateCommande(this.cmd)
    .subscribe( varQlq => {
      this.videInputs();
      this.addOrput = false;
    })
  }
}
