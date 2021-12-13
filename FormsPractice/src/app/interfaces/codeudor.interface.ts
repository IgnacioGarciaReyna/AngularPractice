import { IsharedData } from "./deudor.interface";

export interface ICodeudor extends IsharedData{
  otherCountry: string;
  otherCountryName: string;
  workType: string;
}
