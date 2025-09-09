import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  /* Evento de redirección */

  const handleConfirm = () => {
    const telefono = '523112607058';
    const mensaje = 'Hola, confirmo mi asistencia a la boda!. ¡Nos vemos pronto!🥳';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  /* Timer */

  const [tiempoRestante, setTiempoRestante] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

useEffect(() => {
  const objetivo = new Date('2025-11-08T00:00:00');

  const actualizarTiempo = () => {
    const ahora = new Date();
    const diferencia = objetivo - ahora;

    if (diferencia > 0) {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      setTiempoRestante({ dias, horas, minutos, segundos });
    } else {
      setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    }
  };

  const intervalo = setInterval(actualizarTiempo, 1000);
  return () => clearInterval(intervalo);
}, []);


  return (
<div className="container">

  {/* BLOQUE 1 */}
  <div className="bloque1">
    <h1 className="aparecer">Roxanna & Ernesto</h1>
    <img src="/assets/wedding-rings.svg" alt='Anillos' className='icono-anillos aparecer'/>
  </div>

  {/* BLOQUE 2 */}
  <div className="bloque2">

    <p className="mensaje1 aparecer">Estamos listos para iniciar esta nueva aventura ¡Gracias por ser parte de este día tan especial!</p>
    
   {/* La cita es el día */}
<div className='txt-con-icono aparecer'>
  <p className="mensaje2 aparecer">La cita es el día:</p>
</div>

<div className='aparecer'>
  <img src="/assets/glass-drink.svg" alt='Copa' className='icono aparecer'/>
</div>

<div className='txt-con-icono aparecer'>
  <p className='fecha aparecer'>8 de noviembre de 2025</p>
</div>
  


{/* Cuenta regresiva */}
<div className='txt-con-icono aparecer'>
  <p className="cuenta-regresiva aparecer">
    Faltan: {tiempoRestante.dias} días, {tiempoRestante.horas} horas, {tiempoRestante.minutos} minutos y {tiempoRestante.segundos} segundos.
  </p>
</div>

{/* Acerca del Evento */}
<div className='txt-con-icono aparecer'>
  <p className="mensaje-info aparecer">Acerca del Evento</p>
</div>

{/* SECCION DE CEREMONIA */}
<div className='txt-con-icono aparecer'>
  <p className='mensaje3 aparecer'>Ceremonia</p>
</div>

<div className='txt-con-icono aparecer'>
  <img src="/assets/calendar.svg" alt='Calendario' className='icono aparecer'/>
  <p className='mensaje1 aparecer'>8 de Noviembre</p>
</div>

<div className='txt-con-icono aparecer'>
  <img src="/assets/location.svg" alt='Ubicacion' className='icono aparecer'/>
  <p className='mensaje1 aparecer'>Parroquia de Santa Cecilia</p>
</div>

<div className='txt-con-icono aparecer'>
  <img src="/assets/clock.svg" alt='Reloj' className='icono aparecer'/>
  <p className='mensaje1 aparecer'>16:30 horas</p>
</div>

<div className='txt-con-icono aparecer'>
  <button
    onClick={() =>
      window.open(
        "https://www.google.com/maps/place/Parroquia+de+Santa+Cecilia",
        "_blank"
      )
    }
  >
    Ver Ubicación
  </button>
</div>

{/* SECCION DE RECEPCIÓN */}
<div className='txt-con-icono aparecer'>
  <p className='mensaje3 aparecer'>Recepción</p>
</div>

<div className='txt-con-icono aparecer'>
  <img src="/assets/location.svg" alt='Ubicacion' className='icono aparecer'/>
  <p className='mensaje1 aparecer'>Salón San Miguel</p>
</div>

<div className='txt-con-icono aparecer'>
  <img src="/assets/clock.svg" alt='Reloj' className='icono aparecer'/>
  <p className='mensaje1 aparecer'>19:00 horas</p>
</div>

<div className='txt-con-icono aparecer'>
  <button
    onClick={() =>
      window.open("https://maps.app.goo.gl/Kxdv3hw5BFKzNaR88", "_blank")
    }
  >
    Ver Ubicación
  </button>
</div>


    {/* SECCION PADRINOS */}
    <img src="/assets/floral-divider.svg" alt='Floral' className='icono-floral aparecer'/>

    <div className="aparecer">
      <h3 className="aparecer">Nuestros Padrinos de Velación</h3>
      <p className="aparecer">Brenda Janeth Delgadillo Mercado & Alejandro López Ocampo</p>
    </div>

    <div className="aparecer">
      <h3 className="aparecer">Nuestros Padrinos de Arras</h3>
      <p className="aparecer">Mónica Maria Casanova Olivo & Miguel Guevara Cuevas</p>
    </div>

    <div className="aparecer">
      <h3 className="aparecer">Nuestros Padrinos de Anillos</h3>
      <p className="aparecer">Teresa de Jesús Almaráz Montes & Victor Manuel Chacón Olivo</p>
    </div>

    <div className="aparecer">
      <h3 className="aparecer">Nuestros Padrinos de Lazo</h3>
      <p className="aparecer">Rosa Georgina Orozco Godínez & Saori Amairani Quezada Orozco</p>
    </div>

    <div className="aparecer">
      <h3 className="aparecer">Madrina de Ramo</h3>
      <p className="aparecer">Karla Britney Alarcón Montes</p>
    </div>

    <img src="/assets/floral-divider.svg" alt='Floral' className='icono-floral aparecer'/>

    {/* SECCION REGALO */}
    <div className="aparecer">
      <h2 className="aparecer">Nuestro Regalo</h2>
      <p className='cuenta-regresiva aparecer'>Tu presencia es nuestro mejor regalo, pero si está dentro de tus posibilidades y deseas hacernos un presente te dejamos esta opción:</p>
      <img src="/assets/love-letter.svg" alt='Sobre' className='icono-sobre aparecer'/>
      <p className='cuenta-regresiva2 aparecer'>Lluvia de sobres</p>
    </div>

    {/* FECHA LÍMITE Y CONFIRMACIÓN */}
    <img src="/assets/ornamental-divider.svg" alt='Ornamental' className='icono-floral aparecer'/>
    <p className="cuenta-regresiva2 aparecer">¡No Faltes!</p>
    <p className="cuenta-regresiva aparecer">Fecha límite: 15 de octubre de 2025</p>
    <button className="aparecer" onClick={handleConfirm}>Confirmar asistencia</button>

  </div>
</div>
);}

export default App;
