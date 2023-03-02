import renderWinPage from './components/winners-page/winners-page';
import renderHeader from './components/header/header';
import renderMain from './components/main/main';
import './styles.scss';

const start = async (): Promise<void> => {
  await renderHeader();
  await renderMain();
  await renderWinPage();
};

start();
