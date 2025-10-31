<template>
    <div class="container p-4 text-white">
        <h2 class="mt-2 mb-5">Detalles</h2>
        <img v-if="!status" style="width: 10%" src="./../assets/loading.gif" />
        <table class="table table-bordered w-50 me-auto ms-auto">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ departamento.numero }}</td>
                    <td>{{ departamento.nombre }}</td>
                    <td>{{ departamento.localidad }}</td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-secondary" to="/">Volver</router-link>
        <button class="btn btn-danger ms-2" @click="eliminar()">Eliminar</button>
    </div>
</template>

<script>

import DepartamentosService from './../services/DepartamentosService';

const service = new DepartamentosService();

export default {
    name: "DetailsDepartamento",
    data() {
        return {
            status: false,
            departamento: {}
        }
    },
    mounted() {
        var id = parseInt(this.$route.params.numero);
        var nombre = this.$route.params.nombre;
        var localidad = this.$route.params.localidad;

        this.departamento.numero = id;
        this.departamento.nombre = nombre;
        this.departamento.localidad = localidad;

        this.status = true;
    },
    methods: {
        confirmarEliminar() {

        },
        eliminar() {
            service.deleteDepartamentoById(this.$route.params.numero).then(() => {
                this.$router.push("/");
            });
        }
    }
}
</script>

<style></style>