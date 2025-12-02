import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Input, Button } from "@chakra-ui/react";
import { create } from "zustand";
import { useState, useEffect } from "react";
import { u as useMaterial } from "./router-Dn1SBjCA.mjs";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "zustand/middleware";
import "@material/material-color-utilities";
const useHeader = create((set) => ({
  title: null,
  icon: null,
  setTitle: (title) => set({ title }),
  setIcon: (icon) => set({ icon })
}));
function App() {
  const {
    setTitle
  } = useHeader();
  const {
    color,
    setColor
  } = useMaterial();
  const [value, setValue] = useState(color);
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Input, { type: "text", value, onChange: (e) => setValue(e.target.value) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => setColor(value), children: "Save" })
  ] });
}
export {
  App as component
};
