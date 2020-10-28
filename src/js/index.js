//////////////////////////////////////////////
// Polyfills
//////////////////////////////////////////////

import "element-closest-polyfill";

//////////////////////////////////////////////
// Modules
//////////////////////////////////////////////

import Accordion from "./modules/accordion.js";
new Accordion();

import TextDirection from "./modules/text-direction.js";
new TextDirection();

import CopyrightYear from "./modules/copyright-year.js";
new CopyrightYear();

import KeyBoard from "./modules/keyboard-focus.js";
new KeyBoard();

import AriaCurrent from "./modules/aria-current.js";
new AriaCurrent();

import Dropdown from "./modules/dropdown.js";
new Dropdown();

import Collapse from "./modules/collapse.js";
new Collapse();

import Modal from "./modules/modal.js";
new Modal();

import Tabs from "./modules/tabs.js";
new Tabs();

import Table from "./modules/table.js";
new Table();

import Backdrop from "./modules/backdrop.js";
new Backdrop();

import Form from "./modules/form.js";
new Form();

import DetectAutofill from "./modules/detect-autofill.js";
new DetectAutofill();

// document.designMode = "on";