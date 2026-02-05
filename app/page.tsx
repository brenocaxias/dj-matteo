"use client"; // Esta linha corrige o erro de "Event handlers"

import React from 'react';

export default function Home() {
  const tourDates = [
    { date: '05 JUL', venue: 'Blue Jazz Club', city: 'São Paulo' },
    { date: '12 JUL', venue: 'Sunset Lounge', city: 'Rio de Janeiro' },
    { date: '18 JUL', venue: 'Praia Beach', city: 'Fortaleza' },
  ];

  return (
    <div className="page" style={{ overflowX: 'hidden' }}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">DJ MATTËO</div>
        <div className="menu">
          <a href="#sobre">SOBRE</a>
          <a href="#underground">UNDERGROUND</a>
          <a href="#experiencia">EXPERIÊNCIA</a>
          <a href="#sets">SETS</a>
          <a href="#agenda">AGENDA</a>
          <button className="booking" onClick={() => window.open('https://wa.me/SEU_NUMERO', '_blank')}>BOOKING</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <img src="/logo.png" alt="DJ Mattëo Logo" className="logoHero" />
        <h2 style={{ fontSize: 'clamp(40px, 8vw, 70px)', lineHeight: '1' }}>VAI DAR PRAIA!</h2>
        <p style={{ margin: '20px 0', fontWeight: '500', letterSpacing: '2px' }}>
          DISCO MUSIC • BRASILIDADES • AFRO • NU FUNK • HOUSE MUSIC
        </p>
        <button className="btnMain" onClick={() => document.getElementById('sets')?.scrollIntoView({ behavior: 'smooth' })}>
          OUVIR ÚLTIMO SET
        </button>
      </section>

      {/* 1. O GROOVE DO LITORAL (Foto tricot/praia) */}
      <section id="sobre" style={{ padding: '80px 20px' }}>
        <div className="infoGrid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/dj.png" alt="DJ Mattëo Litoral" style={{ width: '100%', borderRadius: '20px', border: '8px solid var(--green)', boxShadow: '15px 15px 0 var(--yellow)' }} />
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', color: 'var(--blue)', marginBottom: '20px' }}>O GROOVE DO LITORAL</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Matteo traz uma abordagem pulsante e experimental dentro de cada set. Conectando estilos e continentes, cria uma experiência sonora nostálgica e inovadora onde o mar se torna casa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENA UNDERGROUND */}
      <section id="underground" style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div className="infoGrid" style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', color: 'var(--orange)', marginBottom: '20px' }}>PRESENÇA UNDERGROUND</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Explorando as texturas mais densas da música eletrônica, Mattëo se destaca pela curadoria que desafia padrões, unindo a força do underground com a alma tropical de Fortaleza.
            </p>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/foto-underground.jpg" alt="Cena Underground" style={{ width: '100%', borderRadius: '20px', border: '8px solid var(--blue)' }} />
          </div>
        </div>
      </section>

      {/* 3. EXPERIÊNCIA (FOTOS P&B) */}
      <section id="experiencia" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', marginBottom: '40px' }}>EXPERIÊNCIA & PLANO ABERTO</h3>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <img src="/evento-pb.jpg" alt="Experiência Evento" style={{ width: '100%', filter: 'grayscale(100%)', borderRadius: '15px', border: '1px solid #ddd' }} />
          <p style={{ marginTop: '20px', fontSize: '18px', fontStyle: 'italic' }}>
            "Relato sobre a conexão transcendental com o público e a energia do palco."
          </p>
        </div>
      </section>

      {/* 5. SETS (SoundCloud) */}
      <section id="sets" className="setsCircle" style={{ padding: '60px 20px' }}>
        <a href="LINK_SOUNDCLOUD_1" target="_blank" className="circle orange" style={{ backgroundImage: 'url("/set1.jpeg")' }}>▶</a>
        <a href="LINK_SOUNDCLOUD_2" target="_blank" className="circle green" style={{ backgroundImage: 'url("/set2.jpeg")' }}>▶</a>
        <a href="LINK_SOUNDCLOUD_3" target="_blank" className="circle yellow" style={{ backgroundImage: 'url("/set3.jpeg")' }}>▶</a>
      </section>

      {/* 6. AGENDA E CONTATOS */}
      <section id="agenda" className="infoGrid" style={{ padding: '80px 20px' }}>
        <div className="agendaBox">
          <h3 style={{ fontFamily: 'Fredoka', marginBottom: '20px' }}>AGENDA</h3>
          <ul>
            {tourDates.map((gig, index) => (
              <li key={index}><strong>{gig.date}</strong> — {gig.venue} ({gig.city})</li>
            ))}
          </ul>
        </div>
        <div className="contactBox" id="contato">
          <h3 style={{ fontFamily: 'Fredoka', marginBottom: '20px' }}>BOOKING & LINKS</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '30px' }}>
            <a href="https://instagram.com/SEU_USER" target="_blank" className="booking" style={{ textDecoration: 'none' }}>INSTAGRAM</a>
            <a href="https://wa.me/SEU_NUMERO" target="_blank" className="booking" style={{ textDecoration: 'none', background: 'var(--green)' }}>WHATSAPP</a>
            <a href="LINK_MAPA" target="_blank" className="booking" style={{ textDecoration: 'none', background: 'var(--blue)' }}>MAPA CULTURAL</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 DJ MATTËO • FORTALEZA, BRASIL</p>
      </footer>
    </div>
  );
}