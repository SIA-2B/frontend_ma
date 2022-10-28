import { gql } from "@apollo/client";

export const PERSONALINFO_QUERY = gql`
  query Personas {
    allPersonas {
      idPersona
      nombrePersona
      apellidoPersona
      tipoDocumento
      NUIPPersona
      usernamePersona
      lugarNacimiento
      estadoCivil
      sexoBio
      etnia
      correoPersonal
      telefonoMovil
      telefonoFijo
      fechaNacimiento
      EPS
      grupoSangre
      factorRH
      dirResidencia
      lugarResidencia
      estratoSocioeconomico
      libretaMilitar
      estadoPersona
    }
  }
`;
