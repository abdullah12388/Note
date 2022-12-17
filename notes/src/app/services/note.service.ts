import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url: string = 'http://127.0.0.1:8000/note/';
  posts: any;
  constructor(private http:HttpClient){}

  get(){
    return this.http.get(this.url);
  }

  create(post: any){
    return this.http.post(this.url, post);
  }

  update(post: any){
    return this.http.put(this.url + post.id + '/', post);
  }

  delete(post: any){
    return this.http.delete(this.url + post.id + '/');
  }
}
