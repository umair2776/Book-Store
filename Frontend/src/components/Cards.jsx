import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className='mt-4 my-3 p-2'>  
          <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure className="h-48">
        <img
          src={item.images}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">${item.price}</div>
          <div className="cursor-pointer px-2  rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Cards;
