export interface IDeudor extends IsharedData {
  maritalState: string;
  dwellingType: Ivivienda;
  phoneNumber: string;
  dependentsNumber: number;
}

interface Ivivienda {
  tipo: string;
  department: string;
  province: string;
  municipality: string;
  locality: string;
  houseStreet: string;
  houseNumber: string;
  houseZone: string;
}

export interface IsharedData {
  id: string;
  lastName: string;
  firstName: string;
  fullName: string;
  passportType: string;
  passportNumber: string;
  bornDate: string;
  gender: string;
  organizationType: string;
  organizationName?: string;
  organizationAdress?: string;
  instructionDegree: string;
  dateCreated?: string;
}
