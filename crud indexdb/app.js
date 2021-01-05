const indexdDB= window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if(indexdDB && form){
    let db
    const request = indexdDB.open('taskList',1)

    request.onsuccess = () =>{
        db = request.result
        console.log('OPEN',db)
        readData()
    }

    request.onupgradeneeded = ()=>{
        db = request.result
        console.log('Create',db)

        const objectStore   = db.createObjectStore('tasks',{
            autoIncrement: true})
    }

    request.onerror = (error)=>{
            console.log('Error',error);
    } 
    //añadir informacion
    const AddData = (data) => {
        const transaction = db.transaction(['tasks'],'readwrite')

        const objectStore = transaction.objectStore('tasks')

        const request = objectStore.add(data)
        readData()
    }
    //leer informacion
    const readData = () => {
        const transaction = db.transaction(['tasks'],'readonly')

        const objectStore = transaction.objectStore('tasks')

        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()
        request.onsuccess = (e)=>{
            const cursor =e.target.result;
            if(cursor){
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)
               
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                const taskUpdate = document.createElement('BUTTON')
                taskUpdate.dataset.type = 'update'
                taskUpdate.dataset.key = cursor.key
                taskUpdate.textContent = 'Update'
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'Delete'
                fragment.appendChild(taskDelete)
                cursor.continue()
            }
            else{
                tasks.textContent=''
                 tasks.appendChild(fragment)
            }
        }
    }
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const data = {
            taskTitle:e.target.task.value,
            taskPriority: e.target.priority.value
        }
        console.log(data)
        AddData(data)
    })

}