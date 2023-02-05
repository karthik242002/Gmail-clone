import Header from '@/pages/Components/Header'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div>
        <Header />
        <div>

          <img className="h-30 mr-5 ml-5 mt-10  p-2 " src="https://pbs.twimg.com/media/FoMOsyWaEAMcahJ?format=jpg&name=medium" />
          <div className=""></div>
        </div>



      </div>

    </main>
  )
}
