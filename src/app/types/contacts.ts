export interface Contacts {
  contacts: Contact[];
}

export interface Contact {
  contactId: string;
  phoneNumbers: PhoneNumber[];
  displayName: string;
  emails: Email[];
}

export interface PhoneNumber {
  number: string;
  label: string;
}

export interface Email {
  label: string;
  address: string;
}
