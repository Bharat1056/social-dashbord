import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        userName: '@bharat1056',
        followers: '1056',
        todayFollowers:+105,
        icon: "images/instagram24.png",
        name: 'instagram'
    },
    {
        userName: '@ananya26',
        followers:'31250',
        todayFollowers:+99,
        icon: "images/instagram24.png",
        name: 'instagram'


    },
    {
        userName: '@ashutosh',
        followers:'4630',
        todayFollowers:+39,
        icon: "images/instagram24.png",
        name: 'instagram'


    },
    {
        userName: '@saleena',
        followers:'28350',
        todayFollowers:+20,
        icon: "images/instagram24.png",
        name: 'instagram'


    },
]

function TopCardList() {
    return (
        <section className="top-card">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData)=> <Card key={id} {...cardData}/>)
                }
            </div>
        </div>
</section>
    )
}

export default TopCardList