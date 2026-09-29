const mailBase =
  "https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com";

const signature =
  "\n\n--\nReply to: BirchFamilyLLCFL@gmail.com | +1 754-610-1052";

const compose = (subject: string, body: string) =>
  `${mailBase}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body + signature
  )}`;

// Investor deck hosted on DocSend
export const deckUrl = "https://docsend.com/view/74m7bpgj3pqjkmqd";

export const inquiryUrl = compose(
  "Investor Inquiry - Birch Aluminum",
  "Hello Birch Aluminum Team,\n\nI would like to learn more about the two-stage Birch Aluminum investment plan.\n\nName:\nCompany:\nPhone:"
);

export const callUrl = compose(
  "Investor Call Request - Birch Aluminum",
  "Hello Birch Aluminum Team,\n\nI would like to schedule an investor call.\n\nName:\nCompany:\nPhone:\nPreferred date/time:"
);

export const customerInquiryUrl = (f: {
  company: string;
  name: string;
  address: string;
  phone: string;
  contactTime: string;
  alloy: string;
  form: string;
  monthly: string;
}) =>
  compose(
    "Supply Inquiry - Birch Aluminum",
    `Hello Birch Aluminum Team,\n\nCompany: ${f.company}\nName: ${f.name}\nAddress: ${f.address || "-"}\nPhone: ${f.phone || "-"}\nBetter time to contact: ${f.contactTime || "-"}\n\nAlloy: ${f.alloy}\nProduct form: ${f.form}\nMonthly consumption: ${f.monthly}`
  );
