import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='max-w-screen min-h-screen flex flex-col'>
        <Outlet />
    </div>
  )
}

export default AuthLayout