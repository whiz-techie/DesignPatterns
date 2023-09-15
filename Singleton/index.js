
  ////////////////////////////////
  ////////////////////////////////
  // todo app using Class component
  ////////////////////////////////
  ////////////////////////////////



// class ToDoList {
//     constructor() {
//       if (typeof ToDoList.instance === "object") {
//         return ToDoList.instance;
//       }
  
//       this.tasks = [];
//       ToDoList.instance = this;
//       return this;
//     }
  
//     addTask(task) {
//       this.tasks.push(task);
//     }
  
//     removeTask(task) {
//       const index = this.tasks.indexOf(task);
//       if (index !== -1) {
//         this.tasks.splice(index, 1);
//       }
//     }
  
//     getTasks() {
//       return this.tasks.slice();    // Return a copy to prevent direct modification
//     }
//   }
  
//   // Usage example
//   const todo1 = new ToDoList();
//   todo1.addTask("Buy groceries");
//   todo1.addTask("Clean the house");
  
//   const todo2 = new ToDoList();    // This will return the same instance as todo1
  
//   console.log("Tasks in todo1:", todo1.getTasks());
//   console.log("Tasks in todo2:", todo2.getTasks());
  
//   todo2.addTask("Go to the gym");
  
//   console.log("Tasks in todo1:", todo1.getTasks());     // Both todo1 and todo2 have the same tasks
  
//   // Both todo1 and todo2 are referring to the same instance of ToDoList
//   console.log(todo1 === todo2);    // true
  





  ////////////////////////////////
  ////////////////////////////////
  // todo app using function component
  ////////////////////////////////
  ////////////////////////////////






  // Singleton To-Do List
// const ToDoList = (function () {
//     let instance;
//     const tasks = [];
  
//     function createInstance() {
//       return {
//         addTask: function (task) {
//           tasks.push(task);
//         },
//         removeTask: function (task) {
//           const index = tasks.indexOf(task);
//           if (index !== -1) {
//             tasks.splice(index, 1);
//           }
//         },
//         getTasks: function () {
//           return tasks.slice();    // Return a copy to prevent direct modification
//         },
//       };
//     }
  
//     return {
//       getInstance: function () {
//         if (!instance) {
//           instance = createInstance();
//         }
//         return instance;
//       },
//     };
//   })();
  
//   // Usage example
//   const todo1 = ToDoList.getInstance();
//   todo1.addTask("Buy groceries");
//   todo1.addTask("Clean the house");
  
//   const todo2 = ToDoList.getInstance();    // This will return the same instance as todo1
  
//   console.log("Tasks in todo1:", todo1.getTasks());
//   console.log("Tasks in todo2:", todo2.getTasks());
  
//   todo2.addTask("Go to the gym");
  
//   console.log("Tasks in todo1:", todo1.getTasks());     // Both todo1 and todo2 have the same tasks
  
//   // Both todo1 and todo2 are referring to the same instance of ToDoList
//   console.log(todo1 === todo2); // true
  