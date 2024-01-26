import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './service/youtube'; //api키 관리 파일

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY); //env파일에 있는거 쓰기
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
