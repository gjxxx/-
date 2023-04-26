export let a = 10
export let x = 20

function fn(){
    return a + x
}
//export{a,x} //分别导出
export default fn //默认导出