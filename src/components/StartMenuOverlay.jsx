import React from 'react';
import StartMenuButton from './StartMenuButton';

export default function StartMenuOverlay() {
    return <div className='flex z-[5003] flex-col justify-end w-[250px] pl-[5px] h-[510px] fixed left-0 bottom-[40px] overflow-hidden'>
        {[
            {
                icon: 'mycomp',
                text: 'My Computer'
            },
            {
                icon: 'help',
                text: 'Help'
            },
            {
                icon: 'settings',
                text: 'Settings'
            },
            {
                icon: 'recyclebin',
                text: 'Recycle Bin'
            },
            {
                icon: 'internet',
                text: 'Internet'
            },
            {
                icon: 'search',
                text: 'Find'
            },
            {
                icon: 'mydocs',
                text: 'My Documents'
            },
            {
                icon: 'shutdown',
                text: 'Shut Down'
            },
        ].map(icons => {
            return <StartMenuButton icon={icons.icon} text={icons.text} />
        })}
    </div>;
}
