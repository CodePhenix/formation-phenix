var Module3 = (function() { 
    // ========= Private methods
    function privateFunc() {
        console.log('Executed from module3.privateFunc()');
    }

    // ========= Public methods
    function init() { 
        privateFunc();

        console.log('Executed from module3.init()');

        Module2.publicFuncModule2(); 
    }; 

    // ========= Exported methods
    return {
        init: init
    };
})(); 

Module3.SubModule = (function() {
    // ========= Public methods
    function init() { 
        console.log('Executed from module3.SubModule.init()');
        Module3.init();
    }; 

    // ========= Exported methods
    return {
        init: init
    };
})();