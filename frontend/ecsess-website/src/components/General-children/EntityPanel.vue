<template>
    <div class="entity-wrapper" @mouseover="hover()" @>
        <div class="entity-screen" v-if="entity.id % 2 == 0">
            <div class="entity-screen-cover-photo-even">
                <div class="img-container">
                    <img :src="require('../../assets/'+entity.image)" alt="" class="large-img">
                </div>
               
            </div>
            <div class="entity-screen-description-even">
                <div>
                    <h3><b>{{entity.name}}</b></h3>
                    <br>
                    <p>
                        {{entity.blurb}}
                    </p>
                    <br><br>
                    <button @click="goToEntity(entity.id)">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <div class="entity-screen" v-if="entity.id % 2 == 1">
            <div class="entity-screen-description-odd">
                <div>
                    <h3><b>{{entity.name}}</b></h3>
                    <br>
                    <p>
                        {{entity.blurb}}
                    </p>
                    <br><br>
                    <button @click="goToEntity(entity.id)">
                        Learn More
                    </button>
                </div>
            </div>
            <div class="entity-screen-cover-photo-odd">
                <div class="img-container">
                    <img :src="require('../../assets/'+entity.image)" alt="" class="large-img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EntityPanel",
    props: [ "entity" ],
    methods: {
        goToEntity: function(entityId) {
            this.$router.push({ path: `/element/${entityId}` });
        }
    }
}
</script>

<style lang="scss">
    @import "../styles/style-components/entityPanel.scss"
</style>