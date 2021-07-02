import React from 'react';
import { Sidebar, SidebarItems } from './components/Sidebar';
import { Home } from './views/Home';
import { Council } from './views/Council';
import { Events } from './views/Events';
import { Jobs } from './views/Jobs';
import { Photos } from './views/Photos';
import { Resources } from './views/Resources';
import { News } from './views/News';
import './styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

interface RouteObject {
    path: string,
    component: () => any,
}

export const App = (): JSX.Element => {

    const routes: RouteObject[] = [
        { path: SidebarItems.home, component: () => { return <Home /> }},
        { path: SidebarItems.events, component: () => { return <Events /> }},
        { path: SidebarItems.council, component: () => { return <Council /> }},
        { path: SidebarItems.jobs, component: () => { return <Jobs /> }},
        { path: SidebarItems.news, component: () => { return <News /> }},
        { path: SidebarItems.photos, component: () => { return <Photos /> }},
        { path: SidebarItems.resources, component: () => { return <Resources /> }},
    ]



    return (
        <div className="app full-width">
            <Router>
                <div className="full-width margin-bottom"><Sidebar/></div>
                {routes.map((item, index) => {
                    return (
                        <div key={index} className="flex-vertical">
                            <Route path={`/${item.path}`} component={item.component} />
                        </div>
                    )
                })}
            </Router>
        </div>
    )
}