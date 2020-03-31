// ========= Private methods
function privateFunc() {
    console.log('Executed from module3.privateFunc()');
}

// ========= Public methods
function publicFuncModule3() { 
    privateFunc();

    console.log('Executed from module3.publicFuncModule3()');
}

// ========= Exported methods
export { publicFuncModule3 };