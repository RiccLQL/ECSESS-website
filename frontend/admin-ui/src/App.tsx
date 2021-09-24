import React, { useState } from 'react';
import { SidebarItems } from './components/Sidebar';
import { Home } from './views/Home';
import { Council } from './views/Council';
import { Events } from './views/Events';
import { Jobs } from './views/Jobs';
import { Photos } from './views/Photos';
import { Resources } from './views/Resources';
import { News } from './views/News';
import { Button } from './components/Button';
import { ButtonSizes } from './components/Enums';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

    const goToLink = (): void => {
    }

    const [auth, setAuth] = useState<string | null>(localStorage.getItem("auth"));

    const [pw, setPw] = useState<string>("");

    return (
        <div className="app full-width">
            {auth === 'authorized' ? 
                <Router>
                    <div className="full-width margin-bottom flex-horizontal">             
                        {routes.map((item) => {
                            return (
                                <Link to={`/${item.path}`} key={item.path} id={`link-${item.path}`}><Button size={ButtonSizes.medium} text={item.path} handleClick={goToLink}/></Link>
                            )
                        })}
                        <button onClick={() => {setPw(""); localStorage.removeItem("auth"); setAuth(null)}}>Logout</button>
                    </div>
                    {routes.map((item, index) => {
                        return (
                            <div key={index} className="flex-vertical">
                                <Route path={`/${item.path}`} component={item.component} />
                            </div>
                        )
                    })}
                </Router>
                :
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        if (pw === process.env.REACT_APP_MAIN_PASSWORD) {
                            setAuth('authorized');
                            localStorage.setItem("auth", 'authorized');
                        } else {
                            setAuth('unauthorized');
                            localStorage.setItem("auth", 'unauthorized');
                        }
                        
                    }}>
                        <input type="password" value={pw} onChange={(e) => {setPw(e.target.value)}}/>
                        
                        <input type="submit" value="Login"/>
                    </form>
                    { auth === 'unauthorized' ? <h4>Wrong password</h4> : <></>}
                </div>
            }
        </div>
    )
}