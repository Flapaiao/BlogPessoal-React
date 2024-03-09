import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';

interface CardPostagemProps {
    post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
                <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
            </div>
            <div className='p-4'>
                <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                <p>{post.tema?.descricao}</p>
                <p>Tema: {post.tema?.descricao}</p>
                <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/*Card 1*/}
                <div className="w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain"></div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{post.titulo}</div>
                            <p className="text-gray-700 text-base">{post.tema?.descricao}</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src={post.usuario?.foto} alt="Avatar of Writer" />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{post.usuario?.nome}</p>
                                <p className="text-gray-600">{post.data}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardPostagem;
