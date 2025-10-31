import axios from "axios";
import Global from "./../Global";

export default class DepartamentosService {

    /**
     * Method that obtains a list from the service
     * @returns a list
     */
    getDepartamentos() {
        return new Promise(function (resolve) {
            var request = "api/departamentos/";
            var url = Global.urlDepts + request;

            var departamentos = [];

            console.log("Obteniendo lista de departamentos con el servicio...");
            axios.get(url).then(response => {
                console.log("Devolviendo lista de departamentos al componente...");
                departamentos = response.data;
                resolve(departamentos);
            })
        });
    }
    getDepartamentoById(id) {
        return new Promise(function (resolve) {
            var request = "api/departamentos/" + id;
            var url = Global.urlDepts + request;

            var departamento = null;

            console.log("Obteniendo departamento con el servicio...");
            axios.get(url).then(response => {
                console.log("Devolviendo departamento al componente.");
                departamento = response.data;
                resolve(departamento);
            });
        });
    }

    insertDepart(depart) {
        return new Promise(function (resolve) {
            var request = "api/departamentos/";
            var url = Global.urlDepts + request;

            console.log("Insertando nuevo departamento...");
            axios.post(url, depart).then(() => {
                console.log("Departamento insertado con exito");
                resolve();
            });
        });
    }

    updateDepartamento(depart) {
        return new Promise(function (resolve) {
            var request = "api/departamentos/";
            var url = Global.urlDepts + request;

            console.log("Modificando departamento...");
            axios.put(url, depart).then(() => {
                console.log("Departamento modificado con exito");
                resolve();

            })
        });
    }

    deleteDepartamentoById(id) {
        return new Promise(function (resolve) {
            var request = "api/departamentos/" + id;
            var url = Global.urlDepts + request;

            console.log("Eliminando departamento...");
            axios.delete(url).then(() => {
                console.log("Departamento " + id + " eliminado con exito.");
                resolve();
            })
        });

    }

}