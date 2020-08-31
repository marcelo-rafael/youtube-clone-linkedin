import React, { useState, useEffect } from 'react';

import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import AdBanner from '../AdBanner';
import LeftColumn from '../LeftColumn';
import MiddleColum from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);

  return (
    <Container>

      <MobileHeader />
      <DesktopHeader />

      <span>
        {isLoading && <AdBanner />}
      </span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColum isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
}

export default Layout;