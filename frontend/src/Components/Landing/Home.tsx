const Home = () => {
    return (
        <section className='w-full h-fit text-center'>
            <h1 className='text-5xl mt-12 tracking-wide leading-14'>Your journey to chess<br />mastery starts here.</h1>
            <div className='flex gap-28 justify-center items-center mt-4'>
                <img src="../../src/assets/white_king.png" alt="White-King" className='h-96 drop-shadow-[0px_4px_10px_rgba(156,163,175,0.5)] rotate-12' />
                <img src="../../src/assets/chessboard.png" alt="chessboard" className='shadow-[0_4px_40px_rgba(156,163,175,0.5)] size-96' />
                <img src="../../src/assets/black_king.png" alt="Black-King" className='h-96 drop-shadow-[0px_4px_10px_rgba(156,163,175,0.5)] -rotate-12 -rotate-z-12' />
            </div>
            <p className='tracking-wide text-xl mt-2 text-[#00ffff]'><em>“Train smarter, not harder — elevate your game.”</em></p>
        </section>
    )
}

export default Home