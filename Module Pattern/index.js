const myModule = (function () {
    let privateVar = 'private';
  
    function privateFunction() {
      console.log('private function');
    }
  
    return {
      publicVar: 'I am public',
      publicFunction: function () {
        console.log('public function');
      },
    };
  })();
  
  console.log(myModule.publicVar);
  myModule.publicFunction(); 
  console.log(myModule.privateVar);
  myModule.privateFunction();

  
  //The Module pattern encapsulates private data and provides a way to expose a public interface for interacting with that data.