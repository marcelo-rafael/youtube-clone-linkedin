import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars0.githubusercontent.com/u/29902777?s=460&u=61d43667f33a45eb000a2af216e4abeb2d4a6717&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Marcelo Rafael Gonçalves</h1>
        <h2>Developer frond-end</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
