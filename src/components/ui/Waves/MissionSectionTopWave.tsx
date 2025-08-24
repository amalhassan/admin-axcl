import React from 'react';

interface MissionTopSvgProps {
  className?: string;
}

const MissionSectionTopWave = ({className} : MissionTopSvgProps) => {
  return (
    <svg className={className} width="100%" height="auto" viewBox="0 0 1510 113" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M-2 13.6791L61 9.57495C124 5.47078 250 -3.01116 376 1.093C502 5.47078 628 21.8875 754 32.2847C880 42.6819 1006 46.7861 1132 42.6819C1258 38.5777 1384 25.9916 1447 19.9722L1510 13.6791V113H1447C1384 113 1258 113 1132 113C1006 113 880 113 754 113C628 113 502 113 376 113C250 113 124 113 61 113H-2V13.6791Z" fill="currentColor"/>
    </svg>
  );
};

export default MissionSectionTopWave;