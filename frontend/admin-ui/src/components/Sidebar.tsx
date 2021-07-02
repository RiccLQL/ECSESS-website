import React from 'react';
import { Button } from './Button';
import { ButtonSizes } from './Enums';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export enum SidebarItems {
    events = 'Events',
    council = 'Council',
    resources = 'Resources',
    news = 'News',
    jobs = 'Jobs',
    photos = 'Photos',
    home = 'Home',
}

export const Sidebar = (): JSX.Element => {

    const goToLink = (): void => {
    }

    return (
        <div className="sidebar flex-horizontal">
            {
                [SidebarItems.home, SidebarItems.events, SidebarItems.council, SidebarItems.jobs, SidebarItems.news, SidebarItems.photos, SidebarItems.resources].map((item) => {
                    return (
                        <div className="sidebar-item" key={item}>
                            <Link to={`/${item}`} id={`link-${item}`}><Button size={ButtonSizes.medium} text={item} handleClick={goToLink}/></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}