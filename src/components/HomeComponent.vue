<template>
    <div class="container p-4 text-white">
        <h2 class="mt-2 mb-5">Lista de Departamentos</h2>
        <img v-if="!status" style="width: 10%" src="./../assets/loading.gif" />
        <table class="table table-bordered w-50 me-auto ms-auto" v-if="departamentos.length != 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departamentos" :key="dept">
                    <td>{{ dept.numero }}</td>
                    <td>{{ dept.nombre }}</td>
                    <td>
                        <router-link class="btn btn-warning me-2"
                            :to="'/edit/' + dept.numero">Editar</router-link>
                        <router-link class="btn btn-success"
                            :to="'/details/' + dept.numero + '/' + dept.nombre + '/' + dept.localidad">Detalles</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import DepartamentosService from './../services/DepartamentosService';

const service = new DepartamentosService();

export default {
    name: "HomeComponent",
    data() {
        return {
            departamentos: [],
            status: false
        }

    },
    mounted() {
        service.getDepartamentos().then(response => {
            console.log("Tabla de departamentos cargada.");
            this.status = true
            this.departamentos = response;
        })
    }
}
</script>

<style></style>