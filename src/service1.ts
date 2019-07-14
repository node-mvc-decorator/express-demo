import {Service} from "@node-mvc-decorator/core/lib/decorators/service";

@Service
export class Service1 {
    test() {
        console.log('service1');
    }
}
