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

export const commercialInquiryUrl = (f: Record<string, string>) =>
  compose(
    `${f.type} - ${f.company} - Birch Aluminum`,
    `Hello Birch Aluminum Team,\n\nInquiry type: ${f.type}\nCompany: ${f.company}\nContact: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || "-"}\nWebsite: ${f.website || "-"}\n\nMaterial / product: ${f.material}\nMonthly volume (lb/month): ${f.volume || "-"}\nDelivery / shipping region: ${f.region || "-"}\nBest time to contact: ${f.contactTime || "-"}\n\nDetails / specification:\n${f.message}`
  );
