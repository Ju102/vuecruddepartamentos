<template>
    <div class="container">
        <h5>¿Estás seguro?</h5>
        <p>Esta acción es irreversible.</p>
    </div>
</template>

<script>

import DepartamentosService from '@/services/DepartamentosService';
const service = new DepartamentosService();

export default {
    name: "DeleteDepartamento",
    methods: {
        eliminar() {
            service.deleteDepartamentoById(this.$route.params.id).then(() => {
                this.$router.push("/");
            });
        }
    }
}
</script>

<style></style>