import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from '../models/interface';

@Injectable({
  providedIn: 'root'
})

export class CommandesService {
  urlApi='http://localhost:42400/commandes';
  // id: any;
  constructor(private http:HttpClient) {   }
// GET
  getAll(){
    return this.http.get<Interface>(this.urlApi);
  }

// DELETE
 delete(id: any){
  return this.http.delete(`${this.urlApi}/${id}`);
 }
//CREATE
 post(commandes: any){
    return this.http.post<Interface>(this.urlApi,commandes);
 }

 //update
 updateCommande(commandes:any){
   return this.http.put(`${this.urlApi}/${commandes.id}`,commandes);
 }
 //search  Copilot by id
  search(id:any){
    return this.http.get<Interface>(`${this.urlApi}/${id}`); //${id}
  }

}


