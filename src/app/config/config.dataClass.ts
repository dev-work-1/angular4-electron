export abstract class ConfigDataClass {
  protected appName: string;
  protected apiUrl: string;

  constructor() { 
    this.dataInit();
    }


  protected dataInit():void{
    this.appName="Default name";
    this.apiUrl="Default api url";
  }
  
 }