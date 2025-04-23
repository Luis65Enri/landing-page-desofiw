import axios from "axios";
import { Servidor } from "../../configuraciones/ApiUrls";

export const AxiosPublico = axios.create({
    baseURL: Servidor,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});