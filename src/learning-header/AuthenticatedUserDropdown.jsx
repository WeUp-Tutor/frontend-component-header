import React from 'react';
import PropTypes from 'prop-types';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@openedx/paragon';

import LearningUserMenuToggleSlot from '../plugin-slots/LearningUserMenuToggleSlot';
import LearningUserMenuSlot from '../plugin-slots/LearningUserMenuSlot';

import messages from './messages';



const API_URL = `${getConfig().LMS_BASE_URL}/wul_apps/custom_field_editor/`;


// Helper CSRF (optionnel si ton API est vraiment csrf_exempt)
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}


async function syncEmailInCustomFields() {
  console.log('77777777777777777777777777777777777777777777777777777777777777777')
  console.log('77777777777777777777777777777777777777777777777777777777777777777')
  console.log('77777777777777777777777777777777777777777777777777777777777777777')

  console.log('start syncEmailInCustomFields');

  const user = getAuthenticatedUser();
  const userEmail = user?.email;
  if (!userEmail) {
    console.warn('[CustomFields] Email utilisateur non disponible');
    return;
  }

  try {
    // GET
    const getRes = await fetch(API_URL, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        // 'X-CSRFToken': getCookie('csrftoken'), // pas nécessaire si csrf_exempt
      },
    });

    const getData = await getRes.json();
    if (!getRes.ok) {
      console.error('[CustomFields] GET error', getData);
      return;
    }

    const existingFields = getData.data || {};

    // POST avec email ajouté
    const payload = {
      ...existingFields,
      email: userEmail,
    };

    const postRes = await fetch(API_URL, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'X-CSRFToken': getCookie('csrftoken'), // pas nécessaire si csrf_exempt
      },
      body: JSON.stringify(payload),
    });

    const postData = await postRes.json();
    if (!postRes.ok) {
      console.error('[CustomFields] POST error', postData);
      return;
    }

    console.log('[CustomFields] Email synchronisé', postData);
  } catch (err) {
    console.error('[CustomFields] Exception:', err);
  }
  console.log('77777777777777777777777777777777777777777777777777777777777777777')

}



const AuthenticatedUserDropdown = ({ username }) => {
  const intl = useIntl();


  const dropdownItems = [
    {
      message: intl.formatMessage(messages.dashboard),
      href: `${getConfig().LMS_BASE_URL}/dashboard`,
    },
    {
      message: intl.formatMessage(messages.account),
      href: getConfig().ACCOUNT_SETTINGS_URL,
    },
    ...(getConfig().ORDER_HISTORY_URL ? [{
      message: intl.formatMessage(messages.orderHistory),
      href: getConfig().ORDER_HISTORY_URL,
    }] : []),
    {
      message: intl.formatMessage(messages.signOut),
      href: getConfig().LOGOUT_URL,
    },
  ];

  return (
    <Dropdown className="user-dropdown ml-3">
      <Dropdown.Toggle variant="outline-primary" aria-label={intl.formatMessage(messages.userOptionsDropdownLabel)}>
        <LearningUserMenuToggleSlot label={username} icon={faUserCircle} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-right">
        <LearningUserMenuSlot items={dropdownItems} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

AuthenticatedUserDropdown.propTypes = {
  username: PropTypes.string.isRequired,
};

export default AuthenticatedUserDropdown;
