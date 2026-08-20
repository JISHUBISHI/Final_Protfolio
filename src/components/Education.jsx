import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">My Journey</div>
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-dot">
              <GraduationCap size={20} />
            </div>
            <div className="education-content glass-card" style={{ padding: '24px', marginLeft: '24px', flex: 1 }}>
              <div className="education-level">2022 - 2026</div>
              <h3 className="education-degree">B.Tech in Computer Science & Engineering</h3>
              <p className="education-school">Institute Of Engineering & Management, Kolkata</p>
              <div className="education-grade">CGPA: 8.3</div>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-dot">
              <GraduationCap size={20} />
            </div>
            <div className="education-content glass-card" style={{ padding: '24px', marginLeft: '24px', flex: 1 }}>
              <div className="education-level">2022</div>
              <h3 className="education-degree">Higher Secondary Education (12th)</h3>
              <p className="education-school">Khukurdaha ICMM High School (WBCHSE)</p>
              <div className="education-grade">Percentage: 80.6%</div>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-dot">
              <GraduationCap size={20} />
            </div>
            <div className="education-content glass-card" style={{ padding: '24px', marginLeft: '24px', flex: 1 }}>
              <div className="education-level">2020</div>
              <h3 className="education-degree">Secondary Education (10th)</h3>
              <p className="education-school">Khukurdaha ICMM High School (WBBSE)</p>
              <div className="education-grade">Percentage: 82.4%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
