'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Flight, getAllFlights, getFlights, getMetadata } from './lib/data'
import { SelectInput } from './ui/SelectInput'
import useInput from './hooks/useInputs'
import { useEffect, useState } from 'react'

export default function Home() {
  const metadata = getMetadata()
  const [departureCity, setDepartureCity] = useInput('')
  const [arrivalCity, setArrivalCity] = useInput('')
  const [departureTime, setDepartureTime] = useInput('')
  const [arrivalTime, setArrivalTime] = useInput('')
  const [flights, setFlights] = useState<Flight[] | []>([])

  useEffect(() => {
    const data = getAllFlights()
    setFlights(data)
  }, [])

  useEffect(() => {
    if (departureCity || arrivalCity || departureTime || arrivalTime) {
      const filterObject = {
        departure_city: departureCity,
        arrival_city: arrivalCity,
        departure_time: departureTime,
        arrival_time: arrivalTime
      }

      const filtered = getFlights(filterObject)
      setFlights(filtered)
    } else {
      const data = getAllFlights()
      setFlights(data)
    }
  }, [arrivalCity, arrivalTime, departureCity, departureTime])

  return (
    <>
      <nav className='bg-background py-6 px-16 flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/Logo.svg'
            alt='logo'
            width={147}
            height={52}
            className='h-12'
          />
        </Link>
        <div className='flex gap-6 text-xl'>
          <Link
            href='/'
            className='text-white font-extralight hover:brightness-75 transition'
          >
            Home
          </Link>
          <Link
            href='/'
            className='text-white font-extralight hover:brightness-75 transition'
          >
            Tickets
          </Link>
          <Link
            href='/'
            className='text-white font-extralight hover:brightness-75 transition'
          >
            About Us
          </Link>
          <Link
            href='/'
            className='text-white font-extralight hover:brightness-75 transition'
          >
            Login
          </Link>
        </div>
      </nav>
      <main className='px-[164px] flex flex-col items-center justify-center gap-[64px] my-[64px]'>
        <div className='flex'>
          <h1 className='text-6xl font-semibold text-gray-700'>Where to go?</h1>
          <Image src='/map.svg' width={64} height={64} alt='map logo' />
        </div>
        <form className='flex gap-6'>
          <SelectInput
            value={departureCity}
            onHandleChange={setDepartureCity}
            metadata={metadata.departure_cities}
            name='Departure'
          />
          <SelectInput
            value={arrivalCity}
            onHandleChange={setArrivalCity}
            metadata={metadata.arrival_cities}
            name='Arrival City'
          />
          <SelectInput
            value={departureTime}
            onHandleChange={setDepartureTime}
            metadata={metadata.departure_times}
            name='Departure Time'
          />
          <SelectInput
            value={arrivalTime}
            onHandleChange={setArrivalTime}
            metadata={metadata.arrival_times}
            name='Arrival Time'
          />
        </form>
        <div className='flex flex-wrap justify-center gap-6'>
          {flights.length == 0 && <p>Flights not found</p>}
          {flights.map((flight) => {
            return (
              <div
                key={flight.id}
                className='bg-background rounded-2xl overflow-hidden border-2 border-background min-w-80'
              >
                <div className='bg-background text-white p-2 text text-lg flex gap-1'>
                  <h2>{flight.departure_city}</h2>
                  <h2>{`->`}</h2>
                  <h2>{flight.arrival_city}</h2>
                </div>
                <div className='bg-white p-3 flex flex-col gap-3'>
                  <div className='font-semibold text-gray-700 text-lg flex gap-2 items-center'>
                    <p>{flight.departure_time}</p>
                    <p>{`-`}</p>
                    <p>{flight.arrival_time}</p>
                    <p className='text-xs'>1 Hour</p>
                  </div>
                  <p className='font-bold text-2xl'>{flight.price}</p>
                  <div className='border-dashed border border-gray-400'></div>
                  <div className='flex items-center justify-end gap-1'>
                    <div className='h-6 w-6 rounded-full bg-green-500'></div>
                    <p>{flight.airline}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}