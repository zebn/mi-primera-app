import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
    color: white;
    }
    `]
    })
export class ServerComponent{
    serverId: number = 10;
    serverName='';
    serverCreated=true;
    serverStatus: string = 'offLine';
    

    constructor (){
        this.serverStatus= Math.random () > 0.5 ? 'online' : 'offline';
        }
    onUpdateServerName(event:Event)
{
this.serverName = (<HTMLInputElement>event.target).value;
}

getServerStatus()

{
    return this.serverStatus

}



getColor(){
    return this.serverStatus ==='online' ? 'green' : 'red'
    }
    }