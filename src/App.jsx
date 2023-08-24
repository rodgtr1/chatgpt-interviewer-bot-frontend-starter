import React, { useState } from 'react';
import { Button } from 'antd';
import { AudioOutlined, StopOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const [recording, setRecording] = useState(false);

  const handleRecordClick = () => {
    // Implement your record logic here
    setRecording(true);
  };

  const handleStopClick = () => {
    // Implement your stop logic here
    setRecording(false);
  };

  const handleClearHistoryClick = () => {
    // Implement your clear history logic here
  };

  return (
    <div className="App">
      <div className="button-container">
        <Button
          className={`record-button ${recording ? 'active' : ''}`}
          shape="circle"
          icon={<AudioOutlined />}
          size="large"
          onClick={handleRecordClick}
        />
        <Button
          className={`stop-button ${recording ? 'active' : ''}`}
          shape="circle"
          icon={<StopOutlined />}
          size="large"
          onClick={handleStopClick}
        />
        <Button
          className="clear-button"
          shape="rectangle"
          size="large"
          onClick={handleClearHistoryClick}
        >
          Clear History
        </Button>
      </div>
    </div>
  );
}

export default App;
