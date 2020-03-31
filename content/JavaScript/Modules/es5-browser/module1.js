var Module1 = (function() { 
    var self = {}; 

    // ========= Private methods
    function privateFunc() {
        console.log('Executed from module1.privateFunc()');
    }
    
    // ========= Public methods
    self.publicFuncModule1 = function() { 
        privateFunc();
        console.log('Executed from module1.publicFuncModule1()');
    }; 

    return self;
})(); 

