import React from 'react';
import {View} from 'react-native';

//protected components
import Splash3_1 from './splash3_1.js';
import Splash3_2 from './splash3_2.js';
import Splash3_3 from './splash3_3.js';

const Splash3 = () => {
  return (
    // <Splash3_1
    //   title="Numerous free all courses"
    //   descript="Free courses for you to find your way to learning"
    //   visible="true"></Splash3_1>
    // <Splash3_2
    //   title="Quick and Easy learning"
    //   descript="Easy and fast at anytime to help you improve various skills"
    //   visiblel="false"></Splash3_2>
    <Splash3_3
      title="Create your old study plan"
      descript="Study according to the study plan, make study more motivated"
      visiblel="false"></Splash3_3>
  );
};

export default Splash3;
