import React from 'react';
import WomenAllFirst1Component from './sub_women/womenSubFirst/WomenAllFirst1Component'
import WomenSubFirst1Component from './sub_women/womenSubFirst/WomenSubFirst1Component'
import WomenSubFirst2Component from './sub_women/womenSubFirst/WomenSubFirst2Component'

import WomenSubSecond1Component from './sub_women/womenSubSecond/WomenSubSecond1Component'
import WomenSubSecond2Component from './sub_women/womenSubSecond/WomenSubSecond2Component'
import WomenAllSecond1Component from './sub_women/womenSubSecond/WomenAllSecond1Component'
import WomenSubSecond1DetailComponent from './sub_women/womenSubSecond/WomenSubSecond1DetailComponent'

import WomenSubThird1Component from './sub_women/womenSubThird/WomenSubThird1Component'
import WomenSubThird2Component from './sub_women/womenSubThird/WomenSubThird2Component'
import WomenAllThird1Component from './sub_women/womenSubThird/WomenAllThird1Component'

import WomenSubFourth1Component from './sub_women/womenSubFourth/WomenSubFourth1Component'
import WomenSubFourth2Component from './sub_women/womenSubFourth/WomenSubFourth2Component'
import WomenAllFourth1Component from './sub_women/womenSubFourth/WomenAllFourth1Component'





export default function SubWomenComponent () {
    return (
        <div id='sub_women'>
            <WomenAllFirst1Component/>
            <WomenSubFirst1Component/>
            <WomenSubFirst2Component/>
            <WomenSubSecond1DetailComponent/>
            <WomenSubSecond1Component/>
            <WomenSubSecond2Component/>
            <WomenAllSecond1Component/>

            <WomenSubThird1Component/>
            <WomenSubThird2Component/>
            <WomenAllThird1Component/>

            <WomenSubFourth1Component/>
            <WomenSubFourth2Component/>
            <WomenAllFourth1Component/>
            
        </div>
    );
};

