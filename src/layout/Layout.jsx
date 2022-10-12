import { Outlet, Link, useLocation } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <nav className='flex space-x-4 bg-white shadow-md '>
                <Link className='font-bold p-5 text-bgBlack hover:text-bgPrimary' to="/">Home</Link>
                <Link className='font-bold p-5 text-bgBlack hover:text-bgPrimary' to="/addUser">Register</Link>
                <Link className='font-bold p-5 text-bgBlack hover:text-bgPrimary' to="/addUser">List</Link>
                <Link className='font-bold p-5 text-bgBlack hover:text-bgPrimary' to="/addUser">Group</Link>
            </nav>

            <div className="md:container md:mx-auto"><Outlet/></div>
        </>
    )
}
