export default function Home() {
  return (
    <main className="page">

      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="brand">DJ MATTÉO</h1>

        <nav className="menu">
          <a href="#sets">SETS</a>
          <a href="#agenda">AGENDA</a>
          <a href="#fotos">FOTOS</a>
          <a href="#contato">CONTATO</a>

          <button className="booking">BOOKING</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <img src="/logo.png" className="logoHero" alt="Logo DJ" />

        <h2>VAI DAR PRAIA!</h2>

        <p>DISCO • HOUSE • AFRO • BRASILIDADES</p>

        <button className="btnMain">OUVIR SETS</button>
      </section>

      {/* SETS */}
      <section id="sets" className="setsCircle">
        <div className="circle orange">▶</div>
        <div className="circle green">▶</div>
        <div className="circle yellow">▶</div>
      </section>

      {/* AGENDA + CONTATO */}
      <section className="infoGrid">

        <div id="agenda" className="agendaBox">
          <h3>AGENDA</h3>
          <ul>
            <li>05 JUL • BLUE JAZZ CLUB • SP</li>
            <li>12 JUL • SUNSET LOUNGE • RIO</li>
          </ul>

          <button className="btnTicket">
            Comprar ingressos
          </button>
        </div>

        <div id="contato" className="contactBox">
          <h3>CONTATO</h3>

          <form>
            <input placeholder="Nome" />
            <input placeholder="Email" />
            <textarea placeholder="Mensagem..." />

            <button>ENVIAR</button>
          </form>
        </div>
      </section>

      {/* GALERIA */}
      <section id="fotos" className="gallery">
        <img src="/foto1.jpg" />
        <img src="/foto2.jpg" />
        <img src="/foto3.jpg" />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 DJ Mattéo • Fortaleza, Brasil
      </footer>

    </main>
  );
}
