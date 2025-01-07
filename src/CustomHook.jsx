import axios from "axios"
import { useEffect, useState } from "react"



function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setloading] = useState(true);
    
            

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                
                    setTodos(res.data);
                    setloading(false);
                })

        const value = setInterval(() => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                    
                    setTodos(res.data);
                    setloading(false);
                })
                console.log(n);
        }, n*1000)

        return () =>clearInterval(value);

    }, [n])

    return {
        todos ,
        loading
    };

}

function CustomHook() {
    const {todos , loading} = useTodos(10);

    return <div>
        {loading ? <div>loading....</div> : todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </div>

}

function Track({ todo , key }) {
    return <div>
        
        <div> {todo.id} </div> <div> <u> {todo.title}</u> </div>
        <div> {todo.body}</div><br />
        <div>--------------------------------------------------------------------</div>
        <br />
    </div>
}

export default CustomHook