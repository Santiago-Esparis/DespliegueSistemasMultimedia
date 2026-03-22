import { useEffect, useState } from "react";
import { useAuth } from "../../Authentication/Domain/AuthContext";
import { useRating } from "../Domain/RatingContext";
import ratingService from "../Service/ratingService";
import FirebaseRatingRepository from "../Infraestructure/FirebaseRatingRepository";

import "./StarView.css"
import { useMovies } from "../../Movie/Domain/MovieContext";
import movieService from "../../Movie/Service/movieService";
import FirebaseMovieRepository from "../../Movie/Infraestructure/FirebaseMovieRepository";



type RatingProps = {

    movieID: string;

}

export default function StarView({ movieID }: RatingProps) {

    const { user } = useAuth();
    const { movies, setMovies } = useMovies();
    const { ratingList, setRatingList } = useRating();

    const index = ratingList?.movieID.findIndex(id => id === movieID) ?? -1;
    const currentRating = index !== -1 ? Number(ratingList?.ratingValue[index]) : 0;

    const [hover, setHover] = useState(0);


    const handleRate = (value: number) => {

        if (!user || !ratingList) return;

        const baseList = ratingList ?? {
            id: user.id,
            movieID: [],
            ratingValue: []
        }

        const index = baseList.movieID.findIndex(id => id === movieID);

        let updatedList;

        if (index !== -1) { // Actualizamos

            const newValues = [...baseList.ratingValue];
            newValues[index] = String(value);

            updatedList = {
                ...baseList,
                ratingValue: newValues
            };
        }
        else {  // Nuevo Rating

            updatedList = {
                ...baseList,
                movieID: [...baseList.movieID, movieID],
                ratingValue: [...baseList.ratingValue, String(value)]
            };

        }

        const movie = movies.find(m => m.id === movieID);
        if (!movie) return;

        const oldValue = index !== -1 ? Number(baseList.ratingValue[index]) : null;

        let newVotes = movie.ratingVotes;
        let newRating = movie.rating;

        if (oldValue === null) {
            // nuevo voto
            newRating = ((movie.rating * movie.ratingVotes) + value) / (movie.ratingVotes + 1);
            newVotes = movie.ratingVotes + 1;
        }
        else {
            // actualizar voto
            newRating = ((movie.rating * movie.ratingVotes) - oldValue + value) / (movie.ratingVotes);
        }

        newRating = Number(newRating.toFixed(2))

        const updatedMovies = movies.map(m =>
            m.id === movieID ? { ...m, rating: newRating, ratingVotes: newVotes } : m
        )

        const updatedMovie = updatedMovies.find( m => m.id === movieID);
        if (!updatedMovie) return;

        setRatingList(updatedList);
        setMovies(updatedMovies);

        ratingService(FirebaseRatingRepository)
            .addRating(user.id, user.idToken, updatedList)
            .catch(err => {
                console.error(err);
                setRatingList(ratingList); // rollback
            });

        movieService(FirebaseMovieRepository)
            .updateMovie(user.idToken, updatedMovie)
            .catch((err) => { console.error(err) });


    }

    const handleClear = () => {

        if (!user || !ratingList) return;

        const movie = movies.find(m => m.id === movieID);
        if (!movie) return;

        if (index === -1) return;
        const oldValue = Number(ratingList.ratingValue[index]);

        let newVotes = movie.ratingVotes;
        let newRating = movie.rating;

        if (movie.ratingVotes <= 1) {
            newRating = 0;
            newVotes = 0;
        }
        else {
            newRating = ((movie.rating * movie.ratingVotes) - oldValue) / (movie.ratingVotes - 1);
            newVotes = movie.ratingVotes - 1;
        }

        newRating = Number(newRating.toFixed(2))


        const updatedList = {
            ...ratingList,
            movieID: ratingList.movieID.filter((_, i) => i !== index),
            ratingValue: ratingList.ratingValue.filter((_, i) => i !== index)
        }


        const updatedMovies = movies.map(m =>
            m.id === movieID ? { ...m, rating: newRating, ratingVotes: newVotes } : m
        )

        const updatedMovie = updatedMovies.find( m => m.id === movieID);
        if (!updatedMovie) return;

        setRatingList(updatedList);
        setMovies(updatedMovies);


        ratingService(FirebaseRatingRepository)
            .remRating(user.id, user.idToken, updatedList)
            .catch(err => {
                console.error(err);
                setRatingList(ratingList); // rollback
            });


        movieService(FirebaseMovieRepository)
            .updateMovie(user.idToken, updatedMovie)
            .catch((err) => { console.error(err) });

    }


    useEffect(() => {

        if (!user) return;

        ratingService(FirebaseRatingRepository)
            .getByID(user.id, user.idToken)
            .then((response) => {
                setRatingList(response)
            })
            .catch((err) => { console.error(err) })
    }, [user, user?.idToken, setRatingList]);


    return (
        <div className="starview-container">

            <div className="starview-stars">
                {[1, 2, 3, 4, 5].map(star => (
                    <span
                        key={star}
                        onClick={() => handleRate(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        {(hover || currentRating) >= star ? "⭐" : "☆"}
                    </span>
                ))}
            </div>

            <button
                className="starview-clear"
                onClick={handleClear}
                disabled={index === -1}
            >
                Limpiar voto
            </button>

        </div>
    );

}