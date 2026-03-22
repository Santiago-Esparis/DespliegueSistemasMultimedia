type Props = {
  rating: number
}

export default function StarRating({ rating }: Props) {

  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
        >
          {rating >= star ? "⭐" : " ☆ "}
        </span>
      ))}
    </div>
  )
}