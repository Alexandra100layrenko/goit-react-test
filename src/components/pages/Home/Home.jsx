import { useEffect } from "react"

const Home = () => {
    
    useEffect(() => {
        document.title = 'Best Coders | Home'
    }, []);

  return (
    <div>
      Home
    </div>
  )
}

export default Home