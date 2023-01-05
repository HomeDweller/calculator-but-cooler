function add(val) {

    document.getElementById('input-area').value += val

    return val

}

function solve() {

    let x = document.getElementById('input-area').value

    let result = eval(x);
    document.getElementById('input-area').value = result
    return result

}

function reset() {
    document.getElementById('input-area').value = ""
}