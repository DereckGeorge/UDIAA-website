import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import Footer from "../components/footer/footer";
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";
import "./style/Events.css";

const Events = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const upcomingEvents = [
    {
      title: "Internal Audit Workshop 2026",
      date: "April 15, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "UDSM Main Campus",
      description: "Join us for an intensive workshop covering the latest trends and best practices in internal auditing.",
      type: "Workshop"
    },
    {
      title: "Career Fair & Networking",
      date: "May 20, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "UDSM Auditorium",
      description: "Connect with leading companies and explore career opportunities in the audit profession.",
      type: "Networking"
    },
    {
      title: "Annual General Meeting",
      date: "June 10, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "UDSM Conference Hall",
      description: "Our annual meeting to discuss achievements, elect new leaders, and plan for the future.",
      type: "Meeting"
    },
  ];

  const pastEvents = [
    {
      title: "Inauguration Ceremony",
      date: "2023",
      description: "The official launch of UDIAA, bringing together students, faculty, and industry professionals."
    },
    {
      title: "IIA Tanzania Partnership Event",
      date: "2024",
      description: "Establishing our partnership with the Institute of Internal Auditors Tanzania."
    },
    {
      title: "Professional Development Seminar",
      date: "2024",
      description: "A series of seminars focused on skill development and career preparation."
    },
  ];

  return (
    <div className="events-page">
      <PageBanner 
        title="Events"
        subtitle="Discover our exciting events and opportunities to grow professionally"
        breadcrumbs={[{ label: "Events" }]}
      />

      {/* Upcoming Events */}
      <section className="events-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Upcoming</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Don't miss out on these exciting opportunities to learn and connect
            </p>
          </div>

          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-type">{event.type}</div>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <div className="event-detail">
                    <AiOutlineCalendar />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <AiOutlineClockCircle />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <AiOutlineEnvironment />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a href="https://forms.gle/aVhUy7PceTNygHZ5A" target="_blank" rel="noopener noreferrer" className="event-cta">
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events-section section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Past Events</span>
            <h2 className="section-title">Our Journey So Far</h2>
          </div>

          <div className="timeline">
            {pastEvents.map((event, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta-section section animate-on-scroll">
        <div className="container">
          <div className="events-cta-card">
            <h2>Want to Organize an Event?</h2>
            <p>
              Have an idea for a workshop, seminar, or networking event? 
              We'd love to hear from you and help make it happen.
            </p>
            <a href="/contacts" className="events-cta-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
