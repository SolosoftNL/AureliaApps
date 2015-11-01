import {HttpClient} from "aurelia-http-client";


export class App {
    constructor() {
        //  this.message ="";
        this.http = new HttpClient();
    }

    activate(){
        this.message="Hi Ron! from Aurelia!";
        this.http.get("/movies.json").then(response => {this.movies = response.content;});
    }

    changeMessage(){
        this.message = "Goodbye!";
    }
}