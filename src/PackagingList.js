//Normal way of passin data throw props
// function Item({name}){
//     return <li>{name}</li>;
// }
// export default function PackagingList(){
//     return(
//         <section>
//             <h>Shaikh Aleem shop</h>
//             <ul>
//                 <Item name={"Helmet"}/>
//                 <Item name={"Jeans"}/>
//                 <Item name={"Laptop"}/>
//              </ul>
//         </section>
//     )
// }

//Normal way of passin data throw props
// function Item({name}){
//     return <li>{name}</li>;
// }
// export default function PackagingList(){
//     return(
//         <section>
//             <h>Shaikh Aleem shop</h>
//             <ul>
//                 <Item name={"Helmet"}/>
//                 <Item name={"Jeans"}/>
//                 <Item name={"Laptop"}/>
//              </ul>
//         </section>
//     )
// }

// //condition rendering using if statement
// function Item({name,isPacked}){
//    if(isPacked){
//     //ispacked show nahi karna hai to null kkare
//     return null;
//      //show karna hai li shhow kare
//     //return <li>{name} ✓</li>;
//    }
//     return <li>{name}</li>;
   
// }
// export default function PackagingList(){
//     return(
//         <section>
//             <h>Shaikh Aleem shop</h>
//             <ul>
//                 <Item name={"Helmet"} isPacked={true}/>
//                 <Item name={"Jeans"}isPacked={false}/>
//                 <Item name={"Laptop"}isPacked={true}/>
//              </ul>
//         </section>
//     )
// }


// // //condition rendering using Ternnary operattor 
// function Item({name,isPacked}){
   
//      return isPacked?<del><li>{name}✓ </li></del>:<li>{name}</li>;
//    //not show packed 
//    // return isPacked?null:<li>{name}</li>;

   
// }
// export default function PackagingList(){
//     return(
//         <section>
//             <h>Shaikh Aleem shop</h>
//             <ul>
//                 <Item name={"Helmet"} isPacked={true}/>
//                 <Item name={"Jeans"}isPacked={false}/>
//                 <Item name={"Laptop"}isPacked={true}/>
//              </ul>
//         </section>
//     )
// }


// // //condition rendering using logical and && operattor 
// function Item({name,isPacked}){
   
//     return 
//     (
//         <li>
//             {name}{isPacked && "✓"}
//          </li>
//     );     

  
// }
// export default function PackagingList(){
//    return(
//        <section>
//            <h>Shaikh Aleem shop</h>
//            <ul>
//                <Item name={"Helmet"} isPacked={true}/>
//                <Item name={"Jeans"}isPacked={false}/>
//                <Item name={"Laptop"}isPacked={true}/>
//             </ul>
//        </section>
//    )
// }



// //condition rendering using variable
function Item({name,isPacked}){
   
    let content=name;
    if(isPacked){
        content=<del>{name + "✓"}</del>;
    }
    return <li>{content}</li>;
    
}
export default function PackagingList(){
   return(
       <section>
           <h>Shaikh Aleem shop</h>
           <ul>
               <Item name={"Helmet"} isPacked={true}/>
               <Item name={"Jeans"}isPacked={false}/>
               <Item name={"Laptop"}isPacked={true}/>
            </ul>
       </section>
   )
}
