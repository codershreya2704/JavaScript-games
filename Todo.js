let task= prompt("what do you want to do today?");
// let ans = prompt("whats your task?");
const todo =[];


while(task!=='quit')
{
    
    
if(task==='quit')
{
    console.log("he quit")
    break;
}
else if(task=='add')
    {
        let ans = prompt("whats your task?");
        todo.push(ans.toString());
        console.log("task added");
    }
    else if(task=='list')
        {
            
            for(let i=0;i<todo.length;i++)
            {
                console.log(todo[i]);
            }
        }
        else if(task=='delete'){
            let ask = parseInt(prompt("enter the index to delete the item"));
            console.log(todo.splice(ask,1,"deleted"));
            console.log("Deleted!")
        }
        else{
            alert("invalid input");
        }

        task=prompt("what else?");

}


// switch(task)
// {
//     case "add":
//         todo.push(ans.toString());
//         break;
//     case "delete":
//         todo.pop();
//     case "list":
//         for(let ls of todo)
//         {
//             console.log(ls);
//         }
//         break;
//     case "quit":
//         break;
//     default:
//         alert("please enter valid choice");

// }

// let array=['ss','ss','ss']
// let ans = prompt("ask something");
// array.push(ans.toString());
// console.log(array)