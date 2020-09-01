

export const isAdult=(x)=>{
if(x >= 18){
return true
}else{
return false
}
}

export const canDrink=(x)=>{
if(x >= 21){
return true
}else{
    return false
}
}
const isSenior =(x)=> x > 64 ? true : false
// const isSenior=(x)=>{
//     if(x < 65){
//         return false

//     }
//     return true
// }

export default isSenior