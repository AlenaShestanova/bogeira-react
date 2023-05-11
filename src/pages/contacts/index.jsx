import React from 'react';

import { Footer } from '../../components/footer';
import { contactsList } from './constants/contacts-list';

import classes from './contacts.module.scss';

const Contacts = () => {
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
      <Footer isHalfPage />
    </div>
  );
};
export default Contacts;
