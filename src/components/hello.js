
var firstName = prompt("Entre your Name : ")
export default function Hello() {
    if(firstName){
    return(<h1>Hello  {firstName} </h1>)
    }
    return (<h1>Hello there </h1>)
    
}
