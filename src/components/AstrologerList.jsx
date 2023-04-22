import React from 'react'
import AstrologerCard from './AstrologerCard'
import "../styles/astrologerCard.scss"
import P1 from "../assets/P1.jpg"
import P2 from "../assets/P2.jpg"
import P3 from "../assets/P3.jpg"
import P4 from "../assets/P4.jpg"
import P5 from "../assets/P5.jpg"
import P6 from "../assets/P6.jpg"
import P7 from "../assets/P7.jpg"
import P8 from "../assets/P8.jpg"
import P9 from "../assets/P9.jpg"
import P10 from "../assets/P10.jpg"
const AstrologerList = () => {
    const astrologers = [
        {
          id: 1,
          name: 'Astrologer 1',
          image: P1,
          description: "Skills : Vedic Astrology, Kundali",
          specialty: "Love, Business",
          rating:"4"
        },
        {
          id: 2,
          name: 'Astrologer 2',
          image: P2,
          description: "Skills : Vedic Astrology, Kundali",
          specialty: "Love, Business",
          rating:"4"
        },
        {
          id: 3,
          name: 'Astrologer 3',
          image: P3,
          description: "Skills : Vedic Astrology, Kundali",
          specialty: "Love, Business",
          rating:"4"
        },
        {
            id: 4,
            name: 'Astrologer 3',
            image: P4,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
            rating:"4"
          },
          {
            id: 5,
            name: 'Astrologer 3',
            image: P5,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
            rating:"4"
          },
          {
            id: 6,
            name: 'Astrologer 3',
            image: P6,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
            rating:"4"
          },
          {
            id: 7,
            name: 'Astrologer 3',
            image: P7,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
            rating:"4"
          },
          {
            id: 8,
            name: 'Astrologer 3',
            image: P8,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
          rating:"4"
          },
          {
            id: 9,
            name: 'Astrologer 3',
            image: P9,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
          rating:"4"
          },
          {
            id: 10,
            name: 'Astrologer 3',
            image: P10,
            description: "Skills : Vedic Astrology, Kundali",
            specialty: "Love, Business",
          rating:"4"
          }
    ]
  return (
    <div className="astrologer-list">
      {astrologers.map(astrologer => (
        <AstrologerCard
          key={astrologer.id}
          name={astrologer.name}
          image={astrologer.image}
          description={astrologer.description}
          specialty={astrologer.specialty}
          rating={astrologer.rating}
        />
      ))}
    </div>
  )
}

export default AstrologerList