type MenuItem = {
  text: string;
  url: string;
};

const Menu: Record<string, MenuItem> = {
  App: {
    text: "Code Cabinet",
    url: "/app",
  },
  Gallery: {
    text: "Gallery",
    url: "/app/gallery",
  },
  Cabinet: {
    text: "Cabinet",
    url: "/app/cabinet",
  },
};

export default Menu;
