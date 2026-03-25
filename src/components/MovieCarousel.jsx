import { Swiper, SwiperSlide } from "swiper/react"
// módulo de navegación para habilitar flechas en el carrusel
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"

function MovieCarousel({ movies, onVerDetalle }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={20}
      style={{ padding: "20px 0" }}
    >
      {movies.map(movie => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            title={movie.title}
            image={movie.image}
            year={movie.year}
            genre={movie.genre}
            duration={movie.duration}
            onVerDetalle={() => onVerDetalle?.(movie)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieCarousel