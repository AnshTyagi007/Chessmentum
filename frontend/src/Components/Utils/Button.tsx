const Button = ({ content }: { content:string }) => {
    return (
        <button className="text-base text-[#00ffff] tracking-wider border-2 border-[#00ffff] cursor-pointer uppercase 
            bg-transparent rounded-[0.625em] py-1.5 px-4 hover:shadow-[0_0_40px_6px_rgba(0,255,255,0.5)] hover:text-white 
            hover:bg-[rgba(0,255,255,0.1)] transition-all ease-in-out duration-400 active:transform active:scale-95 
            active:transition-all active:duration-300 active:ease-in active:shadow-none group relative before:absolute before:left-0
            before:top-[7%] before:w-[0px] before:shadow-[0_2px_40px_10px_#00ffff] before:h-[86%] before:bg-[gradient-to-b 
            from-transparent via-cyan-300 to-transparent] before:opacity-0 z-0 before:transition-all before:duration-500 
            before:ease-in-out hover:before:animate-[neon-shine_0.6s_linear_forwards] hover:before:opacity-100 hover:-translate-y-0.5"
        >
            {content}
        </button>
    )
}

export default Button