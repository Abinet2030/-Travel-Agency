import BookingForm from '../components/BookingForm'

export default function Booking() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl">Booking</h1>
        <p className="mt-2 muted">Choose your travel dates, number of travelers, and contact details.</p>
        <div className="mt-6">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
