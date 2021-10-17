import React from 'react'

export const hotellist = () => {
    const hotelArrey = [
        {
            name:"Hotel Plaza Athénée - Dorchester Collection",
            img:"https://www.luxurylink.com/images/sho_50ff0cf6/11640_01-945/Hotel%2BExterior.jpg",
            desc:"You stay in the heart of Paris, this hotel is one of guests part of Paris. The elegant hotel have many facilities, one of them is the Dior spa.",
            price:"2000",
        },
        {
            name:"Cheval Blanca & Dior Spa Cheval Blanc Paris",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3b/99/e3/la-samaritaine-building.jpg?w=1200&h=-1&s=1",
            desc:"The Elegant hotel Cheval Blanca & Dior Spa Cheval Blanc Paris in Paris in Île-de-France. Less then 500m from Louvre Museum. ",
            price:"1500",
        },
        {
            name:"Maison Abar Hotels Le Pont-Neuf",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/45/34/a0/exterior.jpg?w=900&h=-1&s=1",
            desc:"A warm, welcoming House, full of delicate and kind attentions, where you come to dine with friends, make business appointments, have a drink or rest. ",
            price:"1000",
        },
        {
            name:"",
            img:"",
            desc:"",
            price:"",
        },
    ]
    return(
        hotelArrey.map(hotel => (
            <div className="hotel">
                <div>
                    <img className="hotel-image"scr={hotel.image}/>
                    <h3 className="hotel-name">{hotel.name}</h3>
                    <h4 className="hotel-description">{hotel.desc}</h4>
                    <div className="hotel-price">{hotel.price}</div>
                </div>

                </div>
        ))
    )
}
