import React from 'react';
import { useState } from 'react';
import { Sidebar, SidebarItems } from './components/Sidebar';
import { Home } from './views/Home';
import { Council } from './views/Council';
import { Events } from './views/Events';
import { Jobs } from './views/Jobs';
import { Photos } from './views/Photos';
import { Resources } from './views/Resources';
import { News } from './views/News';
import './styles/App.css';

export const App = (): JSX.Element => {

    const [view, setView] = useState<JSX.Element>(<Home />);

    const changeView = (item: string): void => {
        switch (item) {
            case SidebarItems.home:
                setView(<Home />);
                break;
            case SidebarItems.council:
                setView(<Council />);
                break;
            case SidebarItems.events:
                setView(<Events />);
                break;
            case SidebarItems.jobs:
                setView(<Jobs />);
                break;
            case SidebarItems.news:
                setView(<News />);
                break;
            case SidebarItems.photos:
                setView(<Photos />);
                break;
            case SidebarItems.resources:
                setView(<Resources />);
                break;
            default:
                setView(<Home />);
                break;
        }
    }

    return (
        <div className="app full-width">
            <div className="full-width margin-bottom"><Sidebar changeView={changeView}/></div>
            <div className="flex-vertical">{ view }</div>
        </div>
    )
}