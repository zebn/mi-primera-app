import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="¡No se han creado servidores!";
  serverName='';
  servers = ['Testserver','Testserver 2'];
 
  constructor() {

    
    

  setTimeout (() => {
  this.allowNewServer = true;
  }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus='El servidor se ha creado!. Su nombre es ' +
    this.serverName;
    this.servers.push(this.serverName);
    }

  ngOnInit(): void {
  }
  }