import {Service2} from "./service2";
import {Controller} from "@node-mvc-decorator/core/lib/decorators/controller";
import {GetMapping} from "@node-mvc-decorator/core/lib/decorators/get-mapping";
import {RequestMapping} from "@node-mvc-decorator/core/lib/decorators/request-mapping";

@Controller
@RequestMapping('controller2')
export class Controller2 {

    constructor(private service2: Service2) {}

    @GetMapping
    testGet() {
        this.service2.test();
        console.log(123231123);
        return {
            'test': 'hello world'
        };
    }

}
