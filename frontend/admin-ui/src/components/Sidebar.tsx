import React from 'react';
import { Button } from './Button';
import { ButtonSizes } from './Enums';

interface Props {
    changeView: (item: string) => void,
}

export enum SidebarItems {
    events = 'Events',
    council = 'Council',
    resources = 'Resources',
    news = 'News',
    jobs = 'Jobs',
    photos = 'Photos',
    home = 'Home',
}

export const Sidebar = (props: Props): JSX.Element => {

    const changeView = (item: string | undefined) => {
        if (item) props.changeView(item);
    }

    return (
        <div className="sidebar flex-horizontal">
            {
                [SidebarItems.home, SidebarItems.events, SidebarItems.council, SidebarItems.jobs, SidebarItems.news, SidebarItems.photos, SidebarItems.resources].map((item) => {
                    return (
                        <div className="sidebar-item" key={item}>
                            <Button handleClick={changeView} params={item} text={item} size={ButtonSizes.medium} />
                        </div>
                    )
                })
            }
        </div>
    )
}