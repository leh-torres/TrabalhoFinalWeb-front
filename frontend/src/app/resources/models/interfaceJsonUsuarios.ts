import { Usuarios } from "./Usuarios";

export interface jsonUsuariosBanco {
    sucess: boolean,
    message: string,
    data: Usuarios[]
  }
  