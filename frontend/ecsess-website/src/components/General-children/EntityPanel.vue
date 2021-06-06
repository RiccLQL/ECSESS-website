<template>
    <div class="entity-wrapper" @mouseover="goToEntity()" @mouseleave="leaveEntity()">
        <div class="entity-screen">
            <div class="entity-screen-cover-photo">
                <div class="img-container">
                    <img :src="require('../../assets/'+entity.image)" alt="" class="large-img" :id="`entity-panel-${entity.id}`">
                </div>
            </div>
            <div class="entity-screen-description">
                <div>
                    <h3 v-if="toggled === false"><b>{{entity.name}}</b></h3>
                    <p v-if="toggled === true">
                        {{entity.blurb}}
                    </p>
                    <br><br>
                </div>
            </div>
        </div>
        <div class="entity-screen" >
            <div class="entity-screen-description">
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EntityPanel",
    props: [ "entity" ],
    data () {
        return {
            toggled: false,
        }
    },
    methods: {
        goToEntity: function() {
            this.toggled = true;
            document.getElementById(`entity-panel-${this.$props.entity.id}`).style.filter = 'blur(8px)';
        },
        leaveEntity: function() {
            this.toggled = false;
            document.getElementById(`entity-panel-${this.$props.entity.id}`).style.filter = 'unset';
        }
    }
}
</script>

<style lang="scss">
    @import "../styles/style-components/entityPanel.scss"
</style>
