import defined from './defined';

const definePropertyWorks = (function() {
    try {
        return 'x' in Object.defineProperty({}, 'x', {});
    } catch (e) {
        return false;
    }
})();

let  defineProperties = Object.defineProperties;
if (!definePropertyWorks || !defined(defineProperties)) {
    defineProperties = function(o) {
        return o;
    };
}

export default defineProperties;
