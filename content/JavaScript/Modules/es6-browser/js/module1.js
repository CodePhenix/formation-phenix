import { publicFuncModule2 as module2Func } from './module2.js';

// ========= Private methods
function privateFunc() {
    console.log('Executed from module1.privateFunc()');
}

// ========= Public methods
function publicFuncModule1() { 
    privateFunc();
    console.log('Executed from module1.publicFuncModule1()');

    module2Func();
}

// ========= Exported methods
export { publicFuncModule1 };


