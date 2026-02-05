"use client";

import React from 'react';
// Importando os ícones para as suas redes sociais
import { Github, Instagram, MessageCircle } from 'lucide-react';

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
          <button className="booking" onClick={() => window.open('https://wa.me/5585989158867', '_blank')}>BOOKING</button>
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

      {/* 1. O GROOVE DO LITORAL */}
      <section id="sobre" style={{ padding: '80px 20px' }}>
        <div className="infoGrid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/praia.jpeg" alt="DJ Mattëo Litoral" style={{ width: '100%', borderRadius: '20px', border: '8px solid var(--green)', boxShadow: '15px 15px 0 var(--yellow)' }} />
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'justify' }}>
            <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', color: 'var(--blue)', marginBottom: '20px' }}>O GROOVE DO LITORAL</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Matteo é uma figura excêntrica na cena eletrônica de Fortaleza, trazendo uma abordagem pulsante e experimental dentro de cada set. Com uma curadoria que desafia padrões, ele conecta estilos, eras, e continentes, criando uma experiência sonora que é ao mesmo tempo nostálgica e inovadora.
              Com influências que atravessam soul, disco, funk e boogie brasileiro, mesclando sons orgânicos do Oriente ao Ocidente e africano, trazendo um compilado de batidas eletrônicas, MATTEO constrói pontes entre ritmos e gerações. Trabalhando sempre em uma busca por conexões genuinamente Tropicais, onde o mar se torna uma casa, e cada acorde abre uma nova janela para o sentir.
              Na cena musical de Fortaleza, Matteo é mais do que um artista: é um guia que desafia a lógica e entrega ao público uma experiência que mais que transcendental.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENA UNDERGROUND */}
      <section id="underground" style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div className="infoGrid" style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 400px', textAlign: 'justify' }}>
            <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', color: 'var(--orange)', marginBottom: '20px' }}>PRESENÇA UNDERGROUND</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
              A trajetória de DJ Matteo dentro da cena underground de Fortaleza foi lapidada a partir de circulação, escuta e troca. Sua presença em diferentes coletivos e movimentos independentes moldou não apenas sua estética sonora, mas também sua compreensão da pista como espaço cultural e comunitário.
              Transitanto por núcleos como Festa Lá em Cima, MIRAGE, MASTERPLAN, MORMAÇO, PACIFIC DISCS, MOLESKA GROOVY, VAI TER, além das conexões com Dança e Bronze e Relance, dentre outros coletivos... Matteo absorveu referências que atravessam o disco, o boogie, a house e as sonoridades afro-tropicais, Funky, Nu-funk e batidas organicas, esses ambientes funcionaram como laboratórios vivos, espaços de experimentação, convivência e formação artística.
              Essa vivência underground fortaleceu uma curadoria guiada pelo groove, pela pesquisa e pela liberdade criativa. Mais do que circulação em festas e coletivos, trata-se de um percurso que consolidou sua identidade como artista comprometido com a construção de pistas autênticas, onde memória, inovação e pertencimento coexistem.
            </p>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/dj.png" alt="Cena Underground" style={{ width: '100%', borderRadius: '20px', border: '8px solid var(--blue)' }} />
          </div>
        </div>
      </section>

      {/* 3. EXPERIÊNCIA */}
      <section id="experiencia" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'Fredoka', fontSize: '35px', marginBottom: '40px' }}>COLETIVO & EXPERIÊNCIAS</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <img src="/pb.jpeg" alt="Experiência 1" style={{ flex: '1 1 300px', maxWidth: '380px', filter: 'grayscale(100%)', borderRadius: '15px', border: '1px solid #ddd', objectFit: 'cover' }} />
          <img src="/pb1.jpeg" alt="Experiência 2" style={{ flex: '1 1 300px', maxWidth: '380px', filter: 'grayscale(100%)', borderRadius: '15px', border: '1px solid #ddd', objectFit: 'cover' }} />
          <img src="/pb3.jpeg" alt="Experiência 3" style={{ flex: '1 1 300px', maxWidth: '380px', filter: 'grayscale(100%)', borderRadius: '15px', border: '1px solid #ddd', objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: '850px', margin: '40px auto 0', textAlign: 'justify' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', fontStyle: 'italic' }}>
            "A conexão transcendental com o público em grandes planos abertos é onde a música se torna um fio condutor de experiências coletivas únicas. Nestes momentos, a energia do palco funde-se com a vibração da pista, criando uma atmosfera onde cada batida é sentida como um batimento cardíaco partilhado."
          </p>
        </div>
      </section>

      {/* 4. METODOLOGIA E CURADORIA */}
      <section id="curadoria" style={{ padding: '80px 20px', backgroundColor: 'var(--blue)', color: '#fff' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Fredoka', fontSize: '30px', marginBottom: '30px' }}>METODOLOGIA & CURADORIA</h3>
          <p style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '1.8' }}>
            Minha curadoria musical é um processo meticuloso de garimpo. Não se trata apenas de selecionar faixas, mas de construir uma narrativa que respeite o ambiente e o público. Trabalhamos com a fusão de batidas orgânicas e eletrônicas, onde cada transição é planejada para manter a vibração solar.
          </p>
        </div>
      </section>

      {/* 5. SETS */}
      <section id="sets" className="setsCircle" style={{ padding: '60px 20px' }}>
        <a href="https://soundcloud.com/user-470418825/fogo-mar-um-tanto-quanto-tropicaliente-dmatt" target="_blank" className="circle orange" style={{ backgroundImage: 'url("/set1.jpeg")' }}>▶</a>
        <a href="https://soundcloud.com/user-470418825/sou-brasileiro " target="_blank" className="circle green" style={{ backgroundImage: 'url("/set2.jpeg")' }}>▶</a>
        <a href="https://soundcloud.com/user-470418825/tropical-system" target="_blank" className="circle yellow" style={{ backgroundImage: 'url("/set3.jpeg")' }}>▶</a>
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
            <a href="https://www.instagram.com/matteobrunoooo/" target="_blank" className="booking" style={{ textDecoration: 'none' }}>INSTAGRAM</a>
            <a href="https://wa.me/5585989158867" target="_blank" className="booking" style={{ textDecoration: 'none', background: 'var(--green)' }}>WHATSAPP</a>
            <a href="https://mapacultural.secult.ce.gov.br/agente/143996/" target="_blank" className="booking" style={{ textDecoration: 'none', background: 'var(--blue)' }}>MAPA CULTURAL</a>
          </div>
        </div>
      </section>

      {/* RODAPÉ ATUALIZADO */}
      <footer className="footer" style={{ padding: '60px 20px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <p style={{ marginBottom: '10px' }}>© 2024 DJ MATTËO • FORTALEZA, BRASIL</p>
        
        {/* Créditos de Desenvolvimento */}
        <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
          Desenvolvido por <strong>breno caxias</strong>
        </p>

        {/* Ícones das Redes Sociais do Desenvolvedor */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://github.com/SEU-USUARIO" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <Github size={20} />
          </a>
          <a href="https://wa.me/5585989158867" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <MessageCircle size={20} />
          </a>
          <a href="https://instagram.com/SEU-INSTA" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <Instagram size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}