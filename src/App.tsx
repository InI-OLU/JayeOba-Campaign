import { useEffect, useState } from 'react'
import './styles.css'
import Gbounmi from './assets/Gbounmi.png'
import NimecheLogo from './assets/UnilagLogo.jpeg'

type ManifestoFile = {
  file: string
  title: string
  subtitle: string
  summary: string[]
  full: string[]
}

const manifestoFiles: ManifestoFile[] = [
  {
    file: 'FILE 01',
    title: 'Welfare Secretary',
    subtitle: 'NIMechE UNILAG SF — Current Role',
    summary: [
      'Executed professional development, mental health, fellowship sensitization, and freshers orientation events.',
      'Collected feedback, managed student welfare reports, and documented facility faults for repair escalation.',
      'Supported students during Fusion exams and continued executive duties physically and virtually while on IT.'
    ],
    full: [
      'Conceptualized, planned, organized, hosted, and executed a Professional Development event (bringing in experienced professionals across Tech, CAD, and LinkedIn Optimization) and a Mental Health event in the first semester of the 25/26 session.',
      'Planned, organized, hosted, and executed a Fellowship Sensitization event — where global leaders are made, with several UNILAG Mech students since selected into the NHEF Scholars Program — and the Freshers Orientation.',
      'Hosted and moderated all 3 physical events held last semester, sourcing professional speakers across different engineering fields.',
      'Created and distributed feedback forms after events to gather attendee input and improve future programming.',
      'Worked closely with the excos to define and refine event objectives tailored to Mechanical Engineering students.',
      'Documented all spoilt fans, chairs, wall cables, wall cracks, broken tables, bulbs, and sockets across the 2 Mech classes, and escalated the report to the VP for repairs.',
      'Assisted the department throughout the Fusion exam period, troubleshooting issues in the hall for the full day even while preparing for my next exam paper.',
      'Conceptualized and planned 2 upcoming events this semester, including the 2025/26 Induction Ceremony.',
      'Used feedback from the Welfare form and Suggestion box to identify the courses students found most difficult, and tailored tutorials around those key courses for greater efficiency.',
      'Attend to welfare-related DMs almost daily — advising students, taking direct action on issues, and handling CAD-related concerns outside my formal role whenever they reach me.',
      'Put my own paid tutorial on hold to dedicate myself fully to my executive responsibilities, wrote letters for welfare event facility and finance requests, handled logistics while hosting, and continued executive duties this semester even while on Industrial Training — both physically and virtually.'
    ]
  },
  {
    file: 'FILE 02',
    title: 'Logistics Team Lead',
    subtitle: 'NIMechE UNILAG SF — Current Role II',
    summary: [
      'Coordinated a logistics team of 14+ members to improve organization, productivity, and event execution.'
    ],
    full: [
      'As Logistics Team Lead, coordinated a team of over 14 members, increasing productivity, efficiency, and organization across department events.'
    ]
  },
  {
    file: 'FILE 03',
    title: '3D Modeling Training Lead',
    subtitle: 'ECX Tutor & Training Co-Lead, 2025/26',
    summary: [
      'Trained engineering students on Autodesk Inventor through ECX 6.0.',
      'Helped year two students perform strongly, including one student who became overall best in the course.'
    ],
    full: [
      'As Training Co-Lead for the 3D Modeling track of ECX 6.0, trained engineering students on Autodesk Inventor.',
      'Year 2 students who trained under the program passed their Inventor exams excellently, and one student became the overall best in the course in his department with the highest score.'
    ]
  },
  {
    file: 'FILE 04',
    title: 'Department Tutor',
    subtitle: 'Academic Support Service I, 2024/25',
    summary: [
      'Taught Engineering Drawing in NIMechE tutorials and helped students learn directly from a top performer in the course.'
    ],
    full: [
      'Taught Engineering Drawing in the department tutorials during the 2024/25 session, giving students an edge by learning directly from a top scorer in the course.'
    ]
  },
  {
    file: 'FILE 05',
    title: 'Tutorial Planning Support',
    subtitle: 'Academic Support Service II, 2025/26',
    summary: [
      'Assisted the VP with sourcing tutors for department tutorials.',
      'Pitched cross-department collaboration to strengthen academic support.'
    ],
    full: [
      'Assisted the VP in sourcing tutors for department tutorials in the 2025/26 session.',
      'Pitched a plan to the VP to collaborate with another department on tutorials, aimed at strengthening academic support.'
    ]
  },
  {
    file: 'FILE 06',
    title: 'Volunteer Service',
    subtitle: 'Positions Held Outside Mechanical Enginnering ',
    summary: [
      'Served across ULES ARB, ECX, Lagos SWUG, and NIMechE support roles.',
      'Held publicity, training, competition, and tutoring responsibilities outside regular class work.'
    ],
    full: [
      'ULES ARB Publicity Team Member, 25/26.',
      'ECX 6.0 Training Co-Lead for the 3D Modeling Track, 25/26.',
      'PRO for Lagos SWUG, 24/25.',
      'Competition Director for Lagos SWUG, 25/26.',
      'ULES ARB Tutor, 24/25.',
      'NIMechE UNILAG SF Tutor, 24/25.'
    ]
  },
  {
    file: 'FILE 07',
    title: 'Mentorship Impact',
    subtitle: 'Academic & Career Mentorship',
    summary: [
      'Mentored engineering students through ULES ARB and ECX programs.',
      'Guided mentees on school, career choices, study habits, freelancing, and technical growth.'
    ],
    full: [
      'Volunteered in the ULES ARB Mentorship Program, mentoring 4 mentees across 4 different engineering departments — guiding them on navigating school, academics, career, and decision-making. One mentee, a Chemical Engineering student, reported drastically improved reading habits and more effective study time.',
      'Mentored 2 students from the ECX 6.0 Training Program — the top 2 from my track — on thriving in their career path, including freelancing opportunities.',
      'Mentored a secondary school student through his external exams with textbook recommendations and reading habit guidance. He scored 305 in JAMB, aced WAEC, and now studies Mechanical Engineering at a renowned university.',
      'Has several additional mentees outside these organizations too numerous to list individually.',
      'Over the past 8 months serving in ECX, ULES ARB, Lagos SWUG, and as Welfare Secretary of NIMechE UNILAG SF, has grown alongside fellow excos and is stepping forward to serve as Vice President of NIMechE UNILAG SF.'
    ]
  },
  {
    file: 'FILE 08',
    title: 'Sports Support',
    subtitle: 'Departmental Sports Contribution',
    summary: [
      'Bought support gear, sponsored a student jersey, and gave out his own jersey so the female team could complete their kit.'
    ],
    full: [
      'Purchased support gear for departmental sports, sponsored a student jersey, and gave out his own jersey so the female team could complete their kit.Bought vuvuzela to support the Cheering and hyping during the USF 26 to encourage our Mech players while participating in their games'
    ]
  }
]

function App() {
  const [cursor, setCursor] = useState({ x: -120, y: -120 })
  const [activeFileIndex, setActiveFileIndex] = useState<number | null>(null)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  useEffect(() => {
    if (activeFileIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveFileIndex(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeFileIndex])

  const activeFile = activeFileIndex !== null ? manifestoFiles[activeFileIndex] : null

  return <main>
    <div className="cursor-aura" style={{ left: cursor.x, top: cursor.y }} />
  <section className="hero grid-bg">
  <div className="wrap">

    <div className="eyebrow">
      <img src={NimecheLogo} alt="NIMechE Logo" />
    
      NIMechE / UNILAG SF
    </div>

    <div className="mobile-portrait">
      <img src={Gbounmi} alt="Jaiyeoba Oluwagbounmi" />
      <div>
        <b>Jaiyeoba Oluwagbounmi Gabriel</b>
        <small> MECH ENG. '26</small>
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
          For Vice President. NIMechE / UNILAG SF . ENGINEERING STUDENTS
        </p>

        <div className="buttons">
          <a href="#manifesto" className="primary">
            VIEW SERVICE RECORD
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
            <strong>600+</strong>
            <span>STUDENTS IMPACTED</span>
          </div>

          <div className="stat">
            <strong>6+</strong>
            <span>VOLUNTEER TEAMS</span>
          </div>
        </div>
      </div>

      <div className="portrait desktop-portrait">
        <img src={Gbounmi} alt="Jaiyeoba OluwaGbounmi" />
        <div>
          <b>Jaiyeoba OluwaGbounmi Gabriel</b>
          <small>Vice President / NIMechE / UNILAG SF . '26</small>
        </div>
      </div>

    </div>
  </div>
</section>
    <div className="ticker"><div className="ticker-track">{Array.from({ length: 8 }, (_, i) => <span key={i}>VOTE JAIYEOBA GABRIEL</span>)}</div></div>
    <section className="section manifesto" id="manifesto">
      <div className="wrap">
        <div className="strategy-head">
          <div>
            <label>SERVICE RECORD</label>
            <h2>PROVEN IMPACT<br /><em>IN ACTION</em></h2>
          </div>
          <p>A leadership record built on welfare, logistics, tutorials, mentorship, and hands-on departmental support for Mechanical Engineering students.</p>
        </div>
        <div className="manifesto-grid">
          {manifestoFiles.map((item, index) => (
            <article
              key={item.file}
              onClick={() => setActiveFileIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveFileIndex(index)
                }
              }}
            >
              <label>{item.file}</label>
              <h3>{item.title}</h3>
              <ul>
                {item.summary.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <span className="manifesto-card-hint">VIEW FULL FILE →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="section projects campaign-exhibit"><div className="wrap"><label>FINAL EXHIBIT</label><h2>YOUR <em>ACTION</em></h2><div className="action-panel"><div><span>01</span><h3>Vote Jaiyeoba Gabriel</h3><p>Choose proven service, welfare-driven leadership, academic support, and real availability for Mechanical Engineering students.</p></div><div><span>02</span><h3>Join The Campaign</h3><p>Move with the core team, get updates, and help push the message across your class and circles.</p></div><div><span>03</span><h3>Connect Professionally</h3><p>Follow Gabriel's design, CAD, leadership, and development journey beyond the election season.</p></div></div></div></section>
    <section className="quote campaign-quote"><div className="quote-mark">FINAL EXHIBIT</div><p>VOTE <em>JAIYEOBA GABRIEL</em></p><label>YOUR ACTION / NIMEChE UNILAG SF</label></section>
    <section className="cta grid-bg campaign-cta" id="vote"><label>YOUR ACTION</label><h2>VOTE JAIYEOBA<br /><em>GABRIEL</em></h2><div className="vote-row"><div><b>CAMPAIGN WHATSAPP</b><small>JOIN THE MOBILIZATION CORE</small></div><a className="primary" href="https://chat.whatsapp.com/EQx5CySnCjwH4lYLcIXglN?mode=gi_t" target="_blank" rel="noreferrer">JOIN WHATSAPP</a><a className="secondary" href="https://www.linkedin.com/in/gabbycad360?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LINKEDIN</a></div></section>
    <footer className="site-footer"><div><label>CAMPAIGN ARCHIVE</label><strong>JAIYEOBA <em>GABRIEL</em></strong><p>Final exhibit for a welfare-first, service-backed campaign for Vice President.</p></div><div className="footer-links"><a href="#manifesto">SERVICE RECORD</a><a href="https://chat.whatsapp.com/EQx5CySnCjwH4lYLcIXglN?mode=gi_t" target="_blank" rel="noreferrer">WHATSAPP</a><a href="https://www.linkedin.com/in/gabbycad360?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LINKEDIN</a></div><div className="footer-right"><nav>FINAL EXHIBIT / YOUR ACTION</nav><b>VOTE NOW</b><small>STATUS: CAMPAIGN ACTIVE / NIMEChE-LNK-01</small></div></footer>

    {activeFile && (
      <div className="file-modal-overlay" onClick={() => setActiveFileIndex(null)}>
        <div className="file-modal" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            className="file-modal-close"
            onClick={() => setActiveFileIndex(null)}
            aria-label="Close file"
          >
            ×
          </button>
          <label>{activeFile.file}</label>
          <h3>{activeFile.title}</h3>
          <span className="file-modal-subtitle">{activeFile.subtitle}</span>
          <ul>
            {activeFile.full.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>
    )}
  </main>
}

export default App