import { Rocket, Zap, Clock, Users } from 'lucide-react'

const Card: React.FC<{ description?: string; children: React.ReactNode }> = ({ description, children }) => (
  <div className="w-96 h-112 text-center flex flex-col justify-between relative">
    <div className="size-96 rounded-lg bg-gradient-to-tl from-cyan-200 via-cyan-500 to-cyan-950 p-0.5 relative 
    before:content-[''] before:rounded-lg before:absolute before:size-full before:inset-0 before:bg-gradient-to-tl 
    before:from-cyan-200 before:via-cyan-500 before:to-cyan-950 before:backdrop-blur-md"
    >
      <div className="size-95 bg-black/90 rounded-lg flex flex-col items-start gap-4 absolute z-10">
        {children}
      </div>
    </div>
    <p className='px-2 absolute bottom-0 text-start text-[#00ffff] italic text-lg'>{description}</p>
  </div>
)

const Games = () => {
  return (
    <section className="w-full h-fit grid grid-cols-3 gap-y-8 place-items-center">
      <Card description="Choose your pace – from lightning-fast to deeply strategic games.">
        <div className='my-auto w-full flex flex-col gap-5 px-4'>
          <div className='flex flex-col items-start w-full'>
            <div className='flex justify-between items-center gap-2.5'>
              <Rocket className='text-amber-500' />
              <p className="text-xl tracking-wide">Bullet</p>
            </div>
            <p className='text-lg text-start my-0.5'>
              <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(60 seconds. Pure speed.)</em>
            </p>
            <div className="w-full flex justify-between items-center my-1 text-lg">
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                1 min
              </div>
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                1|1
              </div>
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                1|2
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
            <div className='flex justify-between items-center gap-2.5'>
              <Zap className='text-yellow-400' />
              <p className="text-xl tracking-wide">Blitz</p>
              <p className='text-lg text-start my-0.5'><em>(Fast and tactical.)</em></p>
            </div>
            <div className="w-full flex justify-between items-center my-1 text-lg">
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                3 min
              </div>
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                3|2
              </div>
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                5 min
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
            <div className='flex justify-between items-center gap-2.5'>
              <Clock className='text-green-500' />
              <p className="text-xl tracking-wide">Rapid</p>
              <p className='text-lg text-start my-0.5'><em>(Slow, smart chess.)</em></p>
            </div>
            <div className="w-full flex justify-between items-center my-1 text-lg">
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                10 min
              </div>
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                15|10
              </div>
              <div className="bg-neutral-600 w-28 h-10 flex items-center justify-center rounded-md tracking-wide hover:bg-neutral-700">
                30 min
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card description='Play Anytime, Anywhere – Challenge Players Worldwide or Bots Offline.'>
        <div className='h-full w-full relative'>
          <img src="../../src/assets/online_offline_background.jpg" alt="online_offline_background" className=' absolute left-0 top-0 
          h-full w-full object-cover opacity-50 -z-10 rounded-lg'
          />
          <div className='h-full w-full flex flex-col gap-6 px-4 py-8'>
            <div className='flex gap-2.5 w-full'>
              <Users className='text-gray-400' />
              <p className='text-lg text-start'>Play with friends/people online</p>
            </div>
            <div className='flex justify-center gap-10 items-center w-full h-fit'>
              <div className='w-20 h-20 bg-transparent border-2 border-gray-400'>
                <img src="../../src/assets/person2.png" alt="person" />
              </div>
              <p className='text-3xl'>
                <span className='text-green-500'>V</span>
                <span className='text-red-500'><span className='text-5xl'>/</span>S</span>
              </p>
              <div className='w-20 h-20 bg-transparent border-2 border-gray-400'>
                <img src="../../src/assets/person.png" alt="person" />
              </div>
            </div>
            <div className='flex gap-2.5 w-full mt-4'>
              <Users className='text-gray-400' />
              <p className='text-lg text-start'>Play with bots when offline</p>
            </div>
            <div className='flex justify-center gap-10 items-center w-full h-fit'>
              <div className='w-20 h-20 bg-transparent border-2 border-gray-400'>
                <img src="../../src/assets/chessbot.png" alt="person" />
              </div>
              <p className='text-3xl'>
                <span className='text-green-500'>V</span>
                <span className='text-red-500'><span className='text-5xl'>/</span>S</span>
              </p>
              <div className='w-20 h-20 bg-transparent border-2 border-gray-400'>
                <img src="../../src/assets/person.png" alt="person" />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card description='Chess puzzles train you to spot tactics and find the best moves.'>
        <div className='h-full w-full relative'>
          <img src="../../src/assets/puzzle.png" alt="chess_puzzle" className='rounded-lg absolute left-0 top-0 h-full w-full 
          object-cover opacity-20 -z-10' />
          <div className='h-full w-full flex flex-col my-10 items-center'>
            <h1 className='text-3xl font-medium '>PLAY PUZZLES</h1>
            <ul className='flex flex-col items-start mt-10 list-disc text-2xl'>
              <li className='hover:text-cyan-500 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hover:drop-shadow-2xl hover:drop-shadow-cyan-800'>Daily Puzzles</li>
              <li className='hover:text-cyan-500 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hover:drop-shadow-2xl hover:drop-shadow-cyan-800'>Tactics Trainer</li>
              <li className='hover:text-cyan-500 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hover:drop-shadow-2xl hover:drop-shadow-cyan-800'>Progress Tracking</li>
            </ul>
            <p className='text-xl mx-10 absolute bottom-2'>Sharpen your tactics with daily challenges...</p>
          </div>
        </div>
      </Card>
      <Card>
        <></>
      </Card>
      <Card>
        <></>
      </Card>
      <Card>
        <></>
      </Card>
    </section>
  )
}

export default Games