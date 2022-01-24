import React from 'react';
import HomeChart from '../home-chart/home-chart';
import { FeaturedInfo  } from "../featuredinfo/FeaturedInfo";
import { userData } from '../../dump-data';
import './home.css';

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <HomeChart data={userData} title="User Analytics" dataKey="uv"  grid />
    </div>
  );
}
