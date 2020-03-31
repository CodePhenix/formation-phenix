import { publicFuncModule3 as module3Func } from './module3.js';

// ========= Public methods
function publicFuncModule2() { 
    console.log('Executed from module2.publicFuncModule2()');

    module3Func();
} 

// ========= Exported methods
export { publicFuncModule2 };

