import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  posts: any;

  constructor(private service: NoteService) { }

  ngOnInit(): void {
    this.service.get().subscribe(Response => {
      this.posts = Response;
    })
  }

  createNote(input: HTMLInputElement) {
    if (input.value) {
      let post = { note: input.value };
      this.service.create(post).subscribe(Response => {
        console.log(Response);
        this.posts.push(Response);
        input.value = '';
      });
    }
    else {
      alert('Can\'t create blank Note!');
    }
  }

  updateNote(p: any, noteInp: HTMLInputElement) {
    if (noteInp.value) {
      let updatenote = { note: noteInp.value, id: p.id };
      this.service.update(updatenote).subscribe(Response => {
        let ind = this.posts.indexOf(p);
        this.posts.splice(ind, 1, Response);
        noteInp.value = '';
      });
    }
    else {
      alert('Can\'t update blank Note!');
    }
  }

  deleteNote(p: any) {
    this.service.delete(p).subscribe(Response => {
      let ind = this.posts.indexOf(p);
      this.posts.splice(ind, 1);
    })
  }

  // noteText:string = '';
  // noteTextDisplay:string[] = [];

  // onKeyUp(noteText:string){
  //   this.noteTextDisplay.push(noteText);
  //   this.noteText = '';
  // }

  // updateNote(n:string){
  //   this.noteText = n;
  //   let noteIndex = this.noteTextDisplay.indexOf(n);
  //   this.noteTextDisplay.splice(noteIndex,1)
  // }

  // deleteNote(n:string){
  //   let noteIndex = this.noteTextDisplay.indexOf(n);
  //   this.noteTextDisplay.splice(noteIndex,1)
  // }
}
