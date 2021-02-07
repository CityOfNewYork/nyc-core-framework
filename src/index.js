//////////////////////////////////////////////
// Polyfills
//////////////////////////////////////////////

import "element-closest-polyfill";

//////////////////////////////////////////////
// Modules
//////////////////////////////////////////////

import Accessibility from "./modules/accessibility/";
new Accessibility();

import Accordion from "./modules/accordion/";
new Accordion();

import Alert from "./modules/alert/";
new Alert();

import "./modules/article/";

import "./modules/aspect-ratio";

import Backdrop from "./modules/backdrop/";
new Backdrop();

import "./modules/border";

import "./modules/breakpoint";

import Button from "./modules/button/";
new Button();

import "./modules/card";

import Collapse from "./modules/collapse";
new Collapse();

import "./modules/color";

import "./modules/container";

import "./modules/display";

import Document from "./modules/document";
new Document();

import "./modules/flex";

import Form from "./modules/form";
new Form();

import "./modules/gradient";

import "./modules/grid";

import "./modules/icon";

import "./modules/language";

import "./modules/link";

import Modal from "./modules/modal";
new Modal();

import Navigation from "./modules/navigation";
new Navigation();

import "./modules/opacity";

import "./modules/overflow";

import "./modules/position";

import "./modules/shadow";

import "./modules/sizing";

import "./modules/spacing";

import Tab from "./modules/tab";
new Tab();

import Table from "./modules/table";
new Table();

import "./modules/typography";

import "./modules/z-index";

//////////////////////////////////////////////
// Environments
//////////////////////////////////////////////

if (process.env.NODE_ENV === 'development') {
    console.log("Development Mode");
} else if (process.env.NODE_ENV === 'production') {
    console.log("Production Mode");
}