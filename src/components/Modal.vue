<template>
    <div
        class="modal card overflow-hidden"
        style="max-width: 540px"
        v-if="item"
    >
        <div class="row mt-4">
            <div class="col-md-4">
                <img :src="item.image" class="img-fluid rounded" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title" style="font-size: 1.5rem">
                        {{ item.name }}
                    </h5>
                    <p class="card-text">
                        {{ item.species }} ({{ item.gender }})
                    </p>
                    <p class="card-text">
                        <small class="text-body-secondary">{{
                            item.location.name
                        }}</small>
                    </p>
                    <p class="card-text">
                        <small class="text-body-secondary">{{
                            item.status
                        }}</small>
                    </p>
                </div>
                <div class="d-flex justify-content-end p-3">
                    <button class="btn btn-info" @click="cerrarModal">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
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
        cerrarModal() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="css" scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80%;
    max-height: 60vh;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 2000;
    padding: 10px;
}
@media (min-width: 768px) {
    .modal {
        max-height: 30vh;
    }
}
@media (max-width: 768px) {
    .modal {
        width: 300px;
       
    }
    .row{
        flex-direction: column;
    }
}

</style>
