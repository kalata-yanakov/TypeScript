import moment from 'moment';

export class Contact {

  private _name: string;
  private _phone: string;
  private _history: string[] = [];

  constructor( name: string, phone: string) {
    this._name = name;
    this._phone = phone;
  }

  public get history() {
    return this._history;
  }

  public get name() {
    return this._name;
  }

  public set name(value: string) {
    if (!value) {
      throw new Error('Name cannot be this format');
    }
    if (value.length < 3 || value.length > 25) {
      throw new Error('Name length is not supported');
    }
    this._name = value;
  }

  public get phone() {
    return this._phone;
  }

  public set phone(value: string) {
    if  (!value) {
      throw new Error('Phone cannot be this format')
    }
    if (!value.match(/0\d{3}(\-|\s)\d{3}(\-|\s)\d{3}$/g)) {
      throw new Error('Phone is not in correct type');
    }
    this._phone = value;
  }

  public call(): void  {
    const callMsg: string = `[${moment().format('MM/DD/YYYY hh:mm:ss A')}]Call: Duration: ${Math.floor((Math.random() * 150) + 1)} sec.`;
    this._history.push(callMsg);
  }

  public message(msg: string): void {
    const textMsg: string = `[${moment().format('MM/DD/YYYY hh:mm:ss A')}]Message: (${msg}).`;
    this._history.push(textMsg);
  }

  public viewHistoryLog(): any {
    console.log(`${this._name}'s call log:`);
    if (this._history.length === 0) {
      console.log('No entries');
  } else {
    this._history.slice().reverse().forEach((el) => console.log(el));
  }
}
}
