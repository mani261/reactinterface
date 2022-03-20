import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { BiArchive } from 'react-icons/bi'
import SearchFeild from './components/SearchFeild';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';

function App() {

  let [appointmentList, setAppointmentList] = useState([])
  let [query, setQuery] = useState('')

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointmentList(data))
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const filteredAppointment = appointmentList.filter(item => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
  })

  return (
    <div className="App p-5">
      <header className="App-header">

        <h1 className='text-3xl font-bold py-8 text-center'><BiArchive className='text-red-400 inline-block mx-1' />Your Appointment</h1>

        <AddAppointment />
        <SearchFeild query={query} onQueryChange={myQuery => setQuery(myQuery)} />

      </header>

      <ul className='divide-y divide-gray-200 m-3'>
        {filteredAppointment.map(appointment => (
          <AppointmentInfo key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))} />
        ))}
      </ul>

    </div>
  );
}

export default App;
