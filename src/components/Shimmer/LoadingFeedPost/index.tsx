import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';
import { Container } from './styles';

const LoadingFeedPost: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skon" />
          <div className="column">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
          <span>
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </span>
        </header>
      </Panel>
    </Container>
  )
}

export default LoadingFeedPost;