const app = document.querySelector("#app");

const routes = [
  { path: "/", component: "home" },
  { path: "/posts", component: "posts" },
  { path: "/posts/:id", component: "post-single" },
  { path: "contact", component: "contact" },
];

app.onclick = (e) => {
  if (e.target.classList.contains("link")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    // console.log(path);
    window.location.hash = path;
  }
};

window.addEventListener("popstate", () => {
  let path = window.location.hash;
  path = path.substring(1, path.length);

  for (const route of routes) {
    const updatedPath = replacer(route.path, path);
    // console.log(updateedPath);

    if (updatedPath.path === path) {
      // console.log(updatedPath.path);
      const page = `./pages/${route.component}.js`;

      import(page).then((module) => {
        const content = module.default;
        document.querySelector("#content").innerHTML = content(
          updatedPath.params
        );
        // console.log(module.default);
      });
    }
  }
});

function replacer(routerPath, requestedPath) {
  const params = [];
  const splitedRouterPath = routerPath.split("/");
  const splitedRequestPath = requestedPath.split("/");

  for (let i = 0; i < splitedRouterPath.length; i++) {
    if (splitedRouterPath[i].startsWith(":")) {
      splitedRouterPath[i] = splitedRequestPath[i];
      params.push(splitedRequestPath[i]);
    }
  }
  return { params, path: splitedRouterPath.join("/") };
}
