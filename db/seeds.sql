##seeds

  INSERT INTO survey (orgName, orgWebsite, orgNumber, orgEmail, blurb, siteConsent, mpp_con_name, mpp_email, address, city, state, post_code, emergency_contact, emerg_con_tel_number1, emerg_con_tel_number2, emerg_extension2, emergency_contact_email, contactConsent)
  VALUES ('DC Baptist Convention', 'dcbaptist.org', 202-265-1526, 'info@dcbaptist.org', 'DCBC has been engaging in disaster response and recovery in some way shape or form for nearly a century. The DCBC Emergency Response Team was formed in 2012 and their inaugural mission was to New Jersey following Hurricane Sandy. The team provides debris removal, flood recovery and other disaster recovery services.', 'Yes', 'Jennifer Perry', 'jennifer.perry@dcbaptist.org', '1628 16th Street', 'Washington', 'DC', 20009, 'Jennifer Perry', 603-785-8477, 202-265-1526, 211, 'jennifer.perry@dcbaptist.org', 'yes');

  INSERT INTO survey (orgName, orgWebsite, orgNumber, orgEmail, blurb, siteConsent, mpp_con_name, mpp_email, address, city, state, post_code, emergency_contact, emerg_con_tel_number1, emerg_con_tel_number2, emergency_contact_email, contactConsent)
  VALUES ('Church of Scientology Disaster Response', 'https://www.scientology.org/how-we-help/volunteer-ministers/disaster-relief/', 202-667-6404, 'infocenter@scientology.net', 'Volunteer Ministers have provided effective help at disasters around the globe, from hurricanes in Florida to floods in Italy; from Los Angeles riots to bombings in Moscow; and from the Southeast Asian tsunami to bush fires in Australia. No matter the location, the crisis or its severity, Volunteer Ministers have brought their practical and spiritual aid to these disaster sites.', 'Yes', 'Sue Taylor', 'dcvoad@gmail.com', '1701 20th St NW', 'Washington', 'DC', 20009, 'Sue Taylor', 571-643-5040, 202-667-6404, 'suetaylor1@gmail.com', 'yes');

  INSERT INTO user (username, password, status, active)
  VALUES ('president', 's4mpl3p4ssword1!', 'administrator', true);

  INSERT INTO user (username, password, status, active)
  VALUES ('vicepresident', 's4mpl3p4ssword2!', 'administrator', true);

  INSERT INTO user (username, password, status, active)
  VALUES ('secretary', 's4mpl3p4ssword3!', 'administrator', true);

  INSERT INTO user (username, password, status, active)
  VALUES ('treasurer', 's4mpl3p4ssword4!', 'administrator', true);
