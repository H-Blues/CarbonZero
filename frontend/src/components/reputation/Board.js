import React from 'react';
import { companies } from './data.js';

const rankEmoji = (rank) => {
  const emojis = ['🏆', '🥈', '🥉', '🤩', '🔥', '👍', '💪', '⭐️', '👏', '🙌'];
  return emojis[rank - 1] || '🏅';
}

const Leaderboard = () => {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#36454F', // For example, a dark background
  };

  const gridStyle = {
    width: '80%', // Adjust based on your preference
    textAlign: 'center',
  };

  const cardStyle = {
    backgroundColor: '#2F4F4F',
    color: '#FFF',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#405D5E',
    borderRadius: '5px',
    color: '#FFF',
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  const detailsStyle = {
    flexGrow: 1,
    textAlign: 'left',
  };

  const titleStyle = {
    color: '#FFF',
    marginBottom: '20px',
  };

  return (
    <div style={wrapperStyle}>
      <div style={gridStyle}>
        <div>
          <h4 style={titleStyle}>Environmental Impact Leaderboard</h4>
          <div style={cardStyle}>
            <ul style={listStyle}>
              {companies.map((company, index) => (
                <li key={index} style={listItemStyle}>
                  <div style={{ width: "60px" }}>{rankEmoji(company.rank)}</div>
                  <img style={logoStyle} src={company.logo} alt={`${company.company} logo`} />
                  <div style={detailsStyle}>
                    <h5>{company.company}</h5>
                    <div>{company.project} - {company.carbon} saved</div>
                  </div>
                  <div>{company.kudos} Kudos</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
