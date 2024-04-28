import React from 'react';

import { Footer } from '../../components/footer';
import { useResize } from '../../hooks/use-resize';
import { contactsList } from './constants';

import classes from './contacts.module.scss';

const Contacts = () => {
  const { isMobile } = useResize();

  return (
    <div className={classes.contactsContainer}>
      <ul className={classes.info}>
        {contactsList.map(({ contactName, link, linkName }) => (
          <li>
            {contactName} &nbsp; – &nbsp;
            <a id={contactName} href={link} target="_blank" rel="noreferrer">
              {linkName}
            </a>
          </li>
        ))}
      </ul>
      <div className={classes.photo}></div>
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
export default Contacts;
