import { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css'
function Stats() {
  const [art, setArt] = useState(0);
  const [projects, setProjects] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [customers, setCustomers] = useState(0);

  const rafId = useRef(null);

  useEffect(() => {
    const updateStats = (timestamp) => {
      const progress = timestamp / 3000;
      setArt(Math.floor(13 * progress));
      setProjects(Math.floor(200 * progress));
      setEmployees(Math.floor(20 * progress));
      setCustomers(Math.floor(10000 * progress));
  
      // Once the animation is complete (i.e. progress >= 1), set the final value directly
      if (progress >= 1) {
        setArt(13);
        setProjects(200);
        setEmployees(20);
        setCustomers(10000);
      } else {
        rafId.current = requestAnimationFrame(updateStats);
      }
    };
  
    rafId.current = requestAnimationFrame(updateStats);
  
    return () => cancelAnimationFrame(rafId.current);
  }, []);
  return (
    <div className="stats">
      <div className="stats-overlay">
        <div className="statsbar progresstab">
          <div className="stat-one">
            <h1 className="stat-number" data-n={13}>
              {art}
            </h1>
            <h1 className="stat-title">Искуство</h1>
          </div>
          <div className="stat-two">
            <h1 className="stat-number" data-n={200}>
              {projects}
            </h1>
            <h1 className="stat-title">Направени Проекти</h1>
          </div>
          <div className="stat-three">
            <h1 className="stat-number" data-n={20}>
              {employees}
            </h1>
            <h1 className="stat-title">Работници вработено</h1>
          </div>
          <div className="stat-four">
            <h1 className="stat-number" data-n={10000}>
              {customers}
            </h1>
            <h1 className="stat-title">Задоволни клиенти</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats