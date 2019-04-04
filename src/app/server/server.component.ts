import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 102;
  serverName: string = 'ARCORSERVER' + this.serverId.toString();
  serverStatus = 'offline';

  getServerStatus() {

    return this.serverStatus;
  }
}
