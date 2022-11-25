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
                    <li>
                        <Link to="cep-post"><nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                          <div className="container-fluid">
                            <a className="navbar-brand" href="#">Bottom navbar</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                              <ul className="navbar-nav">
                                <li className="nav-item active">
                                  <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                                <li className="nav-item dropup">
                                  <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-expanded="false">Dropup</a>
                                  <ul className="dropdown-menu" aria-labelledby="dropdown10">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav></Link>
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
            <main classNameName='main-layout-component-main'>
                
                <Outlet/>
                
            </main>
        </div>
    )
}