import React from 'react';

const Card = ({ title, value, subValue, chartId, imageUrl, stats, isCentered, isChart4 }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'eye':
        return (
          <svg className="stat-item-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="stat-item-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
      <p>{subValue}</p>
      <div className={isChart4 ? 'chart4-container' : isCentered ? 'chart-container-centered' : 'chart-container'}>
        <canvas id={chartId} className={isCentered ? 'chart-canvas-centered' : 'chart-canvas'}></canvas>
      </div>
      <div className="footer">
        <img src={imageUrl} alt="Profile picture" />
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              {getIcon(stat.icon)}
              <span>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;