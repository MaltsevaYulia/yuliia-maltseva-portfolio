import contactsList from "@/constants/contactList";
import selectIcon from "@/helpers/selectIcon";
import Link from "next/link";
import React from "react";

const ContactsList = () => {
  return (
    <address>
      <ul>
        {contactsList.map(({ title, url, icon }) => (
          <li className="flex items-center gap-2 cursor">
            {selectIcon(icon)}
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default ContactsList;
