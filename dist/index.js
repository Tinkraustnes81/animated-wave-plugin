window.addEventListener("ww-load", () => {
  window.wewebComponents = window.wewebComponents || {};

  window.wewebComponents["test-plugin"] = {
    init(root, props) {
      const el = document.createElement("div");
      el.textContent = `✅ Test Plugin Loaded. Message: ${props.message || "Hello from WeWeb"}`;
      el.style.padding = "10px";
      el.style.backgroundColor = props.color || "#4CAF50";
      el.style.color = "white";
      root.appendChild(el);
    },
    update(root, props) {
      root.firstChild.textContent = `✅ Test Plugin Updated. Message: ${props.message || "Hello again"}`;
      root.firstChild.style.backgroundColor = props.color || "#4CAF50";
    },
    destroy(root) {
      root.innerHTML = "";
    }
  };
});
