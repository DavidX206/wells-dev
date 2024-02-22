import React from 'react';
import Navbar from './components/navbar';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Signup from './pages/signup/signup';


const Overview = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="container mx-auto mt-8 grid grid-cols-2 gap-4 sm:px-80">
        <div className="bg-gray-300 rounded overflow-hidden">
          <img src='grid1.jpg' alt="Image 1" className="w-full h-28 sm:h-40 object-cover"/>
        </div>

        <div className="bg-gray-300 rounded overflow-hidden">
          <img src="grid2.jpg" alt="Image 2" className="w-full h-28 sm:h-40 object-cover"/>
        </div>

        <div className="bg-gray-300 rounded overflow-hidden">
          <img src="grid3.jpg" alt="Image 3" className="w-full h-28 sm:h-40 object-cover" />
        </div>

        <div className="bg-gray-300 rounded overflow-hidden">
          <img src="grid4.jpg" alt="Image 4" className="w-full h-28 sm:h-40 object-cover" />
        </div>
      </div>

      <div className="text-center mt-8 px-8">
        <p className="text-xl font-black">DEEPEN YOUR CONNECTION WITH GOD</p>
      </div>
      <div className="text-center text-balance mt-2">
        <p className="text-base">Get access to our wide collection of daily devotionals and various other spiritual content</p>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search our collection..."
          className="border border-gray-300 px-4 py-2 rounded-md w-3/4 max-w-md"
        />
      </div>

      <Card className='w-3/4 mt-8 mx-auto text-center bg-gray-700'>
        <CardHeader>
          <CardTitle className='text-white text-xl'>Join Us Today!</CardTitle>
        </CardHeader>
        <CardContent className='text-white'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quibusdam dolore omnis.</p>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <button className="bg-lime-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </CardFooter>
      </Card>

      <section className='bg-gray-100 mt-16 flex flex-col items-center'>
        <Card className='text-center border-none bg-transparent rounded-none shadow-none'>
          <CardHeader className='pb-3'>
            <CardTitle className='text-xl tracking-widest'> STUDY</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quibusdam dolore omnis.</p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <img className='rounded-lg' src="https://picsum.photos/id/24/215/125" alt="" />
          </CardFooter>
        </Card>

        <Card className='text-center border-none bg-transparent rounded-none shadow-none'>
          <CardHeader className='pb-3'>
            <CardTitle className='text-xl tracking-widest'>INTERACT</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quibusdam dolore omnis.</p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <img className='rounded-lg' src="https://picsum.photos/id/203/215/125" alt="" />
          </CardFooter>
        </Card>

        <Card className='text-center border-none bg-transparent rounded-none shadow-none'>
          <CardHeader className='pb-3'>
            <CardTitle className='text-xl tracking-widest'>GROW</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quibusdam dolore omnis.</p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <img className='rounded-lg' src="https://picsum.photos/id/17/215/125" alt="" />
          </CardFooter>
        </Card>
      </section>


      <footer className='bg-gray-300 mt-24 p-8'>
        <div className="text-black text-center text-3xl font-semibold font-montserrat">
          Wells
        </div>
        <div className="flex justify-center mt-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <Facebook className="text-black text-2xl" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <Twitter className="text-black text-2xl" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <Instagram className="text-black text-2xl" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <YouTube className="text-black text-2xl" />
          </a>
        </div>
        <section className='flex justify-between mt-8'>
          <div>
            <h1 className='text-lg font-semibold'>Content</h1>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>Company</h2>
            <p>About</p>
            <p>Contact</p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Overview;
