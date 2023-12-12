<template>
    <div @click="clickPersonaje" className="row justify-content-center">
        <div class="mb-4" style="width: 18rem">
            <div class="card border-info d-flex flex-column h-100">
                <span v-if="item.status === 'Alive'" class="bg-success rounded-top text-center text-white">{{
                    item.status
                }}</span>
                <span v-else class="bg-danger rounded-top text-center text-white">{{ item.status }}</span>
                <img :src="item.image" alt="" />
                <div class="card-body mt-auto">
                    <h5 class="card-tittle">{{ item.name }}</h5>
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
    methods: {
        clickPersonaje() {
            this.$emit("clickPersonaje", this.item.id);
        },
    },
};
</script>

<style lang="css" scoped>
.card {
    min-height: 480px;
    max-height: 480px;
    cursor: pointer;
}
</style>
