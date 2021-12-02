
// function ProductCollection(){
//     let arr = [];

//     arr.addItem = function(item){
//         this.push(
//             new ProductItem(
//                 item,
//                 ((collection) => function(){
//                     collection.removeItem(this)
//                 })(this) 
//             )
//         );

//         // allows for chaining
//         return this;
//     }

//     arr.checkedOutItems = function(){
//         return this.filter(function(item){
//             return !item.isAvailable();
//         })
//     }

//     arr.removeItem = function(item){
//         this.splice(this.indexOf(item), 1);

//         // allows for chaining
//         return this;
//     }


//     return arr;
// }

// export default ProductCollection;