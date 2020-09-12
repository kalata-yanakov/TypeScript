export class Validator {
  public static validateObject(obj: any, err?: string): void {
  
  if (!obj) {
    throw new Error(err? err : `Invalid value`);
    }
  }

  public static validateLength(str: string, min: number, max: number): void {
  
  if (str.length < min || str.length > max) {
    throw new Error(`${this.constructor.name} Length should be between ${min} and ${max}`);
    }
  }

  public static validatePositiveNumber(num: number): void {
  
    if (num <= 0) {
    throw new Error(`Value should be a positive number`);
    }
  }

}
