import React from 'react';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../hooks/use-about-sub-page';
import { keyPrefixes } from '../../../../constants/translation-keys';
import { Img1, Img2, Img3 } from '../../../../assets/images/about/projects';

const Projects = () => {
  const images = [Img1, Img2, Img3];

  const { items, label } = useAboutSubPage({ keyPrefix: keyPrefixes.projectsPage, images });

  return <AboutSubPage label={label} items={items} />;
};
export default Projects;
