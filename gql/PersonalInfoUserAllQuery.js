import { gql } from "@apollo/client";

export const PERSONALINFO_QUERY = gql`
  query Personas($user: String!) {
    personaByUsername(username: $user) {
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
