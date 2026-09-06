const mailBase =
  "https://mail.google.com/mail/?view=cm&fs=1&to=BirchFamilyLLCFL@gmail.com";

const signature =
  "\n\n--\nReply to: BirchFamilyLLCFL@gmail.com | +1 754-610-1052";

const compose = (subject: string, body: string) =>
  `${mailBase}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body + signature
  )}`;

// Investor deck request (update to a hosted deck URL when available)
export const deckUrl = compose(
  "Investor Deck Request - Birch Aluminum",
  "Hello Birch Aluminum Team,\n\nPlease send me the investor deck.\n\nName:\nCompany:\nPhone:"
);

export const inquiryUrl = compose(
  "Investor Inquiry - Birch Aluminum",
  "Hello Birch Aluminum Team,\n\nI would like to learn more about the two-stage Birch Aluminum investment plan.\n\nName:\nCompany:\nPhone:"
);

export const callUrl = compose(
  "Investor Call Request - Birch Aluminum",
  "Hello Birch Aluminum Team,\n\nI would like to schedule an investor call.\n\nName:\nCompany:\nPhone:\nPreferred date/time:"
);
