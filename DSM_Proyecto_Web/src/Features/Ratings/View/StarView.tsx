import { useEffect, useState } from "react";
import { useAuth } from "../../Authentication/Domain/AuthContext";
import { useRating } from "../Domain/RatingContext";
import ratingService from "../Service/ratingService";
import FirebaseRatingRepository from "../Infraestructure/FirebaseRatingRepository";

import "./StarView.css"



type RatingProps = {

    movieID: string;

}

export default function StarView({ movieID }: RatingProps) {

    const { user } = useAuth();
    const { ratingList, setRatingList } = useRating();

    const index = ratingList?.movieID.findIndex(id => id === movieID) ?? -1;
    const currentRating = index !== -1 ? Number(ratingList?.ratingValue[index]) : 0;

    const [hover, setHover] = useState(0);


    const handleRate = (value: number) => {

        if (!user || !ratingList) return;

        let updatedList;

        if (index !== -1) { // Actualizamos

            const newValues = [...ratingList.ratingValue];
            newValues[index] = String(value);

            updatedList = {
                ...ratingList,
                ratingValue: newValues
            };
        }
        else {  // Nuevo Rating

            updatedList = {
                ...ratingList,
                movieID: [...ratingList.movieID, movieID],
                ratingValue: [...ratingList.ratingValue, String(value)]
            };

        }

        setRatingList(updatedList);

        ratingService(FirebaseRatingRepository)
            .addRating(user.id, user.idToken, updatedList)
            .catch(err => {
                console.error(err);
                setRatingList(ratingList); // rollback
            });


    }

    const handleClear = () => {

        if (!user || !ratingList) return;

        const updatedList = {
            ...ratingList,
            movieID: ratingList.movieID.filter( (_,i) => i !== index),
            ratingValue: ratingList.ratingValue.filter( (_,i) => i !== index)
        }

        setRatingList(updatedList);

        ratingService(FirebaseRatingRepository)
            .remRating(user.id, user.idToken, updatedList)
            .catch(err => {
                console.error(err);
                setRatingList(ratingList); // rollback
            });
    }


    useEffect ( () => {

        if (!user) return;

        ratingService(FirebaseRatingRepository)
        .getByID(user.id, user.idToken)
        .then( (response) => {
            setRatingList(response)
        })
        .catch( (err) => {console.error(err)})
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