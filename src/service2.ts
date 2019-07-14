import {Service} from "@node-mvc-decorator/core/lib/decorators/service";

@Service
export class Service2 {
    test() {
        console.log('service1');
    }
}
