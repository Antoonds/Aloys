import {FillIn} from './fill-in';

export class FillInModel implements FillIn{
  accepted: boolean;
  fillInRequesterId: number;
  fillInRequesterName: string;
  fillInRequesterTak: string;
  fillerId: number;
  fillerName: string;
  id: number;
  startDate: any;
  stopDate: any;
  vergadering: string;


  constructor(accepted: boolean, fillInRequesterId: number, fillInRequesterName: string, fillInRequesterTak: string, fillerId: number, fillerName: string, id: number, startDate: any, stopDate: any, vergadering: string) {
    this.accepted = accepted;
    this.fillInRequesterId = fillInRequesterId;
    this.fillInRequesterName = fillInRequesterName;
    this.fillInRequesterTak = fillInRequesterTak;
    this.fillerId = fillerId;
    this.fillerName = fillerName;
    this.id = id;
    this.startDate = startDate;
    this.stopDate = stopDate;
    this.vergadering = vergadering;
  }


}
