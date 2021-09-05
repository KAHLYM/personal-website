import React, { Component } from 'react';

import Experience from './Experience';
import ExperienceSection from './ExperienceSection';

import dissertation from '../assets/dissertation.pdf';

export class University extends Component {
    render() {
        return (
            <div>
                <Experience
                    title="Loughborough University"
                    type="education"
                    time="1"
                >
                    <div className="ExperienceDescription">
                        <a
                            className="Highlight"
                            href="https://www.lboro.ac.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Loughborough University
                        </a>
                        &nbsp;is a public research university in the market town of Loughborough, Leicestershire,&nbsp;
                        in the East Midlands of England.
                    </div>

                    <ExperienceSection title="Final Year">
                        <p className="ExperienceSectionSubTitle">Module Selection</p>
                        {/* Advanced Artificial Intelligence Systems; Agent Based Systems; Algorithm Analysis; Cloud&nbsp;
                        Computing; Computer Vision; Cryptography and Network Security; Data Mining; Robotics */}
                        <ul style={{ listStyleType: "circle" }}>
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
                        <a
                            className="Highlight"
                            href={dissertation}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Classification of Environmental Sounds Events
                        </a>
                    </ExperienceSection>

                </Experience>
            </div>
        );
    }
}

export default University;
