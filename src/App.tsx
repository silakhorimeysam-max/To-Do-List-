
function App() {
  interface TTask {
    id:number ,
    title:string ,
    isCompleted:boolean ,
    description?:string
    }
    
    
 function addTask (tasks:TTask[],title:string){
        const newTask:TTask ={
            id: tasks.length + 1,
            title,
            isCompleted: false,
        }
        return[...tasks,newTask ]
    }
    
  function toggleTaskStatus( tasks:TTask[],id:number ):TTask[]{
    return tasks.map(task=>task.id===id?{...task,isCompleted:!task.isCompleted}:task )
    }
    
    let myTasks: TTask[] = []
    
    myTasks = addTask(myTasks, " تمرین تایپ اسکریپت")
    myTasks = addTask(myTasks, "تمیرن ری اکت  ")
     myTasks = addTask(myTasks, "تمیرت جاوا اسکریپت ")
    
      console.log("وقتی تسک اضافه شد:", myTasks)

     myTasks = toggleTaskStatus(myTasks, 0)
     console.log(' بعد از تغییر وضعیت:', myTasks)

  return (
    <>

    </>
  )
}

export default App
