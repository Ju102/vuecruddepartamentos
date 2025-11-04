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
        <router-link class="btn btn-danger ms-2" :to="'/delete/' + departamento.numero">Eliminar</router-link>
    </div>
</template>

<script>

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
    }
}
</script>

<style></style>