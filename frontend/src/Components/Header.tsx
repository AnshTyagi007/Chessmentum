import Button from './Utils/Button'

const NAVBAR_ITEMS = ['Home', 'Games', 'Community', 'About', 'Theme'];

const Header = () => {
    return (
        <header className='w-full bg-black/90 h-24 text-2xl fixed flex items-center justify-between pl-40 border-b border-gray-500
            pr-10 z-50'
        >
            <img src="../../src/assets/chessmentum_logo.png" alt="Chessmentum-logo" className='w-20 h-16' />
            <ul className='flex items-center justify-center gap-10 text-lg'>
                {
                    NAVBAR_ITEMS.map((itemName: string, index: number) => (
                        <li key={index} className='hover:cursor-pointer hover:text-[#00ffff] transition-all duration-500 
                            ease-out hover:scale-125 text-gray-500 relative before:absolute before:left-1/2 hover:before:left-0 
                            before:-bottom-1 before:bg-[#00ffff] hover:before:h-[1px] hover:translate-y-0.5 before:w-0 
                            hover:before:w-full hover:before:scale-x-125 before:transition-all before:duration-500 before:ease-out 
                            active:text-[#00ffff] active:translate-y-0.5 active:scale-125 active:before:-bottom-1 
                            active:before:w-full active:before:scale-x-125'
                        > 
                            {itemName}
                        </li>
                    ))
                }
            </ul>
            <div className='flex items-center gap-10'>
                <Button content={'log in'} />
                <Button content={'sign up'} />
            </div>
        </header>
    )
}

export default Header