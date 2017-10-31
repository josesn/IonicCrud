import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HospedagemPage } from '../../pages/hospedagem/hospedagem';
import { EditahospPage } from '../../pages/editahosp/editahosp';
import 'rxjs/add/operator/map';

/*
  Generated class for the Hospedagem provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HospedagemService {

  private urlBase = 'http://localhost:8000'
  private urlHosp = '/empresa'
  private urlToken = '/api-token-auth/'
  
  constructor(public http: Http,) {
    
  }

  

  public pegarToken(username, password) {
    let body = JSON.stringify({
      username: username,
      password: password,
    })
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers});
    return this.http.post(this.urlBase + this.urlToken, body, options)
      .map((response:Response)=>response.json());
  }

  public getAllHospedagem(): Observable<any> {
    let url = this.urlBase + this.urlHosp
    return this.http.get(url)
            .map(this.dataHandler)
            
  }

  public dataHandler (res: Response) {
    let hosp = res.json();
    return {lista: hosp};
  }

  public removeHospedagem(id): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Token f437dfa53387290d34dc4f3263f1361f077ae052'  });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.urlBase + this.urlHosp + '/' + id + '/' , options)
            .map((response:Response)=>response.json());
                
  }

  public editaHospedagem(id, nome, descricao, endereco, email){
    let body = JSON.stringify({
      nome: nome,
      descricao: descricao,
      endereco: endereco,
      email: email,
    });
    console.log(id, nome, descricao, endereco, email);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.urlBase + this.urlHosp + '/'+ id +'/', body, options)
            .map((response:Response)=>response.json());
    
    }

  public adicionaHospedagem(nome, descricao, endereco, email) {
    let body = JSON.stringify({
      nome: nome,
      descricao: descricao,
      endereco: endereco,
      email: email,
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlBase + this.urlHosp + '/', body, options)
            .map((response:Response)=>response.json());
    
  }

  

}
