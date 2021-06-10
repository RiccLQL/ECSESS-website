<template>
    <div class="navbar">
        <div v-for="(route, key) in navBarRoutes" :key="key">
            <NavBarSingleOption v-if="route.path" :path="route.path" :text="route.name" @dropdown="toggleDropdown" :listId="key"/>
            <NavBarDropdown v-if="route.paths" :routes="route.paths" :text="route.name" @dropdown="toggleDropdown" :listId="key" :dropdown="dropdown"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBarSingleOption from "@/components/NavBarSingleOption.vue";
import NavBarDropdown, { NavBarDropdownObject } from "@/components/NavBarDropdown.vue";
import pathNames from "@/router/pathNames";

interface NavBarRouteObject {
    name: string,
    path?: string,
    paths?: NavBarDropdownObject[],
}

@Component({
    name: "NavBar",
    components: {
        NavBarSingleOption,
        NavBarDropdown,
    },
})
export default class Home extends Vue {
    private dropdown: number = -1;

    // Navbar content

    private homeRoute: NavBarRouteObject = { name: "Home", path: pathNames.HOME }
    private councilRoute: NavBarRouteObject = { name: "Council", path: pathNames.COUNCIL }
    private eventDropdown: NavBarDropdownObject[] = [
        {path: `${pathNames.EVENTS}/${pathNames.ACADEMIC}`, text: "Academic Events"}, 
        {path: `${pathNames.EVENTS}/${pathNames.INDUSTRY}`, text: "Industry & Networking Events"}, 
        {path: `${pathNames.EVENTS}/${pathNames.WELLNESS}`, text: "Wellness Events"},
        {path: `${pathNames.EVENTS}/${pathNames.SOCIAL}`, text: "Social Events"},
    ];
    private eventRoute : NavBarRouteObject = { name: "Events", paths: this.eventDropdown }
    private resourceDropdown: NavBarDropdownObject[] = [
        {path: `${pathNames.RESOURCES}/${pathNames.ACADEMIC}`, text: "Academic Resources"}, 
        {path: `${pathNames.RESOURCES}/${pathNames.INDUSTRY}`, text: "Industry Resources"}, 
        {path: `${pathNames.RESOURCES}/${pathNames.WELLNESS}`, text: "Mental Health Resources"},
        {path: `${pathNames.RESOURCES}/${pathNames.OTHER}`, text: "Other Resources"},
    ];
    private resourceRoute : NavBarRouteObject = { name: "Resources", paths: this.resourceDropdown }
    private photosRoute: NavBarRouteObject = { name: "Photos", path: pathNames.PHOTOS }
    private fycRoute: NavBarRouteObject = { name: "ECSESSBits", path: pathNames.ECSESSBITS }
    private spacesRoute: NavBarRouteObject = { name: "Student Spaces", path: pathNames.STUDENT_SPACES }

    private navBarRoutes: NavBarRouteObject[] = [
        this.homeRoute, this.councilRoute, this.eventRoute, this.resourceRoute, this.photosRoute, this.fycRoute, this.spacesRoute 
    ]

    private toggleDropdown(listId: number): void {
        this.dropdown = listId;
    }

}
</script>

<style lang="scss">
    .navbar {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
        background-color: $darkmain;
    }

    .navbar-item {
        font-family: $defaultfont;
        font-size: $medium-size;
        font-weight: $bold;
        padding: 0.5rem 1rem 0.5rem 1rem;
        margin: 0.5rem 0.25rem 0.5rem 0.25rem;
        border-radius: 0.2rem;
        cursor: pointer;
        transition: all 0.3s;
    }

    .navbar-item:hover {
        background-color: $darkbackground;
    }

    .navbar-dropdown {
        position: absolute;
        z-index: 100;
        top: 4rem;
        background-color: $darkmain;
        padding: 1rem;
        border-radius: 0.2rem;
    }

    .dropdown-able {
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-subitem {
        font-weight: $bold;
        font-size: $small-size;
        margin: 0.25rem 0 0.25rem 0;
    }
</style>