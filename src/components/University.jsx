import React from 'react';

import Experience from './Experience';
import ExperienceSection from './ExperienceSection';

import dissertation from '../assets/dissertation.pdf';
import ExternalLink from './ExternalLink';

function University() {
  return (
    <div>
      <Experience
        title="Loughborough University"
        type="education"
        time="1"
      >
        <div className="ExperienceDescription">
          <ExternalLink
            classNames={["Highlight"]}
            href="https://www.lboro.ac.uk"
            text="Loughborough University"
          />
          &nbsp;is a public research university in the market town of Loughborough, Leicestershire,&nbsp;
          in the East Midlands of England.
        </div>

        <ExperienceSection title="Final Year">
          <p className="ExperienceSectionSubTitle">Module Selection</p>
          {/* Advanced Artificial Intelligence Systems; Agent Based Systems; Algorithm Analysis; Cloud&nbsp;
                    Computing; Computer Vision; Cryptography and Network Security; Data Mining; Robotics */}
          <ul style={{ listStyleType: 'circle' }}>
            <li>Advanced Artificial Intelligence Systems</li>
            <li>Agent Based Systems</li>
            <li>Algorithm Analysis</li>
            <li>Cloud Computing</li>
            <li>Computer Vision</li>
            <li>Cryptography and Network Security</li>
            <li>Data Mining</li>
            <li>Robotics</li>
          </ul>
          <p className="ExperienceSectionSubTitle">Project &amp; Dissertation</p>
          <ExternalLink
            classNames={["Highlight"]}
            href={dissertation}
            text="Classification of Environmental Sounds Events"
          />
          <div className="ExperienceSectionQuote">
            <p>
              Environmental sound recognition is underdeveloped as a consequence of the scarcity of
              appropriate and openly available datasets. The release of ESC-50, UrbanSound8K and
              Google AudioSet have stimulated development of generalised audio research.
            </p>
            <p>
              This paper explores supervised classification and unsupervised clustering techniques on
              AudioSet-15; a fifteen-class subset of AudioSet. The highest obtained mean AUC for a
              given model was 0.698. The highest obtained AUC for a single class was 0.875 Although
              poor model metrics were obtained, certain test audio samples were associated with
              correct predictions of very high probabilityThis provides a promising foundation for
              further development.
            </p>
          </div>
        </ExperienceSection>

      </Experience>
    </div>
  );
}

export default University;
