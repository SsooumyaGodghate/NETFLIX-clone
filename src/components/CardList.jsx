import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const GENRE_BY_ID = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const CardList = ({ title, category }) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTgzMDFlZGQ2MGEzN2Y3NDlmMzhlNGFmMTJjZDE3YSIsIm5iZiI6MTc0NTQxNjIyNS44NzY5OTk5LCJzdWIiOiI2ODA4ZjAyMTI3NmJmNjRlNDFhYjY0ZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NA_LMt6-MUBLAvxMRkZtBoUif4p9YQ6aYZo-lv4-PUE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>

      {data.length ? (
        <Slider loop={data.length > 6}>
          {data.map((item, index) => (
            <SwiperSlide key={index} className="max-w-72">
              <Link to={`/movie/${item.id}`} className="block">
                <div className="group relative origin-center transition-transform duration-300 hover:z-20 hover:scale-110">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={item.original_title ?? "Movie"}
                    className="h-44 w-full object-center object-cover"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-black/80 p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-medium leading-tight line-clamp-1">
                      {item.original_title}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/80">
                      {item.release_date ? (
                        <span>{item.release_date.slice(0, 4)}</span>
                      ) : null}

                      {typeof item.vote_average === "number" ? (
                        <span>{item.vote_average.toFixed(1)}</span>
                      ) : null}

                      {Array.isArray(item.genre_ids) && item.genre_ids.length ? (
                        <span className="line-clamp-1">
                          {item.genre_ids
                            .map((id) => GENRE_BY_ID[id])
                            .filter(Boolean)
                            .slice(0, 2)
                            .join(" • ")}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>

                <p className="text-center pt-2">{item.original_title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Slider>
      ) : null}
    </div>
  );
};

export default CardList;