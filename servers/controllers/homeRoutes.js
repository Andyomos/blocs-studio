export const homePage = (req, res) => {
  res.status(200).render("index");
};

export const portfolioPage = (req, res) => {
  res.status(200).render("portfolio");
};