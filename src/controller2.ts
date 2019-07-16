import {Service2} from "./service2";
import {Controller} from "@node-mvc-decorator/core";
import {GetMapping} from "@node-mvc-decorator/core";
import {RequestMapping} from "@node-mvc-decorator/core";
import {RequestMethod} from '@node-mvc-decorator/core';
import {RequestParam} from '@node-mvc-decorator/core';
import {RequestBody} from '@node-mvc-decorator/core';

@Controller
@RequestMapping('controller2')
export class Controller2 {

    constructor(private service2: Service2) {}

    @GetMapping
    testGet1(@RequestParam('a') a: string) {
        this.service2.test();
        return {
            'test': 'hello world'
        };
    }
    @RequestMapping({path: 'test', params: ['a=1', 'b'], method: [RequestMethod.GET, RequestMethod.POST]})
    test(@RequestBody body: any) {
        return 'hello world';
    }

}
