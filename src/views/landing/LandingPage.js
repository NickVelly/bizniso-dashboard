// src/views/landing/LandingPage.js
import React from "react"
import { useNavigate } from "react-router-dom"
import "./LandingPage.css"

const LandingPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/prijava") // Preusmerenje na prijavu
  }

  return (
    <div>
      <header className="landing-header">
        <div className="logo">📊 Bizniso</div>
        <h1>Паметно управљање бизнисом</h1>
        <p>Фактуре, трошкови, залихе и смене — све на једном месту, на српском језику.</p>
        <button className="cta" onClick={handleClick}>Пробај бесплатно</button>
      </header>

      <section className="section">
        <h2>Шта добијаш са Bizniso?</h2>
        <div className="features">
          <div className="feature">
            <img src="https://img.icons8.com/fluency/96/invoice.png" alt="Фактуре" />
            <h3>Фактурисање</h3>
            <p>Издај фактуре у 2 клика. Брзо, лако и професионално.</p>
          </div>
          <div className="feature">
            <img src="https://img.icons8.com/fluency/96/money.png" alt="Трошкови" />
            <h3>Трошкови и приходи</h3>
            <p>Прати све своје трошкове и приходе на једном месту.</p>
          </div>
          <div className="feature">
            <img src="https://img.icons8.com/fluency/96/box.png" alt="Залихе" />
            <h3>Залихе</h3>
            <p>Упиши производе и прати залихе са обавештењима при истеку.</p>
          </div>
          <div className="feature">
            <img src="https://img.icons8.com/fluency/96/group.png" alt="Радници" />
            <h3>Радници и смене</h3>
            <p>Управљај радним временом и сменама својих запослених.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2>Цене које пријају малим бизнисима</h2>
        <div className="price-box">
          <h3>Бесплатно</h3>
          <p>За почетнике и тестирање</p>
          <ul>
            <li>✔ Основне функције</li>
            <li>✔ До 3 клијента</li>
            <li>✔ Ограничен број фактура</li>
          </ul>
          <h3>4.99 €/месечно</h3>
          <p>Премиум пакет за све функције</p>
          <ul>
            <li>✔ Неограничено фактурисање</li>
            <li>✔ Залихе, радници и смене</li>
            <li>✔ Годишњи извештаји и извоз</li>
          </ul>
        </div>
      </section>

      <footer>
        © 2025 Bizniso | Сви подаци су безбедни и чувани на EU серверима.
      </footer>
    </div>
  )
}

export default LandingPage
