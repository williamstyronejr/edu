import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouteComponentProps } from 'react-router-dom';
import './styles/exercisePage.css';

type TParams = { id: string };

const NotFound = () => {
  return (
    <section className="exercise exercise--missing">
      <div className="exercise__message">404</div>
    </section>
  );
};

function ErrorFallback() {
  return (
    <div className="">
      <p>This exercise could not be found. </p>
    </div>
  );
}

const ExercisePage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;

  if (!id) return <NotFound />;
  const CurrentComp = React.lazy(() => import(`./boards/example`));

  return (
    <section className="exercise">
      <React.Suspense fallback={<div>loadding....</div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CurrentComp />
        </ErrorBoundary>
      </React.Suspense>
    </section>
  );
};

export default ExercisePage;
