import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.min.css'
import '../styles/reset.css'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { icons } from "./icons";

library.add(icons);
dom.watch();