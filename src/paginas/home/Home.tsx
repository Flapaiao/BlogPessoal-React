import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';


function Home() {
    return (
        <>
            <div className="bg-purple-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>

                        </div>
                    </div>

                    <div className="pb-5 flex justify-center ">
                        <img src='https://img.freepik.com/fotos-gratis/bela-paisagem-montanhosa_23-2149063332.jpg?w=900&t=st=1708356631~exp=1708357231~hmac=d44f5a598e45b7663322600ee28062def5426b661e89f1a60d87e38e7f8a4c71' alt="" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;