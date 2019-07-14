import {Controller1} from "./src/controller1";
import {Controller2} from "./src/controller2";
import {bootstrap} from "@node-mvc-decorator/express";

bootstrap(Controller1, Controller2)
    .listen(3000, () => console.log('启动成功'));
