// Course.jsx
import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
// import list from "../../public/list.json";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

const Course = () => {
  const [book, setBooks] = useState([])
  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/book')
    setBooks(response.data.book)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have you {" "}
          <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor et totam. Tempore amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas anii! Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor et totam. Tempore amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas anii!
        </p>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'><Link to={"/"}>Back</Link></button>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
    <div className='mt-10'>
        <Footer/>
    </div>
    </>
  );
}

export default Course;
