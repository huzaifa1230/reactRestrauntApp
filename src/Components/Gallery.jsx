import  Navbar from "./Navbar"
import  Footer from "./Footer"
import GalleryImages from "./GalleryImages"

function Gallery() {
  return ( <>
    <Navbar />
    <div className="bg-gray-300  pt-2">
     <GalleryImages />
    </div>
    <Footer />
    </>
  )
}

export default Gallery