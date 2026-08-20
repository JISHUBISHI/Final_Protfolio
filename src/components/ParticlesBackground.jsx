import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    let mouse = { x: null, y: null, radius: 120 };
    
    const onPointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    const onMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseout', onMouseOut);
    
    function initParticles() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray = [];
      let numberOfParticles = Math.min((canvas.height * canvas.width) / 11000, 70);
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.8) - 0.4;
        let directionY = (Math.random() * 0.8) - 0.4;
        let color = 'rgba(0, 229, 255, 0.5)';
        particlesArray.push({ x, y, directionX, directionY, size, color });
      }
    }
    
    let animationFrameId;

    const handleResize = () => { initParticles(); };
    window.addEventListener('resize', handleResize);
    
    function animateParticles() {
      animationFrameId = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
        if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;
        
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            let pushX = (forceDirectionX * force * 2.5);
            let pushY = (forceDirectionY * force * 2.5);
            p.x -= pushX;
            p.y -= pushY;
          }
        }
        
        p.x += p.directionX;
        p.y += p.directionY;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = (dx * dx) + (dy * dy);
          if (distance < 12000) {
            let opacityValue = 1 - (distance / 12000);
            ctx.strokeStyle = 'rgba(0, 229, 255, ' + (opacityValue * 0.25) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    initParticles();
    animateParticles();

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particles-canvas" ref={canvasRef}></canvas>;
}
