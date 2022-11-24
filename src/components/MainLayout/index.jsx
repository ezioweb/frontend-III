import { Link, Outlet } from 'react-router-dom'
import './style.scss'

export function MainLayout(){
    const items = [{ id: 1, name: 'Reportagem 1' }, { id: 2, name: 'Reportagem 2' }] 
    return(
        <div className="main-layout-component">
            <header className='main-layout-component-header'>
                <h1>Projetos Frontend III</h1>
                <nav>                    
                <ul>
                <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="segunda-aula">2ª Aula</Link>
                    </li>
                    <li>
                        <Link to="terceira-aula">3ª Aula</Link>
                    </li>
                    <li>
                        <Link to="quarta-aula">4ª Aula</Link>
                    </li>
                    <li>
                        <Link to="quinta-aula">5ª Aula</Link>
                    </li>
                    <li>
                        <Link to="setima-aula">7ª Aula</Link>
                    </li>
                    <li>
                        <Link to="oitava-aula">8ª Aula</Link>
                    </li>
                    <li>
                        <Link to="decima-aula">10ª Aula</Link>
                    </li>
                    <li>
                        <Link to="decima-quarta-aula">14ª Aula</Link>
                    </li>
                    <li>
                        <Link to="decima-quinta-aula">15ª Aula</Link>
                    </li>
                </ul>                
                </nav>
        {/* {

            items.map(
                item => {
                    return (
                        <>
                            <Link to={`decima-quinta-aula/${item.id}`}>{item.name}</Link>
                            <br />
                        </>
                    )

                }

            )

        } */}

            </header>
            <main className='main-layout-component-main'>
                
                <Outlet/>
                
            </main>
        </div>
    )
}