import './App.css'
import LayoutPelicula from './Shared/Layout/LayoutPelicula';

function App() {

  return (
    <>
      <LayoutPelicula
      titulo="Kizoku Tensei"
      imagenUrl="https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540"
      generos={["Anime", "Acción"]}
      rating={4.1}
      votos={249}
      sinopsis="Noah, el niño más fuerte del mundo..."
    />
    </>
    
  )
}

export default App
