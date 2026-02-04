import React from 'react';

export default function Home() {
  const tourDates = [
    { date: '05 JUL', venue: 'Blue Jazz Club', city: 'São Paulo' },
    { date: '12 JUL', venue: 'Sunset Lounge', city: 'Rio de Janeiro' },
    { date: '18 JUL', venue: 'Praia Beach', city: 'Fortaleza' },
  ];

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">DJ MATTËO</div>
        <div className="menu">
          <a href="#sobre">SOBRE</a>
          <a href="#sets">SETS</a>
          <a href="#agenda">AGENDA</a>
          <a href="#fotos">FOTOS</a>
          <button className="booking">BOOKING</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src="/logo.png" alt="DJ Mattëo Logo" className="logoHero" />
        <h2>VAI DAR PRAIA!</h2>
        <p>DISCO MUSIC • BRASILIDADES • AFRO • NU FUNK • HOUSE MUSIC</p>
        <button className="btnMain">OUVIR ÚLTIMO SET</button>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" style={{ padding: '80px 70px' }}>
        <div className="infoGrid" style={{ alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="/dj.png" 
              alt="DJ Mattëo" 
              style={{ width: '100%', borderRadius: '25px', border: '8px solid var(--green)', boxShadow: '20px 20px 0 var(--yellow)' }} 
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', color: 'var(--blue)', marginBottom: '20px' }}>
              O GROOVE DO LITORAL
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Matteo é uma figura excêntrica na cena eletrônica de Fortaleza, trazendo uma abordagem pelutante e experimental dentro de cada set. Com uma curadoria que desafia padrões, ele conecta estilos, eras, e continentes, criando uma experiência sonora que é ao mesmo tempo nostálgica e inovadora.
Com influências que atravessam soul, disco, funk e boogie brasileiro, mesclando sons orgânicos do Oriente ao Ocidente e africano, trazendo um compilado de batidas eletrônicas, D`Matt constrói pontes entre ritmos e gerações. Trabalhando semprem em uma busca por conexões genuinamente Tropicais, onde o mar se torna uma casa, e cada acorde abre uma nova janela para o sentir.
Na cena de Fortaleza, D` Matt é mais do que um artista: é um guia que desafia a lógica e entrega ao público uma experiência que transcendental.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '15px' }}>
              Transformamos cada set numa jornada tropical inesquecível, onde o ritmo dita a alma.
            </p>
          </div>
        </div>
      </section>

      {/* SETS (CÍRCULOS COM IMAGEM E LINK) */}
      <section id="sets" className="setsCircle">
        <a 
          href="https://soundcloud.com/user-470418825/fogo-mar-um-tanto-quanto-tropicaliente-dmatt" 
          target="_blank" 
          className="circle orange" 
          style={{ backgroundImage: 'url("/set1.jpeg")' }}
        >
          <span style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '50%' }}>▶</span>
        </a>
        <a 
          href="https://soundcloud.com/user-470418825/sou-brasileiro" 
          target="_blank" 
          className="circle green" 
          style={{ backgroundImage: 'url("/set2.jpeg")' }}
        >
          <span style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '50%' }}>▶</span>
        </a>
        <a 
          href="https://soundcloud.com/user-470418825/tropical-system" 
          target="_blank" 
          className="circle yellow" 
          style={{ backgroundImage: 'url("/set3.jpeg")' }}
        >
          <span style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '50%' }}>▶</span>
        </a>
      </section>

      {/* INFO GRID (AGENDA E CONTACTO) */}
      <section className="infoGrid" style={{ marginBottom: '80px' }}>
        <div className="agendaBox" id="agenda">
          <h3 style={{ fontFamily: 'Fredoka', fontSize: '28px', marginBottom: '20px' }}>AGENDA</h3>
          <ul>
            {tourDates.map((gig, index) => (
              <li key={index}>
                <span style={{ color: 'var(--orange)', fontWeight: 'bold' }}>{gig.date}</span> — {gig.venue} ({gig.city})
              </li>
            ))}
          </ul>
        </div>

        <div className="contactBox" id="contato">
          <h3 style={{ fontFamily: 'Fredoka', fontSize: '28px', marginBottom: '20px' }}>BOOKING</h3>
          <form>
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="Detalhes do evento (Data, Local...)" rows={4}></textarea>
            <button type="button">SOLICITAR ORÇAMENTO</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div style={{ marginBottom: '20px', fontSize: '24px' }}>📸 🎵 🎧</div>
        <p>© 2024 DJ MATTËO • FORTALEZA, BRASIL</p>
      </footer>
    </div>
  );
}