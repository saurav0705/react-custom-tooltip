import './styles.scss';
import Tooltip from './ToolTipComponent';

export default function App() {
  return (
    <div className="App">
      <Tooltip description={'textual information'} direction={'right'} />
      <Tooltip
        description={'some random text kdgiuad aiushcuias iusahciuas iuashciu'}
        direction={'left'}
      />
      <Tooltip
        description={'some random text kdgiuad aiushcuias iusahciuas iuashciu'}
        direction={'top'}
      />
      <Tooltip
        description={'some random text kdgiuad aiushcuias iusahciuas iuashciu'}
        direction={'bottom'}
      />
    </div>
  );
}
