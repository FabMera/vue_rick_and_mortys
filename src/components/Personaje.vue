<template>
    <div className="row justify-content-center ">
        <div class="mb-4" style="width: 18rem">
            <div class="card border-info d-flex flex-column h-100">
                <span v-if="item.status === 'Alive'" class="badge bg-success">{{
                    item.status
                }}</span>
                <span v-else class="badge bg-danger">{{ item.status }}</span>
                <img :src="item.image" alt="" />
                <div class="card-body mt-auto">
                    <h5 class="card-tittle">{{ item.name }}</h5>
                    <hr />
                    <p>Especie: {{ item.species }}</p>
                    <p>Ubicacion: {{ item.location.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Personaje",
    components: {},
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="css" scoped>
.card {
    min-height: 480px;
    max-height: 480px;
    overflow: auto;
}
</style>
