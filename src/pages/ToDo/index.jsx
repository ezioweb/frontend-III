import { useEffect, useState } from "react"
import { Task } from '../../components/Task'
import { apiUrl } from '../../api'
import './style.scss'

export function ToDo(){

    const [authToken, setAuthToken] = useState('')
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [taskNameError, setTaskNameError] = useState(false)

    // Authorization
    useEffect(()=>{
        const userData = {
            email: 'usertesteaulateste@mail.com',
            password: '1234'
        }
        const requestHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const requestConfig = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(userData)
        }


        fetch(`${apiUrl}/users/login`, requestConfig).then(
            response => {
                if(response.ok) {
                    response.json().then(
                        data => {
                            localStorage.setItem('authToken', data.jwt)
                            setAuthToken(data.jwt)
                        }
                    )
                } else {alert('senha errada')}
            }
        )

    }, [])

    // Get tasks
    useEffect(()=>{
        if(authToken !== ''){
            const requestHeaders = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
    
            const requestConfig = {
                headers: requestHeaders,
                
            }
            fetch(`${apiUrl}/tasks`, requestConfig).then(
                response => {
                    response.json().then(
                        data => setTasks(data)
                    )
                }
            )
        }

    }, [authToken])

        //Validar formulário
        useEffect(()=>{
            if(taskName.length > 4){
                setTaskNameError(false)
            }else{setTaskNameError(true)}
        },[taskName])

        function createTask(event){
            event.preventDefault()
            const requestHeaders = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
    
            const requestBody = JSON.stringify({
                description: taskName,
                completed: false
            })
    
            const requestConfig = {
                method: 'POST',
                headers: requestHeaders,
                body: requestBody
            }
            fetch(`${apiUrl}/tasks`, requestConfig).then(
                response => {
                    response.json().then(
                        data => {
                            setTasks([...tasks, data])
                        }
                    )
                }
            )    
        }
        //Deletar tarefas
        function deleteTaskFromList(id) {
            setTasks(    
                tasks.filter(
                    task => {    
                        if(task.id !== id) {    
                            return task    
                        }    
                    }
                )    
            )    
        }
        //Editar tarefas
        function updateTaskFromList(taskUpdated) {
            setTasks(
                tasks.map(
                    task => {    
                        if(task.id === taskUpdated.id) {    
                            return taskUpdated    
                        } else {
                            return task    
                        }  
                    }
                )
            )    
        }

    return(
        <div className='to-do-component'>
            
            <form className={taskNameError ? 'form-error' : ''} onSubmit={event => createTask(event)}>
            <h1>Cadastre uma tarefa</h1>
            <div className='form-controller'>
                <label htmlFor="">Tarefa</label>
                <input 
                type="text" 
                value={taskName}
                onChange={event=> setTaskName(event.target.value)}/>
                <small>Preencha a tarefa com mais de 4 caracteres</small>
            </div>
            <button disabled={taskNameError}>Cadastrar</button>
            </form>
            <main>
                <h2>Tarefas Criadas</h2>
                <section>
                    {
                        tasks.map(
                            task => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    onDeleteTask={id => deleteTaskFromList(id)}
                                    onUpdateTask={task => updateTaskFromList(task)}
                                />
                            )
                        )
                    }
                </section>
            </main>
        </div>        
    )
}
