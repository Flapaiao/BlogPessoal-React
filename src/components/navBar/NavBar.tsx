import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent

  return (
    <>
      <div className='w-full bg-purple-600 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2x1 font-bold uppercase'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:text-purple-900'>Home</Link>
            <Link to='/postagens' className='hover:text-purple-900'>Postagens</Link>
            <Link to='/temas' className='hover:text-purple-900'>Temas</Link>
            <Link to='/cadastroTema' className='hover:text-purple-900'>Cadastrar tema</Link>
            <Link to='/login' className='hover:text-purple-900'>Login</Link>
            <Link to='/perfil' className='hover:text-purple-900'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:text-purple-900'>Sair</Link>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;