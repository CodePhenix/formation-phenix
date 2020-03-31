var Module2 = (function() { 
    var self = {}; 

    // ========= Public methods
    self.publicFuncModule2 = function() { 
        console.log('Executed from module2.publicFuncModule2()');

        Module1.publicFuncModule1(); 
    }; 

    return self;
})(); 


