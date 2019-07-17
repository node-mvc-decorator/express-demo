import {Controller1} from "./src/controller1";
import {Controller2} from "./src/controller2";
import {app} from "@node-mvc-decorator/express";
import * as express from 'express';

app(Controller1, Controller2)
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .listen(3000, () => console.log('启动成功'));
