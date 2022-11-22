import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CommandDto } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  urlApi= environment.api;

  constructor(private http:HttpClient) {   }

  // GET all
  getAll(){
    return this.http.get<CommandDto[]>(this.urlApi);
  }

  // DELETE one
  delete(id: number){
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  // CREATE one
  post(command: CommandDto){
      return this.http.post<CommandDto>(this.urlApi, command);
  }

  // UPDATE one
  updateCommand(command: CommandDto){
    return this.http.put(`${this.urlApi}/${command.id}`, command);
  }

  // search by id
  search(id: number){
      return this.http.get<CommandDto>(`${this.urlApi}/${id}`); //${id}
  }

}


