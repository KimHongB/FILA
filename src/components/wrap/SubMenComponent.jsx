import React from 'react';

import MenSubFirstComponent from './sub_men/menSubFirst/MenSubFirstComponent'
import MenSubFirst1Component from './sub_men/menSubFirst/MenSubFirst1Component'
import MenAllFirstComponent from './sub_men/menSubFirst/MenAllFirstComponent'

import MenSubSecond1Component from './sub_men/menSubSecond/MenSubSecond1Component'
import MenSubSecond2Component from './sub_men/menSubSecond/MenSubSecond2Component'
import MenAllSecond1Component from './sub_men/menSubSecond/MenAllSecond1Component'

import MenSubThirdComponent  from './sub_men/menSubThird/MenSubThirdComponent'
import MenSubThird1Component  from './sub_men/menSubThird/MenSubThird1Component'
import MenAllThirdComponent  from './sub_men/menSubThird/MenAllThirdComponent'

import MenSubFourthComponent  from './sub_men/menSubFourth/MenSubFourthComponent'
import MenSubFourth1Component  from './sub_men/menSubFourth/MenSubFourth1Component'
import MenSubAllFourth1Component  from './sub_men/menSubFourth/MenSubAllFourth1Component'



export default  function SubMenComponent ()  {
    return (
        <div id='sub_men'>

            <MenSubFirstComponent/>
            <MenSubFirst1Component/>
            <MenAllFirstComponent/> 

            <MenSubSecond1Component/>
            <MenSubSecond2Component/>
            <MenAllSecond1Component/>

            <MenSubThirdComponent/>
            <MenSubThird1Component/>
            <MenAllThirdComponent/>

            <MenSubFourthComponent/>
            <MenSubFourth1Component/>
            <MenSubAllFourth1Component/>

        </div>
    );
};

