/* eslint-disable i18next/no-literal-string */
import { Suspense, useState } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsModalOpen((prev) => !prev)} type="button">Toggle</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est tenetur amet, quam repudiandae culpa
          minima tempore repellat
          error earum
          eligendi quod at quisquam odio porro! Consequuntur optio mollitia debitis dignissimos.
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
