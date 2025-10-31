<template>
  <div class="container p-4">
    <h2 class="mt-2 mb-5 text-white">Modificar Departamento</h2>

    <form class="w-50 ms-auto me-auto rounded-3 px-5 py-4"
      style="border: 4px solid black; background-color:gray;" v-on:submit.prevent="modificarDepartamento()">
      <label class="form-label">ID: </label>
      <input class="form-control bg-warning" type="number" v-model="departamento.numero" disabled />
      <label class="form-label">Nombre: </label>
      <input class="form-control" type="text" v-model="departamento.nombre" />
      <label class="form-label">Localidad: </label>
      <input class="form-control" type="text" v-model="departamento.localidad" />
      <button class="btn btn-primary w-25 mt-3">Modificar</button>
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
      departamento: {}
    }
  },
  mounted() {
    service.getDepartamentoById(this.$route.params.id).then((response) => {
      this.departamento = response;
    })
  },
  methods: {
    modificarDepartamento() {
      service.updateDepartamento(this.departamento).then(() => {
        this.$router.push("/");
      });
    }
  },
}
</script>

<style></style>