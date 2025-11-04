import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CreateDepartamento from "./components/CreateDepartamento.vue";
import UpdateDepartamento from "./components/UpdateDepartamento.vue";
import DetailsDepartamento from "./components/DetailsDepartamento.vue";
import DeleteDepartamento from "./components/DeleteDepartamento.vue";


const routes = [
    { path: "/", component: HomeComponent },
    { path: "/create", component: CreateDepartamento },
    { path: "/details/:numero/:nombre/:localidad", component: DetailsDepartamento },
    { path: "/edit/:id", component: UpdateDepartamento },
    { path: "/delete/:id", component: DeleteDepartamento }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;