import React, {useState} from 'react';
import './LandingPage.scss';
import Banner from './Sections/Banner';
import News from './Sections/News';

const LandingPage: React.FC = () => {
  const [userType, setUserType] = useState('reporter'); //// 임시 props
  return (
    <div className="landing">
      <Banner />
      <News userType={userType} />
    </div>
  );
};

export default LandingPage;
