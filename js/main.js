(function () {
  "use strict";

  var data = window.siteData || { contact: {}, projects: [] };
  var labels = {
    demo: "Ver demo",
    pdf: "Ver PDF",
    sheet: "Baixar planilha",
  };

  renderContact(data.contact || {});
  renderProjects(Array.isArray(data.projects) ? data.projects : []);

  function renderContact(contact) {
    var list = document.querySelector("[data-contact]");
    if (!list) return;

    var githubLink = list.querySelector("[data-github]");
    var githubUrl = safeHttpUrl(contact.github);
    if (githubLink) {
      var githubItem = githubLink.closest("li");
      if (githubUrl) {
        githubLink.href = githubUrl;
        var githubText = githubLink.querySelector(".profile-url");
        if (githubText) githubText.textContent = prettyUrl(githubUrl);
        if (githubItem) githubItem.hidden = false;
      } else if (githubItem) {
        githubItem.hidden = true;
      }
    }

    [
      { key: "workana", label: "Workana", icon: "i-case" },
      { key: "linkedin", label: "LinkedIn", icon: "i-linkedin" },
    ].forEach(function (entry) {
      var url = safeHttpUrl(contact[entry.key]);
      if (!url) return;
      list.appendChild(profileItem(entry.label, url, entry.icon));
    });
  }

  function renderProjects(projects) {
    var grid = document.querySelector("[data-projects]");
    if (!grid) return;

    var items = projects.filter(function (project) {
      return project && String(project.title || "").trim();
    });

    if (!items.length) {
      var empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Nenhum projeto cadastrado ainda.";
      grid.replaceChildren(empty);
      return;
    }

    grid.replaceChildren();
    items.forEach(function (project) {
      grid.appendChild(projectCard(project));
    });
  }

  function projectCard(project) {
    var article = document.createElement("article");
    article.className = "project";
    if (project.slug) article.id = "projeto-" + project.slug;

    var media = document.createElement("div");
    media.className = "project-media";
    var cover = safeAssetPath(project.cover);
    if (cover) {
      var img = document.createElement("img");
      img.src = cover;
      img.alt = project.coverAlt || "Capa do projeto " + project.title;
      img.width = 1200;
      img.height = 800;
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
    }
    article.appendChild(media);

    var body = document.createElement("div");
    body.className = "project-body";

    if (project.demonstrative) {
      var tag = document.createElement("p");
      tag.className = "tag";
      tag.textContent = "Projeto demonstrativo";
      body.appendChild(tag);
    }

    var title = document.createElement("h3");
    title.textContent = project.title;
    body.appendChild(title);

    if (project.description) {
      var text = document.createElement("p");
      text.textContent = project.description;
      body.appendChild(text);
    }

    var actions = document.createElement("div");
    actions.className = "project-actions";
    var primarySet = false;
    (Array.isArray(project.links) ? project.links : []).forEach(function (link) {
      var href = safeAssetPath(link && link.href);
      var label = (link && link.label) || labels[link && link.kind];
      if (!href || !label) return;

      var anchor = document.createElement("a");
      anchor.className = "btn " + (primarySet ? "btn-ghost" : "btn-primary");
      anchor.href = href;
      primarySet = true;

      var iconName = link.kind === "sheet" ? "i-download" : "i-external";
      anchor.appendChild(icon(iconName));
      anchor.appendChild(document.createTextNode(label));

      if (link.kind === "sheet") {
        anchor.setAttribute("download", "");
      } else {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      actions.appendChild(anchor);
    });

    if (actions.childElementCount) body.appendChild(actions);
    article.appendChild(body);
    return article;
  }

  function profileItem(label, url, iconName) {
    var item = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.className = "profile";
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "me noopener noreferrer";

    var mark = document.createElement("span");
    mark.className = "profile-mark";
    mark.appendChild(icon(iconName));

    var text = document.createElement("span");
    text.className = "profile-text";
    var name = document.createElement("span");
    name.className = "profile-name";
    name.textContent = label;
    var pretty = document.createElement("span");
    pretty.className = "profile-url";
    pretty.textContent = prettyUrl(url);
    text.appendChild(name);
    text.appendChild(pretty);

    anchor.appendChild(mark);
    anchor.appendChild(text);
    item.appendChild(anchor);
    return item;
  }

  function icon(id) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "ico");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#" + id);
    svg.appendChild(use);
    return svg;
  }

  function safeHttpUrl(value) {
    try {
      var url = new URL(String(value || "").trim());
      if (url.protocol === "https:" || url.protocol === "http:") return url.href;
    } catch (error) {
      return "";
    }
    return "";
  }

  function safeAssetPath(value) {
    var href = String(value == null ? "" : value).trim();
    if (!href) return "";
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return "";
    if (href.indexOf("//") === 0 || href.indexOf("\\") !== -1) return "";
    return href;
  }

  function prettyUrl(url) {
    return String(url)
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "");
  }
})();
