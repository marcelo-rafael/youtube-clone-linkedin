import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars0.githubusercontent.com/u/29902777?s=460&u=61d43667f33a45eb000a2af216e4abeb2d4a6717&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>);
}

export default MobileHeader;