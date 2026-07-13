import { useEffect, useState } from 'react'
import './styles.css'
import Gbounmi from './assets/Gbounmi.png'

const manifestoFiles: Array<[string, string, string[]]> = [
  ['FILE 01', 'Welfare Secretary', ['Executed professional development, mental health, fellowship sensitization, and freshers orientation events.', 'Collected feedback, managed student welfare reports, and documented facility faults for repair escalation.', 'Supported students during Fusion exams and continued executive duties physically and virtually while on IT.']],
  ['FILE 02', 'Logistics Team Lead', ['Coordinated a logistics team of 14+ members to improve organization, productivity, and event execution.']],
  ['FILE 03', '3D Modeling Training Lead', ['Trained engineering students on Autodesk Inventor through ECX 6.0.', 'Helped year two students perform strongly, including one student who became overall best in the course.']],
  ['FILE 04', 'Department Tutor', ['Taught Engineering Drawing in NIMechE tutorials and helped students learn directly from a top performer in the course.']],
  ['FILE 05', 'Tutorial Planning Support', ['Assisted the VP with sourcing tutors for department tutorials.', 'Pitched cross-department collaboration to strengthen academic support.']],
  ['FILE 06', 'Volunteer Service', ['Served across ULES ARB, ECX, Lagos SWUG, and NIMechE support roles.', 'Held publicity, training, competition, and tutoring responsibilities outside regular class work.']],
  ['FILE 07', 'Mentorship Impact', ['Mentored engineering students through ULES ARB and ECX programs.', 'Guided mentees on school, career choices, study habits, freelancing, and technical growth.']],
  ['FILE 08', 'Sports Support', ['Bought support gear, sponsored a student jersey, and gave out his own jersey so the female team could complete their kit.']]
]

function App() {
  const [cursor, setCursor] = useState({ x: -120, y: -120 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return <main>
    <div className="cursor-aura" style={{ left: cursor.x, top: cursor.y }} />
  <section className="hero grid-bg">
  <div className="wrap">

    <div className="eyebrow">
      <i />
      NIMechE / FACULTY OF ENGINEERING
    </div>

    <div className="mobile-portrait">
      <img src={Gbounmi} alt="Jaiyeoba Gbounmi" />
      <div>
        <b>Jaiyeoba Gbounmi</b>
        <small>CANDIDATE NO. 01 / MECH ENG. '26</small>
      </div>
    </div>

    <h1>
      JAIYEOBA
      <br />
      <em>GABRIEL</em>
    </h1>

    <div className="hero-bottom">

      <div className="hero-copy">
        <p>
          For Vice President. NIMechE . ENGINEERING STUDENTS
        </p>

        <div className="buttons">
          <a href="#manifesto" className="primary">
            VIEW MANIFESTO
          </a>

          <a href="#vote" className="secondary">
            JOIN THE CORE
          </a>
        </div>

        <div className="hero-vote">
          Vote
          <br />
          <em>JAIYEOBA GABRIEL</em>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>8+</strong>
            <span>SERVICE ROLES</span>
          </div>

          <div className="stat">
            <strong>100+</strong>
            <span>STUDENTS IMPACTED</span>
          </div>

          <div className="stat">
            <strong>6+</strong>
            <span>VOLUNTEER TEAMS</span>
          </div>
        </div>
      </div>

      <div className="portrait desktop-portrait">
        <img src={Gbounmi} alt="Jaiyeoba Gbounmi" />
        <div>
          <b>Jaiyeoba Gbounmi</b>
          <small>CANDIDATE NO. 01 / MECH ENG. '26</small>
        </div>
      </div>

    </div>
  </div>
</section>
    <div className="ticker"><div className="ticker-track">{Array.from({ length: 8 }, (_, i) => <span key={i}>VOTE JAIYEOBA GABRIEL</span>)}</div></div>
    <section className="section manifesto" id="manifesto"><div className="wrap"><div className="strategy-head"><div><label>SERVICE RECORD</label><h2>PROVEN IMPACT<br /><em>IN ACTION</em></h2></div><p>A leadership record built on welfare, logistics, tutorials, mentorship, and hands-on departmental support for Mechanical Engineering students.</p></div><div className="manifesto-grid">{manifestoFiles.map(([file, title, points]) => <article key={file}><label>{file}</label><h3>{title}</h3><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></div></section>
    <section className="section projects campaign-exhibit"><div className="wrap"><label>FINAL EXHIBIT</label><h2>YOUR <em>ACTION</em></h2><div className="action-panel"><div><span>01</span><h3>Vote Jaiyeoba Gabriel</h3><p>Choose proven service, welfare-driven leadership, academic support, and real availability for Mechanical Engineering students.</p></div><div><span>02</span><h3>Join The Campaign</h3><p>Move with the core team, get updates, and help push the message across your class and circles.</p></div><div><span>03</span><h3>Connect Professionally</h3><p>Follow Gabriel's design, CAD, leadership, and development journey beyond the election season.</p></div></div></div></section>
    <section className="quote campaign-quote"><div className="quote-mark">FINAL EXHIBIT</div><p>VOTE <em>JAIYEOBA GABRIEL</em></p><label>YOUR ACTION / NIMEChE UNILAG SF</label></section>
    <section className="cta grid-bg campaign-cta" id="vote"><label>YOUR ACTION</label><h2>VOTE JAIYEOBA<br /><em>GABRIEL</em></h2><div className="vote-row"><div><b>CAMPAIGN WHATSAPP</b><small>JOIN THE MOBILIZATION CORE</small></div><a className="primary" href="https://chat.whatsapp.com/EQx5CySnCjwH4lYLcIXglN?mode=gi_t" target="_blank" rel="noreferrer">JOIN WHATSAPP</a><a className="secondary" href="https://www.linkedin.com/in/gabbycad360?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LINKEDIN</a></div></section>
    <footer className="site-footer"><div><label>CAMPAIGN ARCHIVE</label><strong>JAIYEOBA <em>GABRIEL</em></strong><p>Final exhibit for a welfare-first, service-backed campaign for Vice President.</p></div><div className="footer-links"><a href="#manifesto">SERVICE RECORD</a><a href="https://chat.whatsapp.com/EQx5CySnCjwH4lYLcIXglN?mode=gi_t" target="_blank" rel="noreferrer">WHATSAPP</a><a href="https://www.linkedin.com/in/gabbycad360?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LINKEDIN</a></div><div className="footer-right"><nav>FINAL EXHIBIT / YOUR ACTION</nav><b>VOTE NOW</b><small>STATUS: CAMPAIGN ACTIVE / NIMEChE-LNK-01</small></div></footer>
  </main>
}

export default App
