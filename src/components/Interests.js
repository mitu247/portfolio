import React from 'react';
import { interests } from '../data/portfolioData';
import { Eye, Brain, Bot, Image, BarChart } from 'lucide-react';

const iconMap = {
  Eye: Eye,
  Brain: Brain,
  Bot: Bot,
  Image: Image,
  BarChart: BarChart
};

const Interests = () => {
  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">Interests</h2>
        <div className="row g-4">
          {interests.map((interest) => {
            const IconComponent = iconMap[interest.icon];
            return (
              <div className="col-lg-4 col-md-6" key={interest.id}>
                <div className="card h-100">
                  <div className="card-body p-4 text-center">
                    <div className="icon-container mb-3" style={{ color: 'var(--accent-academic)' }}>
                      {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                    </div>
                    <h5 className="card-title">{interest.title}</h5>
                    <p className="text-muted small mb-0">{interest.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
