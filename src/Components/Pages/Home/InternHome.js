import './App.css';
import Progressbar from './Progess_Bar';

function Progress() {
  return (
    <div className="Progress">
      <h2>Progress Bar</h2>
      <Progressbar bgcolor="orange" progress='30' height={30} />
    </div>
  )
}

export default InternHome;