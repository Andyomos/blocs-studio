export const homePage = (req, res) => {
  res.status(200).render("index", {title: "Home"});
};

export const portfolioPage = (req, res) => {
  res.status(200).render("portfolio", {title: "Portfolio"});
};