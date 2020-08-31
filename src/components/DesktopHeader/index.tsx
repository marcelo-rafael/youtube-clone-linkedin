import React from 'react';

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars0.githubusercontent.com/u/29902777?s=460&u=61d43667f33a45eb000a2af216e4abeb2d4a6717&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>

          </nav>

        </div>
      </Wrapper>
    </Container>
  )
}

export default DesktopHeader;