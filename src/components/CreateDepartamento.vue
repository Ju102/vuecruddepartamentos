<template>
    <div class="container p-4">
        <h2 class="mt-2 mb-5 text-white">Crear nuevo Departamento</h2>

        <form class="w-50 ms-auto me-auto rounded-3 px-5 py-4"
            style="border: 4px solid black; background-color:gray;"
            v-on:submit.prevent="insertarDepartamento()">
            <label class="form-label">ID: </label>
            <input class="form-control" type="number" v-model="newDepartamento.numero" />
            <label class="form-label">Nombre: </label>
            <input class="form-control" type="text" v-model="newDepartamento.nombre" />
            <label class="form-label">Localidad: </label>
            <input class="form-control" type="text" v-model="newDepartamento.localidad" />
            <button class="btn btn-success w-25 mt-3">Crear</button>
        </form>
    </div>
</template>

<script>

import DepartamentosService from './../services/DepartamentosService';

const service = new DepartamentosService();

export default {
    name: "CreateDepartamento",
    data() {
        return {
            newDepartamento: {
                numero: 0,
                nombre: "",
                localidad: ""
            }
        }
    },
    methods: {
        insertarDepartamento() {
            service.insertDepart(this.newDepartamento).then(() => {
                this.$router.push("/");
            });
        }
    },
}
</script>

<style>
</style>