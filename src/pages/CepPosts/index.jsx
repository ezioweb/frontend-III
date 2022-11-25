import { useEffect, useState } from "react";
import { postApiUrl } from "../../api";
import "./style.scss";

export function CepPost() {
  const [authToken, setAuthToken] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [post, setPost] = useState([]);

  // // Authorization
  // useEffect(()=>{
  //     const userData = {
  //         email: 'usertesteaulateste@mail.com',
  //         password: '1234'
  //     }
  //     const requestHeaders = {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //     }
  //     const requestConfig = {
  //         method: 'POST',
  //         headers: requestHeaders,
  //         body: JSON.stringify(userData)
  //     }

  //     fetch(`${apiUrl}/users/login`, requestConfig).then(
  //         response => {
  //             if(response.ok) {
  //                 response.json().then(
  //                     data => {
  //                         localStorage.setItem('authToken', data.jwt)
  //                         setAuthToken(data.jwt)
  //                     }
  //                 )
  //             } else {alert('senha errada')}
  //         }
  //     )

  // }, [])

  // Get tasks
  // useEffect(()=>{
  //     if(authToken !== ''){
  //         const requestHeaders = {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //             'Authorization': authToken
  //         }

  //         const requestConfig = {
  //             headers: requestHeaders,

  //         }
  //         fetch(`${postApiUrl}/tasks`, requestConfig).then(
  //             response => {
  //                 response.json().then(
  //                     data => setTasks(data)
  //                 )
  //             }
  //         )
  //     }

  // }, [authToken])
  useEffect(() => {
    fetch(`${postApiUrl}/posts`).then((response) =>
      response.json().then((data) => {
        setPost(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <div className="to-do-component">
      {post.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>          
        </div>
      ))}
    </div>
  );
}
