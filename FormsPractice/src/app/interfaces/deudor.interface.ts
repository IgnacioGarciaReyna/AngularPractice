export interface IDeudor {
  nombre: {
    apellidos: string;
    nombres: string;
  };
  documento: {
    tipo: string;
    numero: string;
  };
  nacimiento: string;
  sexo: string;
  organizacion: {
    tipo: string;
    nombre: string;
    direccion: string;
  };
  gradoInstruccion: string;
  estadoCivil: string;
  vivienda: {
    tipo: string;
    departamento: string;
    provincia: string;
    municipio: string;
    localidad: string;
    direccion: {
      calle: string;
      numero: string;
    };
    zona: string;
  };
  telefono: string;
  dependientes: number;
}
