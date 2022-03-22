import { useState, useEffect, useCallback } from 'react';
import { BiAlarm } from 'react-icons/bi'
import SearchFeild from './SearchFeild';
import AddAppointment from './AddAppointment';
import AppointmentInfo from './AppointmentInfo';

function App() {

    let [appointmentList, setAppointmentList] = useState([])
    let [query, setQuery] = useState('')
    let [sortBy, setSortBy] = useState('petName')
    let [orderBy, setOrderBy] = useState('asc')

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
    }).sort((a, b) => {
        let order = (orderBy === 'asc') ? 1 : -1;
        return (
            a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
                ? -1 * order : 1 * order
        )
    })

    return (
        <div className="">
            <section className="App-header">

                <h2 className='text-3xl font-bold py-8 text-center'><BiAlarm className='text-red-400 inline-block mx-1' />Your Appointment</h2>

                <AddAppointment
                    onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
                    lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
                />
                <SearchFeild query={query}
                    onQueryChange={myQuery => setQuery(myQuery)}
                    sortBy={sortBy}
                    onSortChange={mySort => setSortBy(mySort)}
                    orderBy={orderBy}
                    onOrderChange={myOrder => setOrderBy(myOrder)}
                />

            </section>

            <main>
                <ul className='divide-y divide-gray-200 m-3'>
                    {filteredAppointment.map(appointment => (
                        <AppointmentInfo key={appointment.id}
                            appointment={appointment}
                            onDeleteAppointment={appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))} />
                    ))}
                </ul>
            </main>

        </div>
    );
}

export default App;
