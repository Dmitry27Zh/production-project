import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string
}

export function PageLoader({ className }: PageLoaderProps) {
  return (
    <div className={classNames('page-loader', {}, [className])}>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
