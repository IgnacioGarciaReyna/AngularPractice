export interface ICodeudor {
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
  pais: {
    otro: string;
    pais: string;
  };
  actividad: string;
}
